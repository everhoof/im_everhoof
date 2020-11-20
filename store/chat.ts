import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import MessageCreated from '~/graphql/subscriptions/message-created.graphql';
import OnlineUpdated from '~/graphql/subscriptions/online-updated.graphql';
import UpdateOnlineStatus from '~/graphql/mutations/update-online-status.graphql';
import GetChatData from '~/graphql/queries/get-chat-data.graphql';
import {
  GetChatDataQuery,
  MessageCreatedSubscription,
  OnlineUpdatedSubscription,
  UpdateOnlineStatusMutation,
} from '~/graphql/schema';

export const namespaced = true;

export const state = () => ({
  messages: [] as GetChatDataQuery['getMessages'],
  online: [] as GetChatDataQuery['getOnline'],
  asidePcOpened: true as boolean,
});

export type ChatState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_MESSAGES: (_state, payload: GetChatDataQuery['getMessages']) => (_state.messages = payload),
  ADD_MESSAGE: (_state, payload: MessageCreatedSubscription['messageCreated']) => {
    const index = _state.messages.findIndex(({ id }) => id === payload.id);
    if (index === -1) _state.messages.push(payload);
  },
  SET_ONLINE: (_state, payload: GetChatDataQuery['getOnline']) => (_state.online = payload),
  SET_ASIDE_PC_OPENED: (_state, payload: boolean) => (_state.asidePcOpened = payload),
});

export const getters = getterTree(state, {});

export const actions = actionTree(
  { state, mutations, getters },
  {
    async nuxtServerInit({ dispatch, commit }, context: Context) {
      const asidePcOpened = (context.app.$cookies.get('aside_pc_opened') ?? true) === true;
      commit('SET_ASIDE_PC_OPENED', asidePcOpened);
      await dispatch('getChatData', context);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async nuxtClientInit({ dispatch }, context?: Context) {
      dispatch('subscribeMessageCreated', context);
      dispatch('subscribeOnlineUpdated', context);
      await dispatch('updateOnlineStatus', context);
      if (this.app.$accessor.auth.loggedIn) {
        await dispatch('updateOnlineStatus', context);
        window.setInterval(async () => await dispatch('updateOnlineStatus', context), 30 * 1000);
      }
      await dispatch('getChatData', context);
    },

    subscribeMessageCreated({ commit }, context: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (client) {
        const messageCreatedObserver = client.subscribe<MessageCreatedSubscription>({
          query: MessageCreated,
        });
        messageCreatedObserver.subscribe({
          next({ data }) {
            if (!data?.messageCreated) return;
            commit('ADD_MESSAGE', data.messageCreated);
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

    async updateOnlineStatus(_context, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        await client.query<UpdateOnlineStatusMutation>({ query: UpdateOnlineStatus });
      } catch (e) {}
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
        commit('SET_ONLINE', data.getOnline);
      } catch (e) {}
    },
  },
);
