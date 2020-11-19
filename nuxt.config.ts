export default {
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          // eslint-disable-next-line max-len
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet',
      },
    ],
    htmlAttrs: {
      class: ['page page_theme_dark'],
    },
    bodyAttrs: {
      class: ['page__body grid grid_type_default'],
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  styleResources: {
    stylus: ['~/assets/stylus/variables.styl', '~/assets/stylus/mixins.styl'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/nuxt-client-init.client.ts',
      ssr: false,
    },
    {
      src: '~/plugins/vue2-touch-events.ts',
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/router',
    '@nuxtjs/style-resources',
    'nuxt-typed-vuex',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/apollo',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            name: 'Русский',
            iso: 'ru-RU',
            file: 'ru-RU.js',
          },
          {
            code: 'ru',
            name: 'English',
            iso: 'en-US',
            file: 'en-US.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'ru',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: false,
          fallbackLocale: 'ru',
        },
      },
    ],
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/typed-vuex/],
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: any) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  svgSprite: {
    input: '~/assets/icons/',
  },
  apollo: {
    clientConfigs: {
      default: '~/config/apollo.ts',
    },
    tokenName: 'token',
    cookieAttributes: {
      maxAge: 86400 * 365 * 10,
      sameSite: 'lax',
      path: '/',
    },
  },
  router: {
    middleware: ['authenticated'],
  },
};
