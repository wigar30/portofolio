<template>
  <div class="w-full columns-2">
    <CardMyWorksItem v-for="(item, i) in contents" :key="i" :content="item" :animating="animate" />
  </div>
</template>

<script setup lang="ts">
import gredu1 from '~/assets/images/gredu-dashboard-1.webp'
import gredu2 from '~/assets/images/gredu-dashboard-2.webp'
import gredu3 from '~/assets/images/gredu-dashboard-3.webp'
import gredu4 from '~/assets/images/gredu-dashboard-4.webp'

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
    name: 'Gameskii Landing Page',
    tech: ['Vue.js', 'TailwindCSS'],
  },
  {
    name: 'Gameskii Dashboard',
    tech: ['Vue.js'],
  },
  {
    name: 'Perhutani Asme',
    tech: ['Nuxt', 'TailwindCSS', 'Laravel'],
  },
  {
    name: 'Gredu Dashboard',
    tech: ['Next.js', 'React Query', 'Ant Design'],
    images: [gredu1, gredu2, gredu3, gredu4],
  },
  {
    name: 'SocioForest',
    tech: ['Nuxt', 'TailwindCSS'],
  },
  {
    name: 'SocioTrade',
    tech: ['Nuxt', 'TailwindCSS'],
  },
]
</script>
