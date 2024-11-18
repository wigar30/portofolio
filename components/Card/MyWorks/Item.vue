<template>
  <div class="w-[550px] pl-10 flex flex-col items-end mt-10">
    <div class="w-full self-start">
      <p class="mb-6 text-xl sm:text-7xl font-display text-primary-500 float-end">{{ content.name }}</p>
    </div>

    <div class="w-full flex flex-col items-end pr-2 space-y-4">
      <div v-for="(item, index) in content.items" :key="index" class="w-fit flex items-center z-10 animate-wrap relative" @click="handleFlash">
        <div class="w-full flex flex-none flex-col items-end space-x-6 bg-transparent rounded-lg px-6 p-1 cursor-pointer group/grad">
          <span class="text-primary-900 dark:text-primary-100 text-xl sm:text-5xl font-display group-hover/grad:grad transition-all">{{ item.name }}</span>
          <div class="w-full flex justify-end space-x-2">
            <p v-for="(tag, i) in item.tech" :key="i" class="w-fit text-primary-900 dark:text-primary-100 text-xs sm:text-sm font-normal after:content-['|'] after:ml-2 last:after:content-none">
              {{ tag }}
            </p>
          </div>
        </div>
        <!-- <p class="-balance pl-12 absolute translate-x-[50%] z-3 top-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, cupiditate minima?</p> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WorkWrapper } from '~/types/Module/Works'

defineProps({
  content: {
    type: Object as PropType<WorkWrapper>,
    required: true,
  },
  animating: {
    type: Boolean,
    default: false,
  },
})

defineOptions({
  name: 'CardMyWorksItemComponent',
})

// const isOpen = ref(false)
const timeout = ref<NodeJS.Timeout>()
const isFlash = ref(false)

/**
 * Handle Flash
 * remove flash after .5 s
 */
const handleFlash = () => {
  isFlash.value = true

  if (timeout.value) clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    isFlash.value = false
  }, 600)
}
</script>

<style>
.my-works {
  box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
  -webkit-box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
  -moz-box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
}

.shadow-img-right {
  box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
}

.shadow-img-left {
  box-shadow: -18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -18px 6px 42px 9px rgba(0, 0, 0, 0.75);
}

.wrapper {
  @apply p-2 bg-grad-to-r;
}

.group\/grad:hover .group-hover\/grad\:grad {
  @apply animate-text bg-gradient-to-r from-primary-100 via-primary-600 to-primary-100 bg-clip-text text-transparent;
}

.bg-linear {
  position: relative;
  background-image: linear-gradient(to right, #5d5d5d 25%, #fff 25%, #fff 50%, #fff 50%, #5d5d5d 50%, #5d5d5d 75%, #fff 75%, #fff 100%, #5d5d5d 100%);
  animation: pattern 50s linear infinite;
  background-size: 5rem, 5rem;
  background-clip: text;
  color: transparent;
  /* transform: skewX(-12deg); */
}

@keyframes pattern {
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 100%;
  }
}
</style>
