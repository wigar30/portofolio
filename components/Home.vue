<template>
  <div class="w-full h-screen">
    <BackgroundHome class="z-0">
      <div id="home-text" class="w-full h-screen flex items-center justify-center flex-col space-y-4 z-10 absolute opacity-100">
        <div>
          <div class="flex">
            <p id="div-text" class="font-bold text-xl text-primary-900 dark:text-primary-100"></p>
            <p class="text-7xl font-black fade-out text-primary-900 dark:text-primary-100" :class="isAnimated ? 'fade-in' : ''">Hey. I'm Wigar</p>
            <p class="text-7xl font-black delay-700 duration-1000 text-primary-900 dark:text-primary-100 transition-opacity" :class="isAnimated ? 'fade-in' : 'fade-out'">,</p>
          </div>
          <div class="flex flex-col">
            <p class="text-6xl font-medium text-primary-900 dark:text-primary-100 whitespace-pre-wrap fade-out" :class="isAnimated ? 'fade-in' : ''">a frontend developer based in Yogyakarta</p>
            <div class="flex items-end mt-6">
              <p class="text-6xl font-medium text-primary-900 dark:text-primary-100 whitespace-pre-wrap fade-out" :class="isAnimated ? 'fade-in' : ''">welcome to my</p>
              <span class="text-6xl font-medium text-primary-900 dark:text-primary-100 underline decoration-primary-900 dark:decoration-primary-100 fade-in-hidden" :class="isAnimated ? 'fade-in' : ''"
                >Portofolio.</span
              >
              <p id="end-div-text" class="font-bold text-2xl text-primary-900 dark:text-primary-100"></p>
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

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const firstText = useTextAnimation()
const secondText = useTextAnimation()
const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)
const divText = '<div>'
const endDivText = '</div>'

const isActive = computed(() => props.active)

watch(isActive, (newValue: boolean) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue) {
    timeOut.value = setTimeout(() => {
      isAnimated.value = true
      firstText.wordflick('div-text', divText)
      secondText.wordflick('end-div-text', endDivText, 1500)
    }, 200)
  } else {
    isAnimated.value = false
    firstText.clearWordflick('div-text')
    secondText.clearWordflick('end-div-text')
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
