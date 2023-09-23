<template>
  <div class="w-full h-screen">
    <div id="about-me" class="header h-20" />

    <BackgroundAboutMe>
      <UContainer as="section" class="w-screen h-section flex items-center">
        <CardAboutMe id="about-me-card" :animate="isAnimated" />
      </UContainer>
    </BackgroundAboutMe>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutMeComponent'
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