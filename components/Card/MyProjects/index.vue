<template>
  <div
    class="h-[600px] pr-6 mb-6 overflow-y-auto whitespace-nowrap space-y-6 after:bg-primary-900 dark:after:bg-primary-100 relative after:absolute after:h-0 after:w-0.5 after:top-0 after:right-0 after:transition-all after:duration-500"
    :class="animate ? 'after:h-full' : 'after:h-0'"
  >
    <CardMyProjectsItem v-for="(item, i) in contents" :key="i" :content="item" :animating="animate" class="" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  animate: {
    type: Boolean,
    default: false,
  },
})

defineOptions({
  name: 'CardMyWorksComponent',
})

const contents = [
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
