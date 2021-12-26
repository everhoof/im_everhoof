module.exports = {
  apps: [
    {
      name: 'IM_Everhoof',
      script: './node_modules/.bin/nuxt-ts',
      interpreter: 'node@14.18.1',
      args: 'start',
      autorestart: true,
      env: {
        NUXT_PORT: '3600',
        NUXT_HOST: '0.0.0.0',
      },
    },
  ],
};
