import { storeToRefs } from 'pinia'
import { useStoreColor } from '~/stores/color'

export const useColor = () => {
  const store = useStoreColor()
  const appConfig = useAppConfig()

  const { currentColor: activeColor } = storeToRefs(store)

  const setColor = (color: ColorState) => {
    appConfig.ui.primary = color
  }

  return {
    activeColor,
    setColor,
  }
}
