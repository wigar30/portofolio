<template>
  <div id="container-work" class="w-full h-full flex flex-col items-end -skew-x-12 border-x-[6px] border-b-[6px] rounded-b-md border-gray-200 -translate-x-[67px]">
    <div class="w-full h-screen bg-primary-950 flex-none overflow-hidden hidden-scroll transition-all duration-500">
      <UContainer as="section" class="w-full flex justify-end items-center overflow-hidden py-6 z-10">
        <CardMyWorks id="my-works-card" :animate="isAnimated" />
      </UContainer>
    </div>
    <div class="w-full flex justify-end bg-primary-950">
      <CardAboutMe id="about-me-card" class="z-20" :animate="isAnimated" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyWorksComponent',
})

const isAnimated = ref(false)
</script>

<style>
.slide-left {
  @apply -skew-x-12 -translate-x-[90%];
}

.gradient-transition {
  background-size: 200% 200%;
  background-position: 0% 0%;
  transition: background-position 0.2s ease-in-out;

  &:hover {
    background-position: 100% 100%;
  }
}
</style>
