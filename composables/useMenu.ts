import { storeToRefs } from 'pinia'
import { useStoreMenu } from '~/stores/menu'

export const useMenu = () => {
  const userStoreMenu = useStoreMenu()

  const { currentMenu: activeMenu } = storeToRefs(userStoreMenu)

  return {
    activeMenu,
  }
}
