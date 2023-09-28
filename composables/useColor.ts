import { storeToRefs } from 'pinia'
import { useStoreColor, ColorState } from '~/stores/color'

export const useColor = () => {
  const store = useStoreColor()

  const { currentColor: activeColor } = storeToRefs(store)

  const setColor = (color: ColorState) => store.setColor(color)

  return {
    activeColor,
    setColor,
  }
}
