import { actionTree, getterTree, mutationTree } from 'typed-vuex';

export const namespaced = true;

export const state = () => ({
  settingsModalOpened: false as boolean,
  profileModalOpened: false as boolean,
  profileModalTargetId: -1 as number,
  punishmentModalOpened: false as boolean,
  punishmentModalTargetId: -1 as number,
});

export type ModalsState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  SET_SETTINGS_MODAL_OPENED: (_state, payload: boolean) => {
    _state.settingsModalOpened = payload;
  },
  SET_PROFILE_MODAL_OPENED: (_state, payload: boolean) => {
    _state.profileModalOpened = payload;
    if (!payload) {
      _state.profileModalTargetId = -1;
    }
  },
  SET_PUNISHMENT_MODAL_OPENED: (_state, payload: boolean) => {
    _state.punishmentModalOpened = payload;
    if (!payload) {
      _state.punishmentModalTargetId = -1;
    }
  },
  SET_PROFILE_MODAL_TARGET_ID: (_state, payload: number) => (_state.profileModalTargetId = payload),
  SET_PUNISHMENT_MODAL_TARGET_ID: (_state, payload: number) => (_state.punishmentModalTargetId = payload),
});

export const getters = getterTree(state, {});

export const actions = actionTree({ state, mutations, getters }, {});
