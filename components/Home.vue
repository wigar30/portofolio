<template>
  <div class="w-full h-screen">
    <div id="home" class="header h-20" />

    <BackgroundHome>
      <div id="home-text" class="w-full h-full flex items-center justify-center flex-col text-center space-y-4 z-20 absolute opacity-100" >
        <p class="text-7xl font-black fade-out text-white" :class="isAnimated ? 'fade-in' : ''">Hey.</p>
        <div class="flex">
          <span class="text-6xl font-medium whitespace-pre-wrap fade-out" :class="isAnimated ? 'fade-in' : ''">Welcome To My </span>
          <NuxtLink class="text-6xl font-medium underline decoration-primary-500 fade-in-hidden" :to="'/#about-me'" :class="isAnimated ? 'fade-in' : ''">Portofolio.</NuxtLink>
        </div>
      </div>
    </BackgroundHome>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeComponent'
})

const { activeMenu } = useMenu()
const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)

watch(activeMenu, (newValue: string) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue === 'home') {
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

<style>
.fade-out {
  opacity: 0;
  transition: 0.4s all ease-in;
}
.fade-in-hidden {
  opacity: 0;
  transform: translate(0, -50px);
  transition: 0.4s all ease-in-out;
}
.fade-in {
  opacity: 1;
  transform: translate(0, 0);
}
</style>