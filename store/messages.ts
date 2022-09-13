import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import { Message, MessageState } from '~/types/message';
import {
  DeleteMessageMutation,
  DeleteMessageMutationVariables,
  GetChatDataQuery,
  GetMessagesQuery,
  GetMessagesQueryVariables,
  MessageDeletedSubscription,
  MessageUpdatedSubscription,
} from '~/graphql/schema';
import GetChatData from '~/graphql/queries/get-chat-data.graphql';
import MessageDeleted from '~/graphql/subscriptions/message-deleted.graphql';
import MessageUpdated from '~/graphql/subscriptions/message-updated.graphql';
import GetMessages from '~/graphql/queries/get-messages.graphql';
import DeleteMessage from '~/graphql/mutations/delete-message.graphql';
import { sleep } from '~/tools/util';

export const namespaced = true;

export const state = () => ({
  input: '' as string,
  inputPosition: 0 as number,
  rawMessages: [] as Message[],
  unreadCount: 0 as number,
});

export const mutations = mutationTree(state, {
  SET_INPUT: (_state, payload: string) => (_state.input = payload),
  SET_INPUT_POSITION: (_state, payload: number) => (_state.inputPosition = payload),
  INSERT_INPUT_TEXT: (_state, payload: string) => {
    let message = _state.input.trim();
    const position = _state.inputPosition;
    let insertionText = `${payload} `;

    const start = message.slice(0, position) ?? '';
    const end = message.slice(position) ?? '';
    const lastStartLetter = start.slice(-1) ?? '';
    if (start && lastStartLetter !== ' ') insertionText = ` ${insertionText}`;

    message = [start, insertionText, end].filter((part) => !!part).join('');

    _state.input = message;

    window.$nuxt.$emit('input-focus', { position: position + insertionText.length });
  },
  SET_RAW_MESSAGES: (_state, payload: Message[]) => (_state.rawMessages = payload),
  ADD_RAW_MESSAGE_TO_START: (_state, payload: Message) => _state.rawMessages.unshift(payload),
  ADD_RAW_MESSAGE_TO_END: (_state, payload: Message) => _state.rawMessages.push(payload),
  ADD_RAW_MESSAGES_TO_START: (_state, payload: Message[]) => _state.rawMessages.unshift(...payload),
  ADD_RAW_MESSAGES_TO_END: (_state, payload: Message[]) => _state.rawMessages.push(...payload),
  UPDATE_MESSAGE: (_state, payload: Message) => {
    let index = -1;
    if (payload.randomId !== null) {
      index = _state.rawMessages.findIndex((message) => message.randomId === payload.randomId);
    }
    if (index === -1) {
      index = _state.rawMessages.findIndex((message) => message.id === payload.id);
    }
    if (index !== -1) {
      _state.rawMessages.splice(index, 1, payload);
    } else {
      _state.rawMessages.unshift(payload);
    }
  },
  DELETE_MESSAGE_BY_RANDOM_ID: (_state, payload: string) => {
    if (_state.rawMessages.length === 0) return;

    const index = _state.rawMessages.findIndex(({ randomId }) => randomId === payload);
    if (index === -1) return;
    _state.rawMessages.splice(index, 1);
  },
  INCREMENT_UNREAD: (_state) => (_state.unreadCount = _state.unreadCount + 1),
  RESET_UNREAD: (_state) => (_state.unreadCount = 0),
});

export const getters = getterTree(state, {
  messages: (_state) => Array.from(_state.rawMessages).sort((a, b) => b.createdAtMillis - a.createdAtMillis),
  lastDeliveredId: (_state, getters): null | number => {
    for (let i = 0; i < getters.messages.length; i++) {
      if (getters.messages[i].state === MessageState.DELIVERED) {
        return getters.messages[i].id;
      }
    }

    return null;
  },
});

