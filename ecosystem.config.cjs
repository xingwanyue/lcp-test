module.exports = {
  apps: [
    {
      name: 'detPortal',
      port: '81',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
