import type { Work } from '~/types/Module/Works'

export const useStoreCommon = defineStore('common', {
  state: () => ({
    currentWork: null as Work | null,
  }),

  actions: {
    setWork(work: Work | null) {
      this.currentWork = work
    },
  },
})
