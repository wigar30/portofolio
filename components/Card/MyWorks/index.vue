<template>
  <div
    class="h-[600px] pr-6 mb-6 overflow-y-auto whitespace-nowrap space-y-6 after:bg-primary-900 dark:after:bg-primary-100 relative after:absolute after:h-0 after:w-0.5 after:top-0 after:right-0 after:transition-all after:duration-500"
    :class="animate ? 'after:h-full' : 'after:h-0'"
  >
    <CardMyWorksItem v-for="(item, i) in contents" :key="i" :content="item" :animating="animate" class="" />
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
    desc: '',
    tech: ['Vue.js', 'TailwindCSS'],
    images: [gameskiiLanding1, gameskiiLanding2, gameskiiLanding3],
  },
  {
    name: 'Gameskii Dashboard',
    desc: '',
    tech: ['Vue.js', 'Chart.js', 'TailwindCSS'],
    images: [gameskiiLanding1, gameskiiLanding2, gameskiiLanding3],
  },
  {
    name: 'Perhutani Asme',
    desc: '',
    tech: ['Nuxt', 'PWA', 'TailwindCSS', 'Laravel'],
    images: [asme1, asme2, asme3, asme4, asme5],
  },
  {
    name: 'Gredu SMS Dashboard',
    desc: '',
    tech: ['Next.js', 'React Query', 'Ant Design'],
    images: [gredu1, gredu2, gredu3, gredu4],
  },
  {
    name: 'SocioTrade',
    desc: '',
    tech: ['Nuxt', 'TailwindCSS'],
    images: [trade1, trade2, trade3, trade4],
  },
  {
    name: 'SocioForest',
    desc: '',
    tech: ['Nuxt', 'TailwindCSS'],
    images: [forest1, forest2],
  },
]
</script>
