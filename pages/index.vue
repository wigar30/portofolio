<template>
  <main class="h-full w-screen overflow-x-hidden">
    <Home />
    <MyWorks />
    <!-- <AboutMe /> -->
    <Contact />
  </main>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const timeout = ref<ReturnType<typeof setTimeout> | null>(null)
const animatePagination = ref(false)

onMounted(() => {
  if (timeout.value) clearTimeout(timeout.value)

  timeout.value = setTimeout(() => {
    animatePagination.value = true
    const pagination = document.querySelector('.swiper-pagination-vertical.swiper-pagination-bullets')
    pagination?.classList.add('!left-2')
  }, 800)
})
</script>

<style></style>
