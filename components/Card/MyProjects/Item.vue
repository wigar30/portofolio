<template>
  <div class="w-full pl-10 flex justify-end">
    <div class="w-fit group/grad cursor-pointer z-10" :class="isFlash ? 'animate-flash' : 'animate-wrap'" @click="handleFlash">
      <div class="w-fit flex flex-col justify-end items-end space-x-6 bg-primary-950 rounded-lg px-6 p-1">
        <!-- <span class="text-primary-900 dark:text-primary-100 text-base group-hover/wrapper:skew-x-12">•</span> -->
        <span class="text-primary-900 dark:text-primary-100 text-xl order-1 sm:order-3 sm:text-5xl font-display group-hover/grad:grad transition-all h-fit">{{ content.name }}</span>
        <div class="space-x-2 order-3 sm:order-1 sm:block">
          <span v-for="(tag, i) in content.tech" :key="i" class="text-primary-900 dark:text-primary-100 text-sm font-normal after:content-['|'] after:ml-2 last:after:content-none">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type MyProjectsItem = {
  name: string
  desc: string
  tech: string[]
}

defineProps({
  content: {
    type: Object as PropType<MyProjectsItem>,
    required: true,
  },
  animating: {
    type: Boolean,
    default: false,
  },
})

defineOptions({
  name: 'CardMyProjectsItemComponent',
})

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
</style>
