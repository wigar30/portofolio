<template>
  <div class="h-screen">
    <Swiper
      :direction="'vertical'"
      :slides-per-view="'auto'"
      :space-between="0"
      :mousewheel="mousewheelActive"
      :pagination="pagination"
      :modules="modules"
      @swiper="handleSwiper"
      @reach-end="handleReachEnd"
    >
      <SwiperSlide v-slot="{ isActive }">
        <Home :active="isActive" />
      </SwiperSlide>
      <SwiperSlide v-slot="{ isActive }">
        <MyWorks :active="isActive" />
      </SwiperSlide>
      <SwiperSlide v-slot="{ isActive }">
        <MyProjects :active="isActive" />
      </SwiperSlide>
      <SwiperSlide v-slot="{ isActive }">
        <AboutMe :active="isActive" />
      </SwiperSlide>
      <SwiperSlide v-slot="{ isActive }" class="!h-fit">
        <Contact :active="isActive" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import type { MousewheelOptions, PaginationOptions, Swiper as SwiperType, SwiperModule } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'

defineOptions({
  name: 'IndexPage',
})

const modules: SwiperModule[] = [Mousewheel, Pagination]
const menu: string[] = ['Home', 'My Works', 'My Project', 'About Me']
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

const mousewheelActive: MousewheelOptions = {
  forceToAxis: true,
  thresholdTime: 400,
}

const pagination: PaginationOptions = {
  clickable: true,
  renderBullet: (index: number, className: string) => {
    return '<span class="' + className + ' custom-bullet">' + menu[index] + '</span>'
  },
}

const handleSwiper = (swiper: SwiperType) => {
  if (swiper.navigation) {
    swiper.navigation.destroy()
  }

  swiper.pagination.bullets[menu.length].classList.add('!hidden')
}

const handleReachEnd = (swiper: SwiperType) => {
  nextTick(() => {
    swiper.pagination.bullets[3].classList.add('swiper-pagination-bullet-active')
    swiper.updateSlidesClasses()
  })
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  @apply block top-[150px] -left-24 transition-all duration-500;
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
}
.custom-bullet {
  @apply text-sm text-primary-900 dark:text-primary-100 relative after:bg-primary-900 dark:after:bg-primary-100 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 select-none;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
}

.swiper-pagination-bullet-active {
  @apply transition-transform translate-x-3 text-base text-primary-900 dark:text-primary-100 after:w-full;
}
</style>