export const actions = actionTree(
  { state, mutations, getters },
  {
    async nuxtServerInit({ dispatch }, context: Context) {
      await dispatch('fetchBaseData', context);
    },

    nuxtClientInit({ dispatch, commit }) {
      dispatch('subscribeMessageCreated');
      dispatch('subscribeMessageDeleted');
      dispatch('subscribeMessageUpdated');

      window.setTimeout(async () => {
        await dispatch('fetchBaseData');
      }, 3000);

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          commit('RESET_UNREAD');
        }
      });
    },

    async fetchBaseData({ commit }) {
      const client = this.app.apolloProvider.defaultClient;
      if (!client) return;

      const { data, errors } = await client.query<GetChatDataQuery>({ query: GetChatData });
      if (errors || !data) return;

      const messages = data.getMessages.map((message) => new Message(message));
      commit('SET_RAW_MESSAGES', messages);
    },

    async fetchMessages(
      _context,
      payload?: GetMessagesQueryVariables,
    ): Promise<GetMessagesQuery['getMessages'] | void> {
      const client = this?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<GetMessagesQuery, GetMessagesQueryVariables>({
          query: GetMessages,
          variables: payload,
        });
        if (errors || !data) return;

        return data.getMessages;
      } catch (e) {}
    },

    pushMessages(
      { commit },
      payload: {
        variables: GetMessagesQueryVariables;
        messages: GetMessagesQuery['getMessages'];
      },
    ): void {
      const messages = payload.messages.map((message) => new Message(message));

      if (payload.variables?.reverse) {
        commit('ADD_RAW_MESSAGES_TO_END', messages);
      } else {
        commit('ADD_RAW_MESSAGES_TO_START', messages);
      }
    },

    async deleteMessage({ commit }, payload: DeleteMessageMutationVariables) {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return;

      try {
        const { data, errors } = await client.query<DeleteMessageMutation, DeleteMessageMutationVariables>({
          query: DeleteMessage,
          variables: payload,
        });
        if (errors || !data?.deleteMessage) return;

        commit('UPDATE_MESSAGE', new Message(data.deleteMessage));
      } catch (e) {}
    },

    mention({ commit }, payload: { id: number; username: string }) {
      const username = payload.username?.trim();
      if (!payload.id || !username) return;

      const mention = `<@!${payload.id}:${username}>`;
      commit('INSERT_INPUT_TEXT', mention);
    },

    async subscribeMessageCreated({ getters, commit }) {
      const client = this.app.apolloProvider.defaultClient;
      if (!client) return;

      let errorsCount: number = 0;
      const errorTimeouts: number[] = [1, 5, 5, 5, 10, 10, 10, 30, 30, 60];

      do {
        try {
          const variables: GetMessagesQueryVariables = {
            poll: true,
          };
          if (getters.lastDeliveredId) {
            variables.lastId = getters.lastDeliveredId;
          }

          const response = await client.query<GetMessagesQuery, GetMessagesQueryVariables>({
            query: GetMessages,
            variables,
          });

          const messages = response.data.getMessages;
          for (let i = 0; i < messages.length; ++i) {
            commit('UPDATE_MESSAGE', new Message(messages[i]));
          }

          if (messages.length > 0 && process.client && document.visibilityState === 'hidden') {
            commit('INCREMENT_UNREAD');
          }

          errorsCount = 0;
        } catch (e) {
          await sleep((errorTimeouts[errorsCount] ?? 1) * 1000);
          /* eslint-disable no-console */
          console.error(e);
          console.log(`Polling error: waiting ${errorTimeouts[errorsCount]} seconds before retry...`);
          /* eslint-enable no-console */

          errorsCount += 1;

          if (errorsCount >= errorTimeouts.length) {
            errorsCount = 0;
          }
        }
      } while (true);
    },

    subscribeMessageDeleted({ commit }) {
      const client = this.app.apolloProvider.defaultClient;
      if (!client) return;

      client
        .subscribe<MessageDeletedSubscription>({ query: MessageDeleted })
        .subscribe({
          next({ data }) {
            if (!data?.messageDeleted) return;

            commit('UPDATE_MESSAGE', new Message(data.messageDeleted));
          },
        });
    },

    subscribeMessageUpdated({ commit }) {
      const client = this.app.apolloProvider.defaultClient;
      if (!client) return;

      client
        .subscribe<MessageUpdatedSubscription>({ query: MessageUpdated })
        .subscribe({
          next({ data }) {
            if (!data?.messageUpdated) return;

            commit('UPDATE_MESSAGE', new Message(data.messageUpdated));
          },
        });
    },
  },
);
