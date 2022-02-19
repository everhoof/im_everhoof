import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import Vue from 'vue';
import UserUpdated from '~/graphql/subscriptions/user-updated.graphql';
import UpdateOnlineStatus from '~/graphql/mutations/update-online-status.graphql';
import GetUserById from '~/graphql/queries/get-user-by-id.graphql';
import Punish from '~/graphql/mutations/punish.graphql';
import GetOnline from '~/graphql/queries/get-online.graphql';
import OnlineUpdated from '~/graphql/subscriptions/online-updated.graphql';
import {
  GetChatDataQuery,
  GetUserByIdQuery,
  GetUserByIdQueryVariables,
  OnlineUpdatedSubscription,
  PunishMutation,
  PunishMutationVariables,
  UpdateOnlineStatusMutation,
  UserUpdatedSubscription,
} from '~/graphql/schema';
import { Emoji } from '~/types/emoji';

export const namespaced = true;

export const state = () => ({
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
});

export const mutations = mutationTree(state, {
  SET_ONLINE: (_state, payload: GetChatDataQuery['getOnline']) => (_state.online = payload),
  SET_ASIDE_PC_OPENED: (_state, payload: boolean) => (_state.asidePcOpened = payload),
  ADD_USER: (_state, payload: GetUserByIdQuery['getUserById']) => {
    const index = _state.users.findIndex(({ id }) => id === payload.id);
    if (index === -1) _state.users.push(payload);
    else Vue.set(_state.users, index, payload);
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
      await dispatch('fetchOnline', context);
    },

    nuxtClientInit({ dispatch }, context?: Context) {
      dispatch('subscribeOnlineUpdated', context);
      dispatch('subscribeUserUpdated', context);

      if (this.app.$accessor.auth.loggedIn) {
        window.setInterval(async () => {
          if (!this.app.$accessor.auth.loggedIn) return;
          await dispatch('updateOnlineStatus', context);
        }, 30 * 1000);
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

    async fetchOnline({ commit }) {
      const client = this.app.apolloProvider.defaultClient;
      if (!client) return;

      try {
        const { data, errors } = await client.query<GetChatDataQuery>({
          query: GetOnline,
        });
        if (errors || !data) return;

        commit('SET_ONLINE', data.getOnline);
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
  },
);
