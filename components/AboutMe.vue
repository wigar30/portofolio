<template>
  <div class="w-full min-h-screen">
    <div id="about-me" class="header h-20" />

    <BackgroundAboutMe class="z-0">
      <UContainer as="section" class="absolute w-screen flex items-center z-10">
        <CardAboutMe id="about-me-card" :animate="isAnimated" />
      </UContainer>
    </BackgroundAboutMe>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutMeComponent',
})

const { activeMenu } = useMenu()
const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)

watch(activeMenu, (newValue: string) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue === 'about-me') {
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
