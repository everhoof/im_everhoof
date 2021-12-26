require('./environment');

module.exports = {
  apps: [
    {
      name: process.env.APP_NAME,
      script: './node_modules/.bin/nuxt-ts',
      interpreter: 'node@14.18.1',
      args: 'start',
      autorestart: true,
      env: {
        NUXT_PORT: process.env.APP_PORT,
        NUXT_HOST: '0.0.0.0',
      },
    },
  ],
};
