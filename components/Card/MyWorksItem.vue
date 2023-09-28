<template>
  <UCard
    class="w-full my-works rounded-lg mb-4"
    :ui="{
      divide: 'divide-y divide-primary-200 dark:divide-primary-800',
    }"
  >
    <template #header>
      <p class="text-lg font-semibold text-neutral-200 mb-4">{{ content.name }}</p>

      <div class="w-full flex flex-nowrap overflow-hidden relative rounded-lg" :class="[left ? 'justify-end' : 'justify-start', content.images?.length ? 'h-40' : 'h-0']">
        <div
          v-for="(img, i) in content.images"
          :key="i"
          class="w-64 h-full absolute last:shadow-none overflow-hidden rounded-lg transition-transform duration-300"
          :class="[
            `z-[${content?.images?.length ? content.images.length - i : 0}]`,
            animating ? (left ? `-translate-x-[${i * 80}px] shadow-img-left` : `translate-x-[${i * 80}px] shadow-img-right`) : left ? 'translate-x-[100%]' : '-translate-x-[100%]',
            getRandomDelay(),
          ]"
        >
          <img :src="img" class="object-cover object-right h-auto transform scale-[2] translate-y-10" />
        </div>
      </div>
    </template>
    <p>Ini Description</p>

    <div class="w-full flex justify-end">
      <UButton label="View" @click="handleOpenModal"> </UButton>
    </div>
  </UCard>

  <UModal v-model="isOpen">
    <UCard> </UCard>
  </UModal>
</template>

<script setup lang="ts">
type MyWorksItem = {
  name: string
  tech: string[]
  images?: string[]
}

const props = defineProps({
  left: {
    type: Boolean,
    default: false,
  },
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

const translate = [
  'translate-x-[0px]',
  'translate-x-[80px]',
  'translate-x-[160px]',
  'translate-x-[240px]',
  'translate-x-[320px]',
  '-translate-x-[0px]',
  '-translate-x-[80px]',
  '-translate-x-[160px]',
  '-translate-x-[240px]',
  '-translate-x-[320px]',
]
const zIndex = ['z-[0]', 'z-[1]', 'z-[2]', 'z-[3]', 'z-[4]', 'z-[5]']
const delay = ['delay-[0ms]', 'delay-[100ms]', 'delay-[200ms]', 'delay-[300ms]', 'delay-[400ms]', 'delay-[500ms]', 'delay-[600ms]', 'delay-[700ms]', 'delay-[800ms]', 'delay-[900ms]']
const delayValue = [0, 100, 200, 300, 400, 500]

const isOpen = ref(false)

/**
 * get random index from translate array
 */
const getRandomDelay = (): string => {
  const index = Math.floor(Math.random() * delayValue.length)
  return delay[index]
}

/**
 * Handle open modal.
 * Set isOpen reactive to true
 */
const handleOpenModal = () => {
  isOpen.value = true
}
</script>

<style>
.my-works {
  box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
  -webkit-box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
  -moz-box-shadow: 0px 0px 32px 4px rgba(38, 38, 38, 1) inset;
}

.shadow-img-right {
  box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px 6px 42px 9px rgba(0, 0, 0, 0.75);
}

.shadow-img-left {
  box-shadow: -18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -18px 6px 42px 9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -18px 6px 42px 9px rgba(0, 0, 0, 0.75);
}
</style>
