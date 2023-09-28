<template>
  <div class="w-full columns-2">
    <CardMyWorksItem v-for="(item, i) in contents" :key="i" :content="item" :animating="animate" :left="Math.ceil(contents.length / 2) >= i + 1" />
  </div>
</template>

<script setup lang="ts">
import gredu1 from '~/assets/images/gredu-dashboard-1.webp'
import gredu2 from '~/assets/images/gredu-dashboard-2.webp'
import gredu3 from '~/assets/images/gredu-dashboard-3.webp'
import gredu4 from '~/assets/images/gredu-dashboard-4.webp'
import gameskiiLanding1 from '~/assets/images/gameskii-landing-1.webp'
import gameskiiLanding2 from '~/assets/images/gameskii-landing-2.webp'
import gameskiiLanding3 from '~/assets/images/gameskii-landing-3.webp'
import asme1 from '~/assets/images/asme-1.webp'
import asme2 from '~/assets/images/asme-2.webp'
import asme3 from '~/assets/images/asme-3.webp'
import asme4 from '~/assets/images/asme-4.webp'
import asme5 from '~/assets/images/asme-5.webp'
import trade1 from '~/assets/images/trade-1.webp'
import trade2 from '~/assets/images/trade-2.webp'
import trade3 from '~/assets/images/trade-3.webp'
import trade4 from '~/assets/images/trade-4.webp'
import forest1 from '~/assets/images/forest-1.webp'
import forest2 from '~/assets/images/forest-2.webp'

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
    excerpt: '',
    desc: '',
    tech: ['Vue.js', 'TailwindCSS'],
    images: [gameskiiLanding1, gameskiiLanding2, gameskiiLanding3],
  },
  {
    name: 'Perhutani Asme',
    excerpt: '',
    desc: '',
    tech: ['Nuxt', 'TailwindCSS', 'Laravel'],
    images: [asme1, asme2, asme3, asme4, asme5],
  },
  {
    name: 'Gredu Dashboard',
    excerpt: '',
    desc: '',
    tech: ['Next.js', 'React Query', 'Ant Design'],
    images: [gredu1, gredu2, gredu3, gredu4],
  },
  {
    name: 'SocioTrade',
    excerpt: '',
    desc: '',
    tech: ['Nuxt', 'TailwindCSS'],
    images: [trade1, trade2, trade3, trade4],
  },
  {
    name: 'SocioForest',
    excerpt: '',
    desc: '',
    tech: ['Nuxt', 'TailwindCSS'],
    images: [forest1, forest2],
  },
]
</script>
