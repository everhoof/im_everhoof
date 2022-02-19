import { actionTree, getAccessorType, getterTree, mutationTree } from 'typed-vuex';

import { Context } from '@nuxt/types';
import * as auth from '~/store/auth';
import * as chat from '~/store/chat';
import * as modals from '~/store/modals';
import * as settings from '~/store/settings';
import * as messages from '~/store/messages';

export const state = () => ({
  now: 0 as number,
  emojisPanelActive: false as boolean,
  attachPanelActive: false as boolean,
});

export type RootState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_NOW: (_state, payload: number) => (_state.now = payload),
  SET_EMOJIS_PANEL_ACTIVE: (_state, payload: boolean) => (_state.emojisPanelActive = payload),
  TOGGLE_EMOJIS_PANEL: (_state) => (_state.emojisPanelActive = !_state.emojisPanelActive),
  SET_ATTACH_PANEL_ACTIVE: (_state, payload: boolean) => (_state.attachPanelActive = payload),
  TOGGLE_ATTACH_PANEL: (_state) => (_state.attachPanelActive = !_state.attachPanelActive),
});

export const getters = getterTree(state, {});

export const actions = actionTree(
  { state, getters, mutations },
  {
    async nuxtServerInit({ commit }, context: Context) {
      await Promise.allSettled([
        context.app.$accessor.auth.nuxtServerInit(context),
        context.app.$accessor.chat.nuxtServerInit(context),
        context.app.$accessor.modals.nuxtServerInit(context),
        context.app.$accessor.settings.nuxtServerInit(context),
        context.app.$accessor.messages.nuxtServerInit(context),
      ]);
      commit('SET_NOW', Date.now());
    },

    async nuxtClientInit({ commit }, context) {
      await Promise.allSettled([
        context.app.$accessor.auth.nuxtClientInit(context),
        context.app.$accessor.chat.nuxtClientInit(context),
        context.app.$accessor.modals.nuxtClientInit(context),
        context.app.$accessor.settings.nuxtClientInit(context),
        context.app.$accessor.messages.nuxtClientInit(context),
      ]);
      commit('SET_NOW', Date.now());
      setInterval(() => commit('SET_NOW', Date.now()), 1000);
    },
  },
);

export const accessorType = getAccessorType({
  state,
  actions,
  mutations,
  modules: {
    auth,
    chat,
    modals,
    settings,
    messages,
  },
});
