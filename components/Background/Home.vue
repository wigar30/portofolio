<template>
  <div class="w-full h-[calc(100vh-80px)] relative">
    <div class="absolute top-12 left-20 w-72 h-72 bg-gray-600 rounded-full blur-xl animate-blob animation-delay-4000" />
    <div class="absolute top-28 left-32 w-96 h-72 bg-gray-600 rounded-full blur-xl animate-blob animation-delay-2000" />
    <div class="absolute top-32 left-36 w-72 h-72 bg-gray-600 rounded-full blur-xl animate-blob animation-delay-4000" />

    <div class="absolute top-[60%] right-[20%] w-72 h-72 bg-gray-600 rounded-full blur-xl animate-blob animation-delay-4000" />
    <div class="absolute top-[65%] right-[21%] w-96 h-72 bg-gray-600 rounded-full blur-xl animate-blob animation-delay-2000" />
    <div class="absolute top-[70%] right-[20%] w-72 h-72 bg-gray-600 rounded-full blur-xl animate-blob animation-delay-4000" />

    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BackgroundHomeComponent'
})
</script>