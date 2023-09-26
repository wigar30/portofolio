module.exports = {
  apps: [
    {
      name: 'Portofolio',
      port: '3000',
      exec_mode: 'cluster',
      instances: '-i',
      script: './.output/server/index.mjs',
    },
  ],
}
