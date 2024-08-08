<template>
  <div class="w-full flex justify-center h-section relative">
    <!-- <div class="absolute top-[60%] left-[10%] w-20 h-20 bg-primary-100 rounded-full blur-lg" />
    <div class="absolute top-[65%] left-[11%] w-32 h-32 bg-primary-100 rounded-full blur-lg" />
    <div class="absolute top-[70%] left-[10%] w-20 h-20 bg-primary-100 rounded-full blur-lg" /> -->
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BackgroundAboutMeComponent',
})
</script>
