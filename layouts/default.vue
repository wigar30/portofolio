<template>
  <div class="w-full h-full min-h-screen bg-gray-200 dark:bg-gray-800">
    <Navbar :current-active="currentSection" />
    <main class="main w-full h-full">
      <slot />
    </main>
    <UButton square class="fixed bottom-12 right-12 z-50" color="primary" variant="ghost" :ui="{ rounded: 'rounded-full' }" :to="`#${link}`">
      <UIcon
        class="w-12 h-12 text-primary-500 transition-transform transform"
        :class="{
          '!rotate-180': currentSection !== 'home',
        }"
        name="i-heroicons-arrow-long-down"
      />
    </UButton>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const store = useStoreMenu()
const { setColor } = useColor()
const { getLocalStorage } = useStorageLocal()

const menus = ['home', 'about-me', 'my-works']
const currentSection = ref('')

onBeforeMount(() => {
  const color = getLocalStorage('primary')
  if (color) {
    setColor(color)
  }
})

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      router.push({ hash: route.hash })
    }, 1500)
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute('id')
          store.setMenu(currentSection.value)
        }
      })
    },
    {
      rootMargin: '0px 0px -60% 0px',
    },
  )

  document.querySelectorAll('div div div main div div div.header').forEach((section) => {
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
