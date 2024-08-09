<template>
  <div class="w-full h-screen">
    <UContainer as="section" class="w-full h-screen flex justify-end items-center z-10">
      <CardMyWorks id="my-works-card" :animate="isAnimated" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MyWorksComponent',
})

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const timeOut = ref<NodeJS.Timeout>()
const isAnimated = ref(false)

const isActive = computed(() => props.active)

watch(isActive, (newValue: boolean) => {
  if (timeOut.value) clearTimeout(timeOut.value)

  if (newValue) {
    timeOut.value = setTimeout(() => {
      isAnimated.value = true
    }, 200)
  } else {
    timeOut.value = setTimeout(() => {
      isAnimated.value = false
    }, 200)
  }
})
</script>
