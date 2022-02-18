import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import Vue from 'vue';
import { DateTime } from 'luxon';
import MessageCreated from '~/graphql/subscriptions/message-created.graphql';
import MessageDeleted from '~/graphql/subscriptions/message-deleted.graphql';
import MessageUpdated from '~/graphql/subscriptions/message-updated.graphql';
import OnlineUpdated from '~/graphql/subscriptions/online-updated.graphql';
import UserUpdated from '~/graphql/subscriptions/user-updated.graphql';
import UpdateOnlineStatus from '~/graphql/mutations/update-online-status.graphql';
import DeleteMessage from '~/graphql/mutations/delete-message.graphql';
import GetChatData from '~/graphql/queries/get-chat-data.graphql';
import GetUserById from '~/graphql/queries/get-user-by-id.graphql';
import Punish from '~/graphql/mutations/punish.graphql';
import GetMessages from '~/graphql/queries/get-messages.graphql';
import {
  DeleteMessageMutation,
  DeleteMessageMutationVariables,
  GetChatDataQuery,
  GetMessagesQuery,
  GetMessagesQueryVariables,
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
  MessageCreatedSubscription,
  MessageDeletedSubscription,
  MessageUpdatedSubscription,
  OnlineUpdatedSubscription,
  PunishMutation,
  PunishMutationVariables,
  UpdateOnlineStatusMutation,
  UserUpdatedSubscription,
} from '~/graphql/schema';
import { Emoji } from '~/types/emoji';
import { ChatMessage } from '~/types/messages';

export const namespaced = true;

export const state = () => ({
  message: '' as string,
  messages: [] as ChatMessage[],
  online: [] as GetChatDataQuery['getOnline'],
  emoji: [
    { name: 'ab4', ext: 'png' },
    { name: 'chrysalis4', ext: 'png' },
    { name: 'kir5', ext: 'png' },
    { name: 'chrysalis2', ext: 'png' },
    { name: 'sc3', ext: 'png' },
    { name: 'tw4', ext: 'png' },
    { name: 'kir2', ext: 'png' },
    { name: 'ab2', ext: 'png' },
    { name: 'tw1', ext: 'png' },
    { name: 'kir4', ext: 'png' },
    { name: 'tw2', ext: 'png' },
    { name: 'sc1', ext: 'png' },
    { name: 'ab3', ext: 'png' },
    { name: 'tw3', ext: 'png' },
    { name: 'kir3', ext: 'png' },
    { name: 'chrysalis5', ext: 'png' },
    { name: 'sc2', ext: 'png' },
    { name: 'sc5', ext: 'png' },
    { name: 'chrysalis1', ext: 'png' },
    { name: 'ab5', ext: 'png' },
    { name: 'tw5', ext: 'png' },
    { name: 'chrysalis3', ext: 'png' },
    { name: 'ab1', ext: 'png' },
    { name: 'sc4', ext: 'png' },
    { name: 'kir1', ext: 'png' },
    { name: 'bestbat', ext: 'png' },
    { name: 'bj', ext: 'png' },
    { name: 'bj_smug', ext: 'png' },
    { name: 'bj_horror', ext: 'png' },
    { name: 'bj_wat', ext: 'png' },
    { name: 'bj_cool', ext: 'png' },
    { name: 'bj_hey', ext: 'png' },
    { name: 'bj_skuka', ext: 'png' },
    { name: 'bj_filly', ext: 'png' },
    { name: 'bj_like', ext: 'png' },
    { name: 'bj_ok', ext: 'png' },
    { name: 'bj_shotgun', ext: 'png' },
    { name: 'dash', ext: 'gif' },
    { name: 'facehoof', ext: 'png' },
    { name: 'bat_cute', ext: 'gif' },
    { name: 'isee', ext: 'gif' },
    { name: 'lyraspin', ext: 'gif' },
    { name: 'oldbol', ext: 'png' },
    { name: 're1', ext: 'png' },
    { name: 're4', ext: 'png' },
    { name: 're2', ext: 'png' },
    { name: 're3', ext: 'png' },
    { name: 'prrr', ext: 'gif' },
    { name: 'madness', ext: 'png' },
    { name: 'shimmy', ext: 'gif' },
    { name: 'chrissymlem', ext: 'gif' },
    { name: 'fire_mmm', ext: 'png' },
    { name: 'fire_angry', ext: 'png' },
    { name: 'fire_wut', ext: 'png' },
    { name: 'fire_meh', ext: 'png' },
    { name: 'fire_cool', ext: 'png' },
    { name: 'privet', ext: 'gif' },
    { name: 'shoock', ext: 'gif' },
    { name: 'aveluna', ext: 'gif' },
    { name: 'batpony', ext: 'gif' },
    { name: 'batpony3', ext: 'png' },
    { name: 'batpony4', ext: 'png' },
    { name: 'batpony1', ext: 'png' },
    { name: 'batpony5', ext: 'png' },
    { name: 'batpony2', ext: 'png' },
    { name: 'eeeeeee', ext: 'png' },
    { name: 'reeeeeeee', ext: 'gif' },
    { name: 'lilpip2', ext: 'png' },
    { name: 'lilpip1', ext: 'png' },
    { name: 'kiss', ext: 'gif' },
    { name: 'eeeees', ext: 'gif' },
    { name: 'pink2', ext: 'png' },
    { name: 'pink3', ext: 'png' },
    { name: 'pink1', ext: 'png' },
    { name: 'pink4', ext: 'png' },
    { name: 'pink5', ext: 'png' },
    { name: 'bad', ext: 'png' },
  ] as Emoji[],
  users: [] as GetUserByIdQuery['getUserById'][],
  asidePcOpened: true as boolean,
  unreadCount: 0 as number,
});

