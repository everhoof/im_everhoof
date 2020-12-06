import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import { FetchResult } from 'apollo-link';
import GetCurrentUser from '~/graphql/queries/get-current-user.graphql';
import {
  GetCurrentUserQuery,
  SignInMutation,
  SignInMutationVariables,
  SignUpMutation,
  SignUpMutationVariables,
} from '~/graphql/schema';
import SignIn from '~/graphql/mutations/sign-in.graphql';
import SignUp from '~/graphql/mutations/sign-up.graphql';

export const namespaced = true;

export const state = () => ({
  userId: null as number | null,
  user: null as GetCurrentUserQuery['getCurrentUser'] | null,
  loggedIn: false as boolean,
  loginModal: false as boolean,
  registerModal: false as boolean,
});

export type AuthState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_USER_ID: (_state, payload: number | null) => (_state.userId = payload),
  SET_USER: (_state, payload: GetCurrentUserQuery['getCurrentUser']) => (_state.user = payload),
  SET_LOGGED_IN: (_state, payload: boolean) => (_state.loggedIn = payload),
  SET_LOGIN_MODAL: (_state, payload: boolean) => {
    _state.loginModal = payload;
  },
  SET_REGISTER_MODAL: (_state, payload: boolean) => {
    _state.registerModal = payload;
  },
});

export const getters = getterTree(state, {
  isAdmin: (_state): boolean => !!_state.user?.roles.find((role) => role.name === 'ADMIN') || false,
});

export const actions = actionTree(
  { state, mutations, getters },
  {
    async nuxtServerInit({ commit, dispatch }, context: Context) {
      const id = context.app.$cookies.get('user_id');
      const token = context.app.$cookies.get('token');

      if (id) commit('SET_USER_ID', parseInt(id, 10));
      if (token) commit('SET_LOGGED_IN', true);
      await dispatch('getCurrentUser', context);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nuxtClientInit({ commit }, { app }: Context) {},

    async signIn(
      { commit, dispatch },
      variables: SignInMutationVariables,
    ): Promise<FetchResult<SignInMutation>> {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return { data: null };

      const result = await client.mutate<SignInMutation, SignInMutationVariables>({
        mutation: SignIn,
        variables,
      });

      if (!result.errors && result.data) {
        await this.app.$apolloHelpers.onLogin(result.data.signIn.value);
        commit('SET_USER_ID', result.data.signIn.ownerId);
        commit('SET_LOGGED_IN', true);
        commit('SET_LOGIN_MODAL', false);
        commit('SET_REGISTER_MODAL', false);
        await dispatch('getCurrentUser');
        await this.app.$accessor.chat.nuxtClientInit();
      }

      return result;
    },

    async signUp({ dispatch }, variables: SignUpMutationVariables): Promise<FetchResult<SignUpMutation>> {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return { data: null };
      const response = await client.mutate<SignUpMutation, SignUpMutationVariables>({
        mutation: SignUp,
        variables,
      });

      if (!response.errors && response.data) {
        await dispatch('signIn', variables);
      }

      return response;
    },

    async logout({ commit }): Promise<void> {
      await this.app.$apolloHelpers.onLogout(undefined);
      commit('SET_LOGGED_IN', false);
      if (this.$router.currentRoute.name !== 'main') {
        await this.$router.push({ name: 'main' });
      }
    },

    async getCurrentUser({ commit }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<GetCurrentUserQuery>({
          query: GetCurrentUser,
        });
        if (errors) return;
        if (!data) return;
        commit('SET_USER', data.getCurrentUser);
      } catch (e) {}
    },
  },
);
