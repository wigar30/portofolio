<template>
  <div class="w-full h-full min-h-screen bg-neutral-200 dark:bg-neutral-800">
    <Navbar :current-active="currentSection" />
    <UContainer class="main h-full">
      <slot />
    </UContainer>
    <UIcon class="w-12 h-12 text-neutral-800 dark:text-neutral-200 absolute bottom-12 right-12 animate-bounce" name="i-heroicons-arrow-long-down" />
  </div>
</template>

<script setup>
const currentSection = ref('')

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.getAttribute('id')
      }
    })
  }, {
    rootMargin: '0px 0px -60% 0px'
  })

  document.querySelectorAll('div div div div.main div div div').forEach((section) => {
    observer.observe(section)
  })
})
</script>