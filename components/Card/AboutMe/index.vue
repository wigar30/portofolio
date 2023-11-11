<template>
  <div ref="card" class="w-1/3 mb-6 relative">
    <TabsVertical :contents="contents" sidebar-position="right">
      <template #id>
        <span class="text-primary-100 dark:text-primary-900"
          >Perkenalkan nama saya Wigar Kumara Prasojo. Saya adalah seorang frontend developer yang berdomisili di kota Yogyakarta. Saya memiliki pengalaman dalam membuat website dengan menggunakan
          teknologi seperti vuejs, nuxtjs, nextjs, dan tailwindcss. Saya juga memiliki pengalaman dalam membuat aplikasi backend dengan menggunakan teknologi nodejs dan php seperti expressjs, nestjs
          dan laravel.</span
        >
      </template>
      <template #en>
        <span class="text-primary-100 dark:text-primary-900"
          >My name is Wigar Kumara Prasojo. I am a frontend developer who lives in the city of Yogyakarta. I have experience in making websites using technologies such as vuejs, nuxtjs, nextjs, and
          tailwindcss. I also have experience in making backend applications using nodejs and php technologies such as expressjs, nestjs and laravel.</span
        >
      </template>
    </TabsVertical>
  </div>
</template>

<script setup lang="ts">
defineProps({
  animate: {
    type: Boolean,
    default: false,
  },
})
defineOptions({
  name: 'CardAboutMeComponent',
})

const contents = ref([
  {
    id: 'en',
    label: 'English',
    locale: 'en',
    content:
      'Hello everyone, my name is Wigar Kumara Prasojo. I am a frontend developer who lives in the city of Yogyakarta. I have experience in making websites using technologies such as vuejs, nuxtjs, nextjs, and tailwindcss. I also have experience in making backend applications using nodejs and php technologies such as expressjs, nestjs and laravel.',
  },
  {
    id: 'id',
    label: 'Bahasa',
    locale: 'id',
    content:
      'Hallo semua, perkenalkan nama saya Wigar Kumara Prasojo. Saya adalah seorang frontend developer yang berdomisili di kota Yogyakarta. Saya memiliki pengalaman dalam membuat website dengan menggunakan teknologi seperti vuejs, nuxtjs, nextjs, dan tailwindcss. Saya juga memiliki pengalaman dalam membuat aplikasi backend dengan menggunakan teknologi nodejs dan php seperti expressjs, nestjs dan laravel.',
  },
])

const active = ref(false)
const card = ref<any>(null)
const timer = ref<any>(null)

watch(active, (value) => {
  if (!value) return
  if (timer.value) clearTimeout(timer.value)

  timer.value = setTimeout(() => {
    active.value = false
  }, 400)
})
</script>
