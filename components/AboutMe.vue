<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <UContainer as="section" class="w-full h-screen flex justify-end space-x-6 items-end z-10">
      <CardAboutMe id="about-me-card" class="z-20" :animate="isAnimated" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useSwiper } from 'swiper/vue'

defineOptions({
  name: 'AboutMeComponent',
})

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const swiper = useSwiper()

const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)

const isActive = computed(() => props.active)

watch(isActive, (newValue: boolean) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue) {
    swiper.value.mousewheel.enable()

    timeOut.value = setTimeout(() => {
      isAnimated.value = true
    }, 200)
  } else {
    timeOut.value = setTimeout(() => {
      isAnimated.value = false
    }, 200)
  }
})
</script>
