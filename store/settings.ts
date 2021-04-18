import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';

export const namespaced = true;

export const state = () => ({
  theme: 'dark' as string,
  compact: true as boolean,
});

export type SettingsState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_THEME: (_state, payload: string) => (_state.theme = payload),
  SET_COMPACT: (_state, payload: boolean) => (_state.compact = payload),
});

export const getters = getterTree(state, {});

export const actions = actionTree(
  { state, mutations, getters },
  {
    nuxtServerInit({ dispatch }, context: Context) {
      const theme = context.app.$cookies.get('settings_theme');
      const compact = context.app.$cookies.get('settings_compact');

      if (theme) dispatch('setTheme', theme);
      if (compact !== null && compact !== undefined) dispatch('setCompact', compact);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nuxtClientInit({ commit }, { app }: Context) {},

    setTheme({ commit }, payload: string) {
      this.app.$cookies.set('settings_theme', payload, {
        path: '/',
        sameSite: 'lax',
        maxAge: 86400 * 90,
      });
      commit('SET_THEME', payload);
    },

    setCompact({ commit }, payload: boolean) {
      this.app.$cookies.set('settings_compact', payload, {
        path: '/',
        sameSite: 'lax',
        maxAge: 86400 * 90,
      });
      commit('SET_COMPACT', payload);
    },
  },
);
