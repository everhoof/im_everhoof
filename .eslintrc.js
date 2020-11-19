module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  overrides: [{ files: ['*.js', '*.ts', '*.vue'] }],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'vue/no-v-html': 'off',
    'no-plusplus': 'off',
  },
};
