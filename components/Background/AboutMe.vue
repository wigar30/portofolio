<template>
  <div class="w-full flex justify-center h-section relative">
    <div class="absolute top-[60%] right-[10%] w-20 h-20 bg-gray-600 rounded-full blur-lg" />
    <div class="absolute top-[65%] right-[11%] w-32 h-32 bg-gray-600 rounded-full blur-lg" />
    <div class="absolute top-[70%] right-[10%] w-20 h-20 bg-gray-600 rounded-full blur-lg" />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BackgroundAboutMeComponent',
})
</script>
