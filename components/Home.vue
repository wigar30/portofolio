<template>
  <div class="w-full min-h-screen">
    <div id="home" class="header h-20" />

    <BackgroundHome class="z-0">
      <div id="home-text" class="w-full h-section flex items-center justify-center flex-col space-y-4 z-10 absolute opacity-100">
        <div>
          <div class="flex">
            <p id="div-text" class="font-bold text-xl"></p>
            <p class="text-7xl font-black fade-out text-white" :class="isAnimated ? 'fade-in' : ''">Hey. I'm Wigar</p>
            <p class="text-7xl font-black delay-700 duration-1000 text-white transition-opacity" :class="isAnimated ? 'fade-in' : 'fade-out'">,</p>
          </div>
          <div class="flex flex-col">
            <p class="text-6xl font-medium whitespace-pre-wrap fade-out" :class="isAnimated ? 'fade-in' : ''">a frontend developer based in Yogyakarta</p>
            <div class="flex items-end mt-6">
              <p class="text-6xl font-medium whitespace-pre-wrap fade-out" :class="isAnimated ? 'fade-in' : ''">welcome to my</p>
              <NuxtLink class="text-6xl font-medium underline decoration-primary-500 fade-in-hidden" :to="'/#about-me'" :class="isAnimated ? 'fade-in' : ''">Portofolio.</NuxtLink>
              <p id="end-div-text" class="font-bold text-2xl"></p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundHome>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeComponent',
})

const { activeMenu } = useMenu()
const { wordflick, clearWordflick } = useTextAnimation()
const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)
const divText = '<div>'
const endDivText = '</div>'

watch(activeMenu, (newValue: string) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue === 'home') {
    timeOut.value = setTimeout(() => {
      isAnimated.value = true
      wordflick('div-text', divText)
      wordflick('end-div-text', endDivText, 1500)
    }, 200)
  } else {
    timeOut.value = setTimeout(() => {
      isAnimated.value = false
    }, 200)
    clearWordflick('div-text')
    clearWordflick('end-div-text')
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
  transform: translate(0, 50px);
  transition: 0.4s all ease-in-out;
}
.fade-in {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
