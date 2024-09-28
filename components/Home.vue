<template>
  <div class="w-screen h-screen overflow-hidden skew-x-12 border-x-[6px] border-t-[6px] rounded-t-md border-gray-200">
    <div id="home-text" class="w-full h-full bg-primary-950 flex items-center justify-center center flex-col space-y-4 z-10 absolute opacity-100">
      <div class="-skew-x-12">
        <div class="flex">
          <p class="text-4xl sm:text-7xl font-black fade-out text-primary-900 dark:text-primary-200 font-display select-none cursor-default" :class="isAnimated ? 'fade-in' : ''">Hey. I'm Wigar</p>
          <p
            class="text-4xl sm:text-7xl font-black delay-700 duration-1000 text-primary-900 dark:text-primary-200 transition-opacity font-display select-none cursor-default"
            :class="isAnimated ? 'fade-in' : 'fade-out'"
          >
            ,
          </p>
        </div>
        <p
          class="ml-4 text-3xl sm:text-6xl font-display font-medium text-primary-900 dark:text-primary-200 whitespace-pre-wrap fade-out grad transition-all select-none cursor-default"
          :class="isAnimated ? 'fade-in' : ''"
        >
          a frontend developer
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeComponent',
})

const timeOut = ref<ReturnType<typeof setTimeout> | null>(null)
const isAnimated = ref(false)

onMounted(() => {
  if (timeOut.value) clearTimeout(timeOut.value)
  timeOut.value = setTimeout(() => {
    isAnimated.value = true
  }, 200)
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

.grad {
  @apply animate-text bg-gradient-to-r from-primary-100 via-primary-600 to-primary-100 bg-clip-text !text-transparent;
}
</style>
