<template>
  <div class="inline-block">
    <UCard
      class="rounded-lg mb-4"
      :ui="{
        divide: 'divide-y divide-primary-200 dark:divide-primary-800',
        background: 'bg-primary-900 dark:bg-primary-200',
        shadow: 'shadow-none',
      }"
    >
      <p class="text-lg font-semibold text-primary-100 dark:text-primary-900 mb-4">{{ content.name }}</p>

      <div class="w-full flex flex-nowrap overflow-hidden relative rounded-lg cursor-pointer justify-start" :class="[content.images?.length ? 'h-40' : 'h-0']">
        <div
          v-for="(img, i) in content.images"
          :key="i"
          class="w-64 h-full absolute last:shadow-none overflow-hidden rounded-lg transition-transform duration-300 cursor-pointer"
          :class="[`z-[${content?.images?.length ? content.images.length - i : 0}]`, animating ? `translate-x-[${i * 80}px] shadow-img-right` : '-translate-x-[100%]', getRandomDelay()]"
          @click="handleOpenModal"
        >
          <img :src="img" class="object-cover object-right h-auto transform scale-[2] translate-y-10" />
        </div>
      </div>

      <template #footer>
        <div class="w-full flex items-center justify-between">
          <div class="w-4/5 flex space-x-2">
            <UBadge
              v-for="(item, i) in content.tech"
              :key="i"
              :label="item"
              variant="soft"
              color="primary"
              :ui="{
                variant: {
                  soft: 'text-primary-900 dark:text-primary-100 bg-primary-100 dark:bg-primary-900 dark:bg-opacity-100',
                },
              }"
            >
            </UBadge>
          </div>
          <div class="w-full flex justify-end">
            <UButton
              label="View"
              size="xs"
              :ui="{
                variant: {
                  solid: 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100',
                },
              }"
              @click="handleOpenModal"
            />
          </div>
        </div>
      </template>
    </UCard>

    <UModal
      v-model="isOpen"
      :ui="{
        width: 'sm:max-w-full sm:w-3/4 md:w-1/2',
      }"
    >
      <CardMyWorksDetail class="w-full" :content="content" />
    </UModal>
  </div>
</template>

<script setup lang="ts">
type MyWorksItem = {
  name: string
  desc: string
  tech: string[]
  images?: string[]
}

defineProps({
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
