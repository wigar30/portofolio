<template>
  <div class="block">
    <div class="w-full flex justify-end items-end space-x-6">
      <div class="space-x-2">
        <span v-for="(tag, i) in content.tech" :key="i" class="text-primary-900 dark:text-primary-100 text-sm font-normal after:content-['|'] after:ml-2 last:after:content-none">{{ tag }}</span>
      </div>
      <span class="text-primary-900 dark:text-primary-100 text-base">•</span>
      <span class="text-primary-900 dark:text-primary-100" :class="classes">{{ content.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
type MyProjectsItem = {
  name: string
  desc: string
  tech: string[]
}

const props = defineProps({
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

const textSizes = ['text-lg', 'text-xl', 'text-1xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl']

const classes = ref('')

const isAnimate = computed(() => props.animating)

watch(isAnimate, (value: boolean) => {
  if (!value) classes.value = getRandomTextSize()
})

onMounted(() => {
  classes.value = getRandomTextSize()
})

/**
 * get random index from translate array
 */
const getRandomTextSize = (): string => {
  const index = Math.floor(Math.random() * 7)
  return textSizes[index]
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
