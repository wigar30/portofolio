<template>
  <div id="container-work" class="w-full h-screen relative flex flex-nowrap overflow-x-hidden -skew-x-12 border-x-4 border-gray-200 hidden-scroll">
    <div class="w-full h-[200vh] bg-primary-950 flex-none overflow-y-hidden transition-all duration-500" :class="state.slider ? '' : ''">
      <UContainer as="section" class="w-full flex justify-end items-center overflow-hidden z-10">
        <CardMyWorks id="my-works-card" :animate="isAnimated" />
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSwiper } from 'swiper/vue'
import type { Timeout } from '~/types/Common/Timeout'
import type { Work } from '~/types/Module/Works'

defineOptions({
  name: 'MyWorksComponent',
})

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const timeOut = ref<Timeout>(null)
const state = ref({ return: false, slider: false })
const isAnimated = ref(false)
const axis = ref<'down' | 'up'>()

const common = useCommon()
const swiper = useSwiper()

onMounted(() => {
  const container = document.getElementById('container-work')
  if (!container) return

  container.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  const container = document.querySelector('.container-work')
  if (!container) return

  container.removeEventListener('scroll', handleScroll)
})

const work = computed(() => common.currentWork.value)
const isActive = computed(() => props.active)

watch(work, (newValue: Work | null) => {
  state.value.slider = Boolean(newValue)
})

watch(isActive, (newValue: boolean) => {
  if (newValue) {
    axis.value = undefined
    const container = document.getElementById('container-work')
    if (!container) return

    container.scrollTo({ top: 20, behavior: 'instant' })
  } else {
    state.value.slider = false
    common.setWork(null)
  }
})

const handleScroll = () => {
  const container = document.getElementById('container-work')
  if (!container) return

  const scrollBottom = container.scrollTop + container.clientHeight
  const totalHeight = container.scrollHeight

  if (scrollBottom >= totalHeight) {
    if (axis.value === 'down') {
      swiper.value.slideNext()
    }

    if (timeOut.value) clearTimeout(timeOut.value)
    timeOut.value = setTimeout(() => {
      axis.value = 'down'
    }, 500)
  } else if (container.scrollTop <= 0) {
    if (axis.value === 'up') {
      swiper.value.slidePrev()
    }

    if (timeOut.value) clearTimeout(timeOut.value)
    timeOut.value = setTimeout(() => {
      axis.value = 'up'
    }, 500)
  } else swiper.value.mousewheel.disable()
}
</script>

<style>
.slide-left {
  @apply -skew-x-12 -translate-x-[90%];
}

.gradient-transition {
  background-size: 200% 200%;
  background-position: 0% 0%;
  transition: background-position 0.2s ease-in-out;

  &:hover {
    background-position: 100% 100%;
  }
}
</style>
