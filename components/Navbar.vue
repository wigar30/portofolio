<template>
  <nav class="w-full h-20 py-4 fixed top-0 z-[999] backdrop-blur-sm">
    <UContainer class="w-full h-full flex items-center justify-end space-x-6">
      <div v-for="(item, i) in menus" :key="i">
        <ULink class="scroll-smooth flex" exact-hash :class="{ 'route-active': item.key === currentActive, 'route-inactive': item.key !== currentActive }" :to="{ hash: item.to }">
          <p class="text-sm leading-[14px] text-neutral-700 dark:text-neutral-400 font-semibold">{{ item.label }}</p>
        </ULink>
      </div>
    </UContainer>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'NavbarComponent',
})

defineProps({
  currentActive: {
    type: String,
    default: 'home',
  },
})

const menus = [
  {
    to: '#home',
    key: 'home',
    label: 'Home',
  },
  {
    to: '#about-me',
    key: 'about-me',
    label: 'About Me',
  },
  {
    to: '#my-works',
    key: 'my-works',
    label: 'My Works',
  },
  {
    to: '#contact',
    key: 'contact',
    label: 'Contact',
  },
]
</script>

<style>
.route-active {
  @apply py-2 px-4 border-2 border-primary-500 rounded-full bg-black;
}
.route-active p {
  @apply text-neutral-600 dark:text-neutral-200;
}
</style>
