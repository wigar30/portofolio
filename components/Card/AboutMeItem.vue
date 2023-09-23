<template>
  <div
    class="card w-fit absolute bg-neutral-600 border-2 border-primary-500 rounded-xl transition-transform duration-300 cursor-pointer -translate-x-[200%]"
    :class="[
      index > 1 ? `ml-${index * 3} mt-${index * 3} hover:translate-x-2 delay-100 active:translate-x-4 active:delay-0 active:duration-100` : '',
      active ? 'translate-x-4 delay-0 duration-100' : '',
      animating ? `translate-x-0 delay-${index * 200} duration-100` : ''
    ]"
    @click="handleClickCard">
    <div class="w-[400px] relative h-[500px] m-2 p-4 bg-neutral-800 rounded-lg overflow-hidden">
      <div class="absolute top-[10%] -left-[30%] w-80 h-80 bg-gray-600 rounded-full animate-blob blur-xl" />
      <div class="absolute bottom-[10%] right-[10%] w-20 h-20 bg-gray-600 rounded-full blur-xl" />
      <p class="absolute text-xl font-normal text-neutral-200 leading-8">{{ content.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
type AboutMeItem = {
  locale: string,
  content: string
}

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  content: {
    type: Object as PropType<AboutMeItem>,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  animating: {
    type: Boolean,
    default: false
  }
})

defineOptions({
  name: 'CardAboutMeItemComponent'
})

const emit = defineEmits<{
  (event: 'click', index: number): void
}>()

const marginLeft = ['ml-2', 'ml-3', 'ml-4', 'ml-6', 'ml-8', 'ml-16']
const marginTop = ['mt-2', 'ml-3', 'mt-4', 'mt-6', 'mt-8', 'mt-16']
const delay = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

const handleClickCard = () => {
  emit('click', props.index)
}
</script>