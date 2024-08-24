<template>
  <div class="w-full h-screen relative flex flex-nowrap overflow-x-hidden">
    <div class="w-full h-screen bg-primary-950 flex-none overflow-x-hidden transition-all duration-500" :class="state.slider ? 'slide-left' : ''">
      <UContainer as="section" class="w-full h-screen flex justify-end items-center z-10">
        <CardMyWorks id="my-works-card" :animate="isAnimated" />
      </UContainer>
    </div>

    <div
      class="w-[90%] h-screen bg-primary-950 flex-none overflow-x-hidden border-primary-200 -skew-x-12 transition-all duration-500 delay-100"
      :class="state.slider ? '-translate-x-[90%] border-l-8' : ''"
    >
      <UContainer as="section" class="w-full h-screen p-6 z-10 ml-16 skew-x-12">
        <div
          class="w-fit flex items-center px-[6px] py-[5px] bg-grad-to-r gradient-transition rounded-r-3xl -skew-x-12 cursor-pointer mb-6"
          :class="state.return ? 'animate-flash' : ''"
          @click="handleReturn"
        >
          <button class="px-2 h-6 bg-primary-950 rounded-r-2xl">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 15.75H2.75V16V18V18.25H3H15C16.7322 18.25 18.2127 17.6409 19.4268 16.4268C20.6409 15.2127 21.25 13.7322 21.25 12C21.25 10.2678 20.6409 8.78731 19.4268 7.57322C18.2127 6.35914 16.7322 5.75 15 5.75H11.4036L12.5768 4.57678L12.7536 4.4L12.5768 4.22322L11.1768 2.82322L11 2.64645L10.8232 2.82322L6.82322 6.82322L6.64645 7L6.82322 7.17678L10.8232 11.1768L11 11.3536L11.1768 11.1768L12.5768 9.77678L12.7536 9.6L12.5768 9.42322L11.4036 8.25H15C16.0332 8.25 16.9114 8.61495 17.6482 9.35178C18.385 10.0886 18.75 10.9668 18.75 12C18.75 13.0332 18.385 13.9114 17.6482 14.6482C16.9114 15.385 16.0332 15.75 15 15.75L3 15.75Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="3"
              />
            </svg>
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
