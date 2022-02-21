import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import { DateTime } from 'luxon';

export const namespaced = true;

export const state = () => ({
  theme: 'dark' as string,
  compact: true as boolean,
  timeZone: 'Europe/Moscow' as string,
});

export type SettingsState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_THEME: (_state, payload: string) => (_state.theme = payload),
  SET_COMPACT: (_state, payload: boolean) => (_state.compact = payload),
  SET_TIMEZONE: (_state, payload: string) => (_state.timeZone = payload),
});

export const getters = getterTree(state, {});

export const actions = actionTree(
  { state, mutations, getters },
  {
    nuxtServerInit({ dispatch, commit }, context: Context) {
      const theme = context.app.$cookies.get('settings_theme');
      const compact = context.app.$cookies.get('settings_compact');
      const timeZone = context.app.$cookies.get('settings_timezone');

      if (theme) dispatch('setTheme', theme);
      if (compact !== null && compact !== undefined) dispatch('setCompact', compact);
      if (timeZone) commit('SET_TIMEZONE', timeZone);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nuxtClientInit({ dispatch }, { app }: Context) {
      const timeZone = DateTime.local().zoneName;
      dispatch('setTimeZone', timeZone);
    },

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

    setTimeZone({ commit }, payload: string) {
      this.app.$cookies.set('settings_timezone', payload, {
        path: '/',
        sameSite: 'lax',
        maxAge: 86400 * 90,
      });
      commit('SET_TIMEZONE', payload);
    },
  },
);
