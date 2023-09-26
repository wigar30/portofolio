<template>
  <UCard class="w-full my-works rounded-lg mb-4">
    <template #header>
      <p class="text-lg font-semibold text-neutral-200 mb-4">{{ content.name }}</p>

      <div class="w-full h-40 flex flex-nowrap overflow-hidden relative">
        <div
          v-for="(img, i) in content.images"
          :key="i"
          class="w-64 h-40 absolute my-works-img overflow-hidden rounded-sm transition-transform duration-300"
          :class="[`z-[${content?.images?.length ? content.images.length - i : 0}]`, animating ? `translate-x-[${i * 80}px]` : 'translate-x-0']"
        >
          <img :src="img" class="object-cover object-right" />
        </div>
      </div>
    </template>
    <p>Ini Description</p>
  </UCard>
</template>

<script setup lang="ts">
type MyWorksItem = {
  name: string
  tech: string[]
  images?: string[]
}

const props = defineProps({
  content: {
    type: Object as PropType<MyWorksItem>,
    required: true,
  },
  animating: {
    type: Boolean,
    default: false,
  },
})

defineOptions({
  name: 'CardMyWorksItemComponent',
})

const translate = ['translate-x-[0px]', 'translate-x-[80px]', 'translate-x-[160px]', 'translate-x-[240px]']
const zIndex = ['z-[0]', 'z-[1]', 'z-[2]', 'z-[3]', 'z-[4]']
</script>

<style>
.my-works {
  box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
  -webkit-box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
  -moz-box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
}

.my-works-img {
  box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
}
</style>
