<template>
  <div class="w-full h-screen relative flex flex-nowrap overflow-x-hidden">
    <div class="w-full h-screen bg-primary-950 flex-none overflow-x-hidden transition-all duration-500" :class="state.slider ? 'slide-left' : ''">
      <UContainer as="section" class="w-full h-screen flex justify-end items-center z-10">
        <CardMyWorks id="my-works-card" :animate="isAnimated" />
      </UContainer>
    </div>

    <div class="w-[90%] h-screen bg-primary-950 flex-none overflow-x-hidden border-primary-200 -skew-x-12 transition-all duration-500" :class="state.slider ? '-translate-x-[90%] border-l-8' : ''">
      <UContainer as="section" class="w-full h-screen p-6 z-10 ml-16 skew-x-12">
        <div class="w-fit px-2 py-[7px] bg-grad-to-r gradient-transition rounded-r-3xl -skew-x-12 cursor-pointer" :class="state.return ? 'animate-flash' : ''" @click="handleReturn">
          <button class="px-4 bg-primary-950 rounded-r-2xl">
            <p class="skew-x-12 font-display font-bold">return</p>
          </button>
        </div>
        <CardMyWorksDetail :content="work" />
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Timeout } from '~/types/Common/Timeout'
import type { Work } from '~/types/Module/Works'

defineOptions({
  name: 'MyWorksComponent',
})

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const timeOut = ref<{ slider: Timeout; return: Timeout }>({ slider: null, return: null })
const state = ref({ return: false, slider: false })
const isAnimated = ref(false)

const common = useCommon()

const work = computed(() => common.currentWork.value)
const isActive = computed(() => props.active)

watch(work, (newValue: Work | null) => {
  state.value.slider = Boolean(newValue)
})

watch(isActive, (newValue: boolean) => {
  if (timeOut.value.slider) clearTimeout(timeOut.value.slider)

  if (newValue) {
    timeOut.value.slider = setTimeout(() => {
      isAnimated.value = true
    }, 200)
  } else {
    state.value.slider = false
    common.setWork(null)
    timeOut.value.slider = setTimeout(() => {
      isAnimated.value = false
    }, 200)
  }
})

const handleReturn = () => {
  state.value.return = true

  if (timeOut.value.return) clearTimeout(timeOut.value.return)
  timeOut.value.return = setTimeout(() => {
    state.value = { return: false, slider: false }
    common.setWork(null)
  }, 600)
}
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
