<template>
  <div class="w-full h-screen relative">
    <div class="absolute -translate-y-1/2 top-1/2 -left-1/3 w-[1200px] h-[1200px] bg-primary-50 rounded-full blur-3xl performance" />
    <div class="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] bg-primary-50 rounded-full blur-3xl performance" />

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

<style>
.performance {
  /* transform: translateZ(0); for older browsers */
  will-change: transform;
}
</style>
