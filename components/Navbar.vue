<template>
  <nav class="w-full h-20 py-4 sticky top-0 z-[999]">
    <UContainer class="w-full h-full flex items-center justify-end space-x-6">
      <div v-for="(item, i) in menus" :key="i">
        <ULink class="scroll-smooth" exact-hash :class="{ 'route-active': item.key === currentActive, 'route-inactive': item.key !== currentActive }" :to="{ path: '/', hash: item.to }">
          <span class="text-sm text-neutral-700 dark:text-neutral-400 font-semibold">{{ item.label }}</span>
        </ULink>
      </div>
    </UContainer>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  currentActive: {
    type: String,
    default: 'home'
  }
})

const menus = [
  {
    to: '',
    key: 'home',
    label: 'Home'
  },
  {
    to: '#about-me',
    key: 'about-me',
    label: 'About Me'
  },
  {
    to: '#my-works',
    key: 'my-works',
    label: 'My Works'
  },
  {
    to: '#contact',
    key: 'contact',
    label: 'Contact'
  }
]

</script>

<style>
.route-active {
  @apply py-2 px-4 border-2 border-primary-500 rounded-full bg-black
}
.route-active span {
  @apply text-neutral-600 dark:text-neutral-200
}
</style>