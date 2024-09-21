<template>
  <div class="w-full pl-10 flex flex-col items-end">
    <p class="mb-6 text-primary-900 dark:text-primary-100 text-xl sm:text-7xl font-display">{{ content.name }}</p>

    <div class="w-full flex flex-col items-end pr-2 space-y-4">
      <div v-for="(item, index) in content.items" :key="index" class="w-fit group/grad cursor-pointer z-10 animate-wrap" @click="handleFlash">
        <div class="w-fit flex flex-col items-end space-x-6 bg-primary-950 rounded-lg px-6 p-1">
          <span class="text-primary-900 dark:text-primary-100 text-xl sm:text-5xl font-display group-hover/grad:grad transition-all">{{ item.name }}</span>
          <div class="w-full flex justify-end space-x-2">
            <p v-for="(tag, i) in item.tech" :key="i" class="w-fit text-primary-900 dark:text-primary-100 text-xs sm:text-sm font-normal after:content-['|'] after:ml-2 last:after:content-none">
              {{ tag }}
            </p>
          </div>
        </div>
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
  @apply text-xl sm:text-6xl font-bold animate-text bg-gradient-to-r from-primary-100 via-primary-600 to-primary-100 bg-clip-text text-transparent;
}
</style>
