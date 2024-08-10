<template>
  <div class="h-full">
    <Swiper
      :direction="'vertical'"
      :slides-per-view="'auto'"
      :space-between="0"
      :speed="500"
      :mousewheel="mousewheelActive"
      :pagination="pagination"
      :modules="modules"
      @swiper="handleSwiper"
      @slide-change="handleSlideChange"
      @reach-end="handleReachEnd"
    >
      <SwiperSlide v-slot="{ isActive }" class="p-6">
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
    return '<span class="' + className + ' custom-bullet-light">' + menu[index] + '</span>'
  },
}

const handleSwiper = (swiper: SwiperType) => {
  if (swiper.navigation) {
    swiper.navigation.destroy()
  }

  swiper.pagination.bullets[0].classList.add('swiper-pagination-bullet-active-light')
  swiper.pagination.bullets[menu.length].classList.add('!hidden')
}

const handleSlideChange = (swiper: SwiperType) => {
  nextTick(() => {
    for (let index = 0; index <= menu.length; index++) {
      swiper.pagination.bullets[index].classList.remove('swiper-pagination-bullet-active-dark', 'swiper-pagination-bullet-active-light')
    }
    swiper.pagination.bullets[0].classList.add('custom-bullet-light')
    swiper.pagination.bullets[swiper.activeIndex].classList.add('swiper-pagination-bullet-active-light')
    swiper.updateSlidesClasses()
  })
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
  @apply block w-fit top-[150px] -left-24 transition-all duration-500 !opacity-100;
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 24px;
}
.swiper-pagination-bullet {
  @apply !opacity-100;
}

.custom-bullet-dark {
  @apply text-sm text-primary-300 dark:text-primary-700 font-display relative after:bg-primary-300 dark:after:bg-primary-700 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 select-none;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
}
.custom-bullet-light {
  @apply text-sm text-primary-300 dark:text-primary-300 font-display relative after:bg-primary-700 dark:after:bg-primary-300 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 select-none;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
}

.swiper-pagination-bullet-active-dark {
  @apply transition-transform translate-x-3 text-base text-primary-300 dark:text-primary-700 after:w-full;
}
.swiper-pagination-bullet-active-light {
  @apply transition-transform translate-x-3 text-base text-primary-700 dark:text-primary-300 after:w-full;
}
</style>
