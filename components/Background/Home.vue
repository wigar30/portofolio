<template>
  <div class="w-full h-screen relative">
    <div class="absolute top-[60%] right-[20%] w-72 h-72 bg-[rgb(var(--color-primary-900)_/_0.5)] dark:bg-primary-950 rounded-full blur-xl animate-blob animation-delay-4000" />
    <div class="absolute top-[65%] right-[21%] w-96 h-72 bg-[rgb(var(--color-primary-900)_/_0.5)] dark:bg-primary-950 rounded-full blur-xl animate-blob animation-delay-2000" />
    <div class="absolute top-[70%] right-[20%] w-72 h-72 bg-[rgb(var(--color-primary-900)_/_0.5)] dark:bg-primary-950 rounded-full blur-xl animate-blob animation-delay-4000" />

    <!-- <div class="absolute w-1 h-screen top-0 left-[20%] bg-[rgb(var(--color-primary-900)_/_0.5)] dark:bg-primary-950 blur-sm animate-height" />
    <div class="absolute w-1 top-0 left-[23%] bg-[rgb(var(--color-primary-900)_/_0.5)] dark:bg-primary-950 blur-sm animate-height animation-delay-2000" /> -->
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BackgroundHomeComponent',
})

defineProps({
  animate: {
    type: Boolean,
    default: false,
  },
})
</script>
