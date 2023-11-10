<template>
  <div class="w-full h-screen">
    <BackgroundAboutMe class="z-0">
      <UContainer as="section" class="absolute w-screen h-full flex justify-center space-x-6 items-center z-10">
        <CardAboutMe id="about-me-card" class="z-20" :animate="isAnimated" />
      </UContainer>
    </BackgroundAboutMe>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutMeComponent',
})

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)

const isActive = computed(() => props.active)

watch(isActive, (newValue: boolean) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue) {
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
