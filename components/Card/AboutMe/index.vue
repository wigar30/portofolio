<template>
  <div class="w-2/5 pb-12 text-right">
    <span class="text-primary-900 dark:text-primary-100 font-display"
      >My name is Wigar Kumara Prasojo. I am a frontend developer who lives in the city of Yogyakarta. I have experience in making websites using technologies such as Vuejs, Nuxt, Nextjs, and
      Tailwindcss. I also have experience in making backend applications using Nodejs, Golang, and PHP technologies such as Expressjs, Nestjs, Go-Fiber, Gin Gonic and Laravel or Lumen.</span
    >
  </div>
  <div
    class="h-[600px] mb-6 pr-6 after:bg-primary-900 dark:after:bg-primary-100 relative after:absolute after:h-0 after:w-1 after:bottom-0 after:right-0 after:transition-all after:duration-500"
    :class="animate ? 'after:h-full' : 'after:h-0'"
  />
</template>

<script setup lang="ts">
defineProps({
  animate: {
    type: Boolean,
    default: false,
  },
})
defineOptions({
  name: 'CardAboutMeComponent',
})

const active = ref(false)
const timer = ref<NodeJS.Timeout>()

watch(active, (value) => {
  if (!value) return
  if (timer.value) clearTimeout(timer.value)

  timer.value = setTimeout(() => {
    active.value = false
  }, 400)
})
</script>
