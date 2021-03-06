import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import Vue from 'vue';
import MessageCreated from '~/graphql/subscriptions/message-created.graphql';
import MessageDeleted from '~/graphql/subscriptions/message-deleted.graphql';
import OnlineUpdated from '~/graphql/subscriptions/online-updated.graphql';
import UpdateOnlineStatus from '~/graphql/mutations/update-online-status.graphql';
import DeleteMessage from '~/graphql/mutations/delete-message.graphql';
import GetChatData from '~/graphql/queries/get-chat-data.graphql';
import {
  DeleteMessageMutation,
  DeleteMessageMutationVariables,
  GetChatDataQuery,
  MessageCreatedSubscription,
  MessageDeletedSubscription,
  OnlineUpdatedSubscription,
  UpdateOnlineStatusMutation,
} from '~/graphql/schema';
import { Emoji } from '~/types/emoji';

export const namespaced = true;

export const state = () => ({
  message: '' as string,
  messages: [] as GetChatDataQuery['getMessages'],
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
  asidePcOpened: true as boolean,
});

export type ChatState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_MESSAGES: (_state, payload: GetChatDataQuery['getMessages']) => (_state.messages = payload),
  SET_MESSAGE: (_state, payload: string) => (_state.message = payload),
  ADD_MESSAGE: (_state, payload: MessageCreatedSubscription['messageCreated']) => {
    const index = _state.messages.findIndex(({ randomId }) => randomId === payload.randomId);
    if (index === -1) _state.messages.unshift(payload);
    else Vue.set(_state.messages, index, payload);
    if (_state.messages.length > 300) _state.messages.splice(-1);
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
      dispatch('subscribeMessageDeleted', context);
      dispatch('subscribeOnlineUpdated', context);
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

    subscribeMessageDeleted({ commit }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (client) {
        const onlineUpdatedObserver = client.subscribe<MessageDeletedSubscription>({
          query: MessageDeleted,
        });
        onlineUpdatedObserver.subscribe({
          next({ data }) {
            if (!data?.messageDeleted) return;
            commit('ADD_MESSAGE', data.messageDeleted);
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

    async deleteMessage({ commit }, payload: DeleteMessageMutationVariables) {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<DeleteMessageMutation, DeleteMessageMutationVariables>({
          query: DeleteMessage,
          variables: payload,
        });
        if (errors || !data?.deleteMessage) return;
        commit('ADD_MESSAGE', data.deleteMessage);
      } catch (e) {}
    },
  },
);
