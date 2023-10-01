<template>
  <div
    class="w-[380px] h-fit mt-4 rounded-xl bg-gray-600 border-2 border-primary-500 p-2 overflow-hidden transition-transform duration-300 -translate-x-[300%]"
    :class="[animate ? `translate-x-0 delay-500 duration-100` : '']"
  >
    <img class="object-contain rounded-lg" src="@/assets/images/profile.webp" alt="" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CardAboutMeProfileComponent',
})

const props = defineProps({
  animate: {
    type: Boolean,
    default: false,
  },
})
</script>
