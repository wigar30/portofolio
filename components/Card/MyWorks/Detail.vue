<template>
  <UCard
    v-if="content"
    class=""
    :ui="{
      divide: 'divide-y divide-primary-200 dark:divide-primary-800',
      background: '!bg-transparent',
      shadow: 'shadow-none',
    }"
  >
    <template #header>
      <p class="text-xl font-semibold text-primary-900 dark:text-primary-200 mb-4">{{ content.name }}</p>

      <div class="w-full flex items-center whitespace-nowrap overflow-x-auto styled-scroll space-x-2">
        <div v-for="(img, i) in content.images" :key="i" class="w-64 max-h-40 flex-none inline-block overflow-hidden rounded-lg cursor-pointer" @click="handleOpenImage(img)">
          <img :src="img" class="object-cover transform" />
        </div>
      </div>
    </template>
    test
  </UCard>

  <UModal
    v-model="isOpen"
    :ui="{
      container: 'mt-20',
      width: 'sm:max-w-full sm:w-3/4 md:w-1/2',
    }"
  >
    <div class="rounded-lg">
      <img :src="currentImg" alt="" />
    </div>
  </UModal>
</template>

<script setup lang="ts">
import type { Work } from '~/types/Module/Works'

defineOptions({
  name: 'CardMyWorksDetailComponent',
})

defineProps({
  content: {
    type: Object as PropType<Work | null>,
    required: true,
  },
})

const isOpen = ref(false)
const currentImg = ref('')

watch(isOpen, (newValue: boolean) => {
  if (!newValue) currentImg.value = ''
})

const handleOpenImage = (img: string) => {
  isOpen.value = true
  currentImg.value = img
}
</script>
