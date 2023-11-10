export const useTextAnimation = () => {
  const { isElementVisible } = useVisibleViewport()
  const interval = ref<ReturnType<typeof setInterval> | null>(null)
  const timeout = ref<ReturnType<typeof setTimeout> | null>(null)
  const state = ref({
    part: '',
    offset: 0,
    skip_count: 0,
    skip_delay: 2,
  })

  const wordflick = (id: string, text: string, delay?: number) => {
    const getText = document.getElementById(id)
    if (!getText) return

    if (timeout.value) clearTimeout(timeout.value)

    if (isElementVisible(getText, true) === false) {
      if (timeout.value) clearTimeout(timeout.value)
      if (interval.value) clearInterval(interval.value)

      state.value.offset = 0
      state.value.part = ''
      state.value.skip_count = 0

      clearWordflick(id)
      return
    }

    timeout.value = setTimeout(() => {
      interval.value = setInterval(() => {
        if (state.value.offset >= text.length) {
          ++state.value.skip_count
          if (state.value.skip_count === state.value.skip_delay) {
            state.value.skip_count = 0
          }
        }
        state.value.part = text.substr(0, state.value.offset)
        if (state.value.skip_count === 0) {
          state.value.offset++
        }

        getText.textContent = state.value.part

        if (state.value.part.length === text.length || isElementVisible(getText, true) === false) {
          if (interval.value) clearInterval(interval.value)
          state.value.offset = 0
          state.value.part = ''
          state.value.skip_count = 0
        }
      }, 200)
    }, delay)
  }

  const clearWordflick = (id: string) => {
    const getText = document.getElementById(id)
    if (getText) {
      if (timeout.value) clearTimeout(timeout.value)
      if (interval.value) clearInterval(interval.value)

      state.value.offset = 0
      state.value.part = ''
      state.value.skip_count = 0

      getText.textContent = ''
    }
  }

  return {
    wordflick,
    clearWordflick,
  }
}