export type ChatState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_MESSAGES: (_state, payload: GetChatDataQuery['getMessages']) => (_state.messages = payload),
  SET_MESSAGE: (_state, payload: string) => (_state.message = payload),
  ADD_MESSAGES_TO_START: (_state, payload: GetChatDataQuery['getMessages']) => {
    _state.messages.unshift(...payload);
  },
  ADD_MESSAGES_TO_END: (_state, payload: GetChatDataQuery['getMessages']) => {
    _state.messages.push(...payload);
  },
  DELETE_MESSAGE_BY_INDEX: (_state, payload: number) => {
    _state.messages.splice(payload, 1);
  },
  SET_MESSAGE_BY_INDEX: (_state, payload: { index: number; message: GetChatDataQuery['getMessages'][0] }) => {
    _state.messages.splice(payload.index, 1, payload.message);
  },
  DELETE_MESSAGES_AFTER_ID: (_state, payload: number) => {
    if (_state.messages.length === 0) return;

    for (let i = 0; i < _state.messages.length - 1; i++) {
      if (_state.messages[i].id > payload) {
        _state.messages.splice(i, 1);
      } else {
        break;
      }
    }
  },
  DELETE_MESSAGE_BY_RANDOM_ID: (_state, payload: string) => {
    if (_state.messages.length === 0) return;

    const index = _state.messages.findIndex(({ randomId }) => randomId === payload);

    if (index === -1) return;

    _state.messages.splice(index, 1);
  },
  UPDATE_MESSAGES_SEPARATORS: (_state) => {
    let prevDay = -1;
    for (let i = _state.messages.length - 1; i >= 0; i--) {
      if (_state.messages[i].deletedAt) continue;
      const day = DateTime.fromISO(_state.messages[i].createdAt).day;
      _state.messages[i].dayFirst = prevDay !== -1 && prevDay !== day;
      prevDay = day;
    }
  },
  SET_ONLINE: (_state, payload: GetChatDataQuery['getOnline']) => (_state.online = payload),
  SET_ASIDE_PC_OPENED: (_state, payload: boolean) => (_state.asidePcOpened = payload),
  ADD_USER: (_state, payload: GetUserByIdQuery['getUserById']) => {
    const index = _state.users.findIndex(({ id }) => id === payload.id);
    if (index === -1) _state.users.push(payload);
    else Vue.set(_state.users, index, payload);
  },
  INCREMENT_UNREAD: (_state) => {
    _state.unreadCount = _state.unreadCount + 1;
  },
  RESET_UNREAD: (_state) => {
    _state.unreadCount = 0;
  },
});

