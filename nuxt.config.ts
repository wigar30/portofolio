// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/google-fonts'
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
      'Montserrat': true,
    },
  },
})
