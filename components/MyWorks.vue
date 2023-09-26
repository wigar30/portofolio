<template>
  <div class="w-full min-h-screen">
    <div id="my-works" class="header h-20" />

    <BackgroundMyWorks class="z-0">
      <UContainer as="section" class="absolute w-screen flex items-center z-10">
        <CardMyWorks id="my-works-card" :animate="isAnimated" />
      </UContainer>
    </BackgroundMyWorks>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyWorksComponent',
})

const { activeMenu } = useMenu()
const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)

watch(activeMenu, (newValue: string) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue === 'my-works') {
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
