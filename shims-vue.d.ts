import Vue from 'vue';
import { SnotifyService } from 'vue-snotify/SnotifyService';

declare module '*.vue' {
  export default Vue;
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    readonly $snotify: SnotifyService;
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    readonly $snotify: SnotifyService;
  }
}

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    readonly $snotify: SnotifyService;
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    readonly $snotify: SnotifyService;
  }
}
