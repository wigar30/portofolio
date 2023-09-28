export type ColorState = 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
export const useStoreColor = defineStore('color', {
  state: () => ({
    currentColor: '',
  }),

  actions: {
    setColor(color: ColorState) {
      this.currentColor = color
    },
  },
})
