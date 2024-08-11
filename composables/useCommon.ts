import { storeToRefs } from 'pinia'
import type { Work } from '~/types/Module/Works'

export const useCommon = () => {
  const store = useStoreCommon()

  const { currentWork } = storeToRefs(store)

  const setWork = (work: Work | null) => {
    store.setWork(work)
  }
  return {
    currentWork,
    setWork,
  }
}