export const getters = getterTree(state, {
  user: (_state) => (id: number): GetUserByIdQuery['getUserById'] | undefined =>
    _state.users.find((user) => user.id === id),
});

export const actions = actionTree(
  { state, mutations, getters },
  {
    async nuxtServerInit({ dispatch, commit }, context: Context) {
      const asidePcOpened = (context.app.$cookies.get('aside_pc_opened') ?? true) === true;
      commit('SET_ASIDE_PC_OPENED', asidePcOpened);
      await dispatch('getChatData', context);
    },

    async nuxtClientInit({ dispatch, commit }, context?: Context) {
      dispatch('subscribeMessageCreated', context);
      dispatch('subscribeMessageDeleted', context);
      dispatch('subscribeMessageUpdated', context);
      dispatch('subscribeOnlineUpdated', context);
      dispatch('subscribeUserUpdated', context);
      if (this.app.$accessor.auth.loggedIn) {
        await dispatch('updateOnlineStatus', context);

        window.setTimeout(async () => {
          await dispatch('getChatData', context);
          window.setInterval(async () => {
            if (!this.app.$accessor.auth.loggedIn) return;
            await dispatch('updateOnlineStatus', context);
          }, 30 * 1000);
        }, 3000);
      }

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          commit('RESET_UNREAD');
        }
      });
    },

    addMessage({ state, commit, rootGetters }, payload: MessageCreatedSubscription['messageCreated']) {
      let index = payload.id && payload.id > 0 ? state.messages.findIndex(({ id }) => id === payload.id) : -1;
      if (index === -1) {
        index = payload.randomId
          ? state.messages.findIndex(({ randomId }) => randomId === payload.randomId)
          : -1;
      }
      if (payload.deletedAt && index !== -1) {
        if (rootGetters['auth/isAdmin']) {
          commit('SET_MESSAGE_BY_INDEX', { index, message: payload });
        } else {
          commit('DELETE_MESSAGE_BY_INDEX', index);
        }
      } else if (index === -1) {
        commit('ADD_MESSAGES_TO_START', [payload]);
      } else {
        commit('SET_MESSAGE_BY_INDEX', { index, message: payload });
      }
    },

    subscribeMessageCreated({ state, dispatch, commit }, context: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (client) {
        const messageCreatedObserver = client.subscribe<MessageCreatedSubscription>({
          query: MessageCreated,
        });
        messageCreatedObserver.subscribe({
          async next({ data }) {
            if (!data?.messageCreated) return;
            if (state.messages.length > 0) {
              let lastId;
              for (let i = 0; i < state.messages.length; i++) {
                if ((state.messages[i] as ChatMessage).state === undefined && state.messages[i].id > 0) {
                  lastId = state.messages[i].id;
                  break;
                }
              }
              await dispatch('addMessage', data.messageCreated);
              if (lastId) await dispatch('getMessages', { lastId });
            } else {
              await dispatch('addMessage', data.messageCreated);
            }

            if (process.client && document.visibilityState === 'hidden') {
              commit('INCREMENT_UNREAD');
            }
          },
        });
      }
    },

    subscribeOnlineUpdated({ commit }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (client) {
        const onlineUpdatedObserver = client.subscribe<OnlineUpdatedSubscription>({
          query: OnlineUpdated,
        });
        onlineUpdatedObserver.subscribe({
          next({ data }) {
            if (!data?.onlineUpdated) return;
            commit('SET_ONLINE', data.onlineUpdated);
          },
        });
      }
    },

    subscribeMessageDeleted({ dispatch }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (client) {
        const onlineUpdatedObserver = client.subscribe<MessageDeletedSubscription>({
          query: MessageDeleted,
        });
        onlineUpdatedObserver.subscribe({
          next({ data }) {
            if (!data?.messageDeleted) return;
            dispatch('addMessage', data.messageDeleted);
          },
        });
      }
    },

    subscribeMessageUpdated({ dispatch }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (client) {
        const onlineUpdatedObserver = client.subscribe<MessageUpdatedSubscription>({
          query: MessageUpdated,
        });
        onlineUpdatedObserver.subscribe({
          next({ data }) {
            if (!data?.messageUpdated) return;
            dispatch('addMessage', data.messageUpdated);
          },
        });
      }
    },

    subscribeUserUpdated({ commit }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (client) {
        const userUpdatedObserver = client.subscribe<UserUpdatedSubscription>({
          query: UserUpdated,
        });
        userUpdatedObserver.subscribe({
          next({ data }) {
            if (!data?.userUpdated) return;
            commit('ADD_USER', data.userUpdated);
            if (data.userUpdated.id === context?.app.$accessor.auth.user?.id) {
              context?.app.$accessor.auth.SET_USER(data.userUpdated);
            }
          },
        });
      }
    },

    async updateOnlineStatus(_context, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        await client.mutate<UpdateOnlineStatusMutation>({ mutation: UpdateOnlineStatus });
      } catch (e) {}
    },

    async getMessages(
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
      if (payload.variables?.reverse) {
        commit('ADD_MESSAGES_TO_END', payload.messages);
      } else {
        if (payload.variables?.lastId) {
          commit('DELETE_MESSAGES_AFTER_ID', payload.variables.lastId);
        }
        commit('ADD_MESSAGES_TO_START', payload.messages);
      }
      commit('UPDATE_MESSAGES_SEPARATORS');
    },

    async getChatData({ commit }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<GetChatDataQuery>({
          query: GetChatData,
        });
        if (errors || !data) return;
        commit('SET_MESSAGES', data.getMessages);
        commit('UPDATE_MESSAGES_SEPARATORS');
        commit('SET_ONLINE', data.getOnline);
      } catch (e) {}
    },

    async deleteMessage({ dispatch }, payload: DeleteMessageMutationVariables) {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<DeleteMessageMutation, DeleteMessageMutationVariables>({
          query: DeleteMessage,
          variables: payload,
        });
        if (errors || !data?.deleteMessage) return;
        dispatch('addMessage', data.deleteMessage);
      } catch (e) {}
    },

    async fetchUserById({ commit }, payload: GetUserByIdQueryVariables) {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<GetUserByIdQuery, GetUserByIdQueryVariables>({
          query: GetUserById,
          variables: payload,
        });
        if (errors || !data?.getUserById) return;
        commit('ADD_USER', data.getUserById);
      } catch (e) {}
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async punishUser({ commit }, payload: PunishMutationVariables) {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<PunishMutation, PunishMutationVariables>({
          query: Punish,
          variables: payload,
        });
        // eslint-disable-next-line no-useless-return
        if (errors || !data?.punish) return;
      } catch (e) {}
    },

    mention({ state, commit }, payload: { id: number; username: string }) {
      const username = payload.username?.trim();
      if (!payload.id || !username) return;

      let message = state.message.trim();
      if (!new RegExp(`^<@!${payload.id}:${username}>`).test(message)) {
        message = `<@!${payload.id}:${username}> ${message}`;
        commit('SET_MESSAGE', message);
      }

      window.$nuxt.$emit('input-focus');
    },
  },
);
