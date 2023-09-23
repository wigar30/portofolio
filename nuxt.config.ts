// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  app: {
    head: {
      title: 'Lunaris Labs'
    }
  },

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
  },

  ui: {
    global: true,
    icons: ['heroicons'],
  },

  googleFonts: {
    families: {
      'Plus Jakarta Sans': true,
    },
  },

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
