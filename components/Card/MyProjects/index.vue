<template>
  <div class="h-[600px] pr-6 mb-6 overflow-y-hidden whitespace-nowrap space-y-6 relative" :class="animate ? 'after:h-full' : 'after:h-0'">
    <CardMyProjectsItem v-for="(item, i) in contents" :key="i" :content="item" :animating="animate" @click="handleSelectItem(item)" />
  </div>
</template>

<script setup lang="ts">
import type { Work } from '~/types/Module/Works'

defineProps({
  animate: {
    type: Boolean,
    default: false,
  },
})

defineOptions({
  name: 'CardMyWorksComponent',
})

const timeout = ref<NodeJS.Timeout>()

const common = useCommon()

const handleSelectItem = (work: Work) => {
  if (timeout.value) {
    clearTimeout(timeout.value)
    return
  }

  timeout.value = setTimeout(() => {
    common.setWork(work)
    timeout.value = undefined
  }, 650)
}

const contents: Work[] = [
  {
    name: 'Portofolio',
    desc: 'This Project use Nuxt v3, because I want to learn the newest Nuxt major update and getting to know about composition api',
    tech: ['Nuxt.js', 'TailwindCSS', 'Nuxt UI'],
  },
  {
    name: 'LunarFest',
    desc: 'This project is part of my learning with nextjs App Router environment and how to create swiperjs like component.',
    tech: ['Next.js', 'TailwindCSS'],
  },
  {
    name: 'Lunar',
    desc: 'Marketplace with Manajement Store, This project is part of my learning with Nextjs App Router environment with connecting to backend/ consume API, I want to also challenge my self to design the entire interface screen.',
    tech: ['Next.js', 'Go-Fiber', 'TailwindCSS'],
  },
]
</script>
