import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '~/pages/main/main.vue';
import ConfirmationPage from '~/pages/confirmation/confirmation.vue';
import ResetPasswordPage from '~/pages/reset-password/reset-password.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'main',
        component: MainPage,
      },
      {
        path: '/confirm_email',
        name: 'confirm_email',
        component: ConfirmationPage,
      },
      {
        path: '/reset_password',
        name: 'reset_password',
        component: ResetPasswordPage,
      },
      {
        path: '*',
        redirect: '/',
      },
    ],
  });
}
