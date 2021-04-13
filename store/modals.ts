import { actionTree, getterTree, mutationTree } from 'typed-vuex';
import { Context } from '@nuxt/types';
import { Reminder, ReminderTypes } from '~/types/reminderTypes';

export const namespaced = true;

export const state = () => ({
  settingsModalOpened: false as boolean,
  profileModalOpened: false as boolean,
  profileModalTargetId: -1 as number,
  punishmentModalOpened: false as boolean,
  punishmentModalTargetId: -1 as number,
  emailConfirmationModalOpened: false as boolean,
  emailConfirmedModalOpened: false as boolean,
  passwordResetModalOpened: false as boolean,
  passwordResetRequestedModalOpened: false as boolean,
  reminders: [] as Reminder[],
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
  SET_EMAIL_CONFIRMATION_MODAL_OPENED: (_state, payload: boolean) => {
    _state.emailConfirmationModalOpened = payload;
  },
  SET_EMAIL_CONFIRMED_MODAL_OPENED: (_state, payload: boolean) => {
    _state.emailConfirmedModalOpened = payload;
  },
  SET_PASSWORD_RESET_MODAL_OPENED: (_state, payload: boolean) => {
    _state.passwordResetModalOpened = payload;
  },
  SET_PASSWORD_RESET_REQUESTED_MODAL_OPENED: (_state, payload: boolean) => {
    _state.passwordResetRequestedModalOpened = payload;
  },
  GET_REMINDERS_FROM_STORAGE: (_state) => {
    const storage = localStorage.getItem('reminders');
    _state.reminders = (storage && JSON.parse(storage)) || [];
  },
  SET_REMINDERS_TO_STORAGE: (_state, payload: Reminder[]) => {
    localStorage.setItem('reminders', JSON.stringify(payload));
    _state.reminders = payload;
  },
});

export const getters = getterTree(state, {});

export const actions = actionTree(
  { state, mutations, getters },
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nuxtServerInit({ dispatch }, context: Context) {},

    nuxtClientInit({ state, commit, dispatch }, _context: Context) {
      commit('GET_REMINDERS_FROM_STORAGE');
      const userId = this.app.$accessor.auth.user?.id;
      if (!userId) return;
      state.reminders.forEach((reminder) => {
        if (
          reminder.disabledAt !== null &&
          reminder.userId === userId &&
          Date.now() > reminder.disabledAt + reminder.timeout
        ) {
          dispatch('addReminder', reminder.type);
        }
      });
    },

    addReminder({ state, commit }, payload: ReminderTypes) {
      commit('GET_REMINDERS_FROM_STORAGE');
      const reminders: Reminder[] = JSON.parse(JSON.stringify(state.reminders));
      const userId = this.app.$accessor.auth.user?.id;
      if (!userId) return;

      const index = reminders.findIndex(
        (reminder) => reminder.type === payload && reminder.userId === userId,
      );
      if (index === -1) {
        reminders.push({
          type: payload,
          userId,
          timeout: 0,
          disabledAt: null,
        });
      } else {
        reminders[index].disabledAt = null;
        reminders[index].timeout = 0;
      }
      commit('SET_REMINDERS_TO_STORAGE', reminders);
    },

    removeReminder({ state, commit }, { type, timeout }: { type: ReminderTypes; timeout: number }) {
      commit('GET_REMINDERS_FROM_STORAGE');
      const reminders: Reminder[] = JSON.parse(JSON.stringify(state.reminders));
      const userId = this.app.$accessor.auth.user?.id;
      if (!userId) return;

      const index = reminders.findIndex((reminder) => reminder.type === type && reminder.userId === userId);
      if (index !== -1) {
        reminders[index].disabledAt = Date.now();
        reminders[index].timeout = timeout;
      }
      commit('SET_REMINDERS_TO_STORAGE', reminders);
    },
  },
);
