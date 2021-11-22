import Vue from 'vue';

declare module '*.vue' {
  export default Vue;
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    readonly $bus: Vue;
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    readonly $bus: Vue;
  }
}

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    readonly $bus: Vue;
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    readonly $bus: Vue;
  }
}
