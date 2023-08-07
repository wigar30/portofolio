<template>
  <div class="w-full h-full min-h-screen bg-neutral-200 dark:bg-neutral-800">
    <Navbar :current-active="currentSection" />
    <UContainer class="main h-full">
      <slot />
    </UContainer>
    <UButton square class="fixed bottom-12 right-12" color="primary" variant="ghost" :ui="{ rounded: 'rounded-full' }" :to="`#${link}`">
      <UIcon
        class="w-12 h-12 text-primary-500 transition-transform transform"
        :class="{
          '!rotate-180': state.newValue !== 'home'
        }"
        name="i-heroicons-arrow-long-down"
      />
    </UButton>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const menus = ['home', 'about-me', 'my-works', 'contact']
const currentSection = ref('')
const state = ref({
  oldValue: 'home',
  newValue: ''
})

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      router.push({ hash: route.hash })
    }, 1500)
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('asd', entry.target.getAttribute('id'))
        currentSection.value = entry.target.getAttribute('id')
        state.value.oldValue = state.value.newValue
        state.value.newValue = currentSection.value
      }
    })
  }, {
    rootMargin: '0px 0px -60% 0px'
  })

  document.querySelectorAll('div div div div.main div div div.header').forEach((section) => {
    observer.observe(section)
  })
})

const link = computed(() => {
  if (currentSection.value === 'home') {
    return 'about-me'
  } else {
    return menus[menus.indexOf(currentSection.value) - 1]
  }
})
</script>