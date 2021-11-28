import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import { ExecutionResult, FetchResult } from 'apollo-link';
import { AccessControl, Query } from 'accesscontrol';
import GetCurrentUser from '~/graphql/queries/get-current-user.graphql';
import GetGrants from '~/graphql/queries/get-grants.graphql';
import {
  GetCurrentUserQuery,
  GetGrantsQuery,
  OAuthDiscordMutation,
  RequestPasswordResetMutation,
  RequestPasswordResetMutationVariables,
  ResetPasswordMutation,
  ResetPasswordMutationVariables,
  SignInMutation,
  SignInMutationVariables,
  SignUpMutation,
  SignUpMutationVariables,
} from '~/graphql/schema';
import SignIn from '~/graphql/mutations/sign-in.graphql';
import SignUp from '~/graphql/mutations/sign-up.graphql';
import RequestPasswordReset from '~/graphql/mutations/request-password-reset.graphql';
import ResetPassword from '~/graphql/mutations/reset-password.graphql';

export const namespaced = true;

export const state = () => ({
  userId: null as number | null,
  user: null as GetCurrentUserQuery['getCurrentUser'] | null,
  grants: '{"UNVERIFIED_USER":{"message":{"read:any":["*"]}}}' as any,
  loggedIn: false as boolean,
});

export type AuthState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_USER_ID: (_state, payload: number | null) => (_state.userId = payload),
  SET_USER: (_state, payload: GetCurrentUserQuery['getCurrentUser']) => (_state.user = payload),
  SET_GRANTS: (_state, payload: any) => (_state.grants = JSON.stringify(payload)),
  SET_LOGGED_IN: (_state, payload: boolean) => (_state.loggedIn = payload),
});

export const getters = getterTree(state, {
  isAdmin: (_state): boolean => !!_state.user?.roles.find((role) => role.name === 'ADMIN') || false,
  ac: (_state): AccessControl => new AccessControl(JSON.parse(_state.grants)),
  can: (_state, _getters): Query =>
    (_state.user && _getters.ac.can(_state.user.roles.map((role) => role.name))) ||
    _getters.ac.can('UNVERIFIED_USER'),
});

export const actions = actionTree(
  { state, mutations, getters },
  {
    async nuxtServerInit({ state, commit, dispatch }, context: Context) {
      const id = context.app.$cookies.get('user_id');
      const token = context.app.$cookies.get('token');

      if (id) commit('SET_USER_ID', parseInt(id, 10));
      if (token) commit('SET_LOGGED_IN', true);
      if (state.loggedIn) {
        await dispatch('getCurrentUser', context);
      } else {
        await dispatch('getGrants', context);
      }
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nuxtClientInit({ commit }, { app }: Context) {},

    async loginHandler({ commit, dispatch }, token: OAuthDiscordMutation['OAuthDiscord']) {
      await this.app.$apolloHelpers.onLogin(token.value);
      commit('SET_USER_ID', token.ownerId);
      commit('SET_LOGGED_IN', true);
      await dispatch('getCurrentUser');
      await this.app.$accessor.chat.nuxtClientInit();
    },

    async signIn({ dispatch }, variables: SignInMutationVariables): Promise<FetchResult<SignInMutation>> {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return { data: null };

      const result = await client.mutate<SignInMutation, SignInMutationVariables>({
        mutation: SignIn,
        variables,
      });

      if (!result.errors && result.data) {
        dispatch('loginHandler', result.data.signIn);
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

    async requestPasswordReset(_context, variables: RequestPasswordResetMutationVariables): Promise<boolean> {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return false;
      const response = await client.mutate<
        RequestPasswordResetMutation,
        RequestPasswordResetMutationVariables
      >({
        mutation: RequestPasswordReset,
        variables,
      });

      return !!(!response.errors && response.data);
    },

    async resetPassword(
      { commit, dispatch },
      variables: ResetPasswordMutationVariables,
    ): Promise<ExecutionResult<ResetPasswordMutation>> {
      const client = this.app.apolloProvider?.defaultClient;
      if (!client) return Promise.resolve({ data: null });
      const result = await client.mutate<ResetPasswordMutation, ResetPasswordMutationVariables>({
        mutation: ResetPassword,
        variables,
      });

      if (!result.errors && result.data) {
        await this.app.$apolloHelpers.onLogin(result.data.resetPassword.value);
        commit('SET_USER_ID', result.data.resetPassword.ownerId);
        commit('SET_LOGGED_IN', true);
        await dispatch('getCurrentUser');
        await this.app.$accessor.chat.nuxtClientInit();
      }

      return result;
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
        if (data.getCurrentUser) commit('SET_USER', data.getCurrentUser);
        if (data.getGrants) commit('SET_GRANTS', JSON.parse(data.getGrants));
      } catch (e) {}
    },

    async getGrants({ commit }, context?: Context) {
      const client = context?.app.apolloProvider?.defaultClient ?? this.app.apolloProvider?.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.query<GetGrantsQuery>({
          query: GetGrants,
        });
        if (errors) return;
        if (!data || !data.getGrants) return;
        commit('SET_GRANTS', JSON.parse(data.getGrants));
      } catch (e) {}
    },
  },
);
