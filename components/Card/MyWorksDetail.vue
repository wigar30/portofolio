<template>
  <UCard
    :ui="{
      divide: 'divide-y divide-primary-200 dark:divide-primary-800',
    }"
  >
    <template #header>
      <p class="text-xl font-semibold text-neutral-200 mb-4">{{ content.name }}</p>
    </template>
    test
  </UCard>
</template>

<script setup lang="ts">
type Detail = {
  name: string
  excerpt: string
  desc: string
  tech: string[]
  images?: string[]
}

defineOptions({
  name: 'CardMyWorksDetailComponent',
})

defineProps({
  content: {
    type: Object as PropType<Detail>,
    required: true,
  },
})
</script>
