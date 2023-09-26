export const useStoreMenu = defineStore('menu', {
  state: () => ({
    currentMenu: '',
  }),

  actions: {
    setMenu(menu: string) {
      this.currentMenu = menu
    },
  },
})
