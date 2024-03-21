// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  app: {
    head: {
      title: 'Wigar Kumara | Portofolio',
    },
  },

  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@pinia/nuxt', '@nuxt/image'],

  image: {
    dir: 'assets/images',
  },

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
      Poppins: true,
    },
  },

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
