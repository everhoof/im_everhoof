import { Plugin } from '@nuxt/types';
import Vue from 'vue';

const eventBusPlugin: Plugin = (_, inject) => {
  inject('bus', new Vue());
};

export default eventBusPlugin;
