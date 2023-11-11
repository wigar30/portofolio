<template>
  <div role="tablist" aria-label="tabs" class="relative w-auto mx-auto h-12 grid items-center px-[3px] rounded-full bg-primary-900 dark:bg-primary-100 overflow-hidden" :class="classes">
    <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-primary-100 dark:bg-primary-900 shadow-md transition-all"></div>
    <button
      v-for="(content, i) in contents"
      :id="content.id"
      :key="i"
      role="tab"
      :aria-selected="i === 0"
      :aria-controls="`panel-${i + 1}`"
      tabindex="0"
      class="relative block h-10 px-6 tab rounded-full"
      :class="i === 0 ? 'active' : ''"
    >
      <span class="text-primary-100 dark:text-primary-900 transition-none">{{ content.label }}</span>
    </button>
  </div>
  <div class="mt-6 relative rounded-3xl bg-primary-900 dark:bg-primary-100">
    <div v-for="(content, i) in contents" :id="`panel-${i + 1}`" :key="i" role="tabpanel" class="tab-panel p-6 transition-opacity duration-300" :class="i !== 0 ? 'hidden' : 'block'">
      <slot :name="content.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabContent } from '@/types/TabsComponent'
defineOptions({
  name: 'HorizontalTabComponent',
})

const props = defineProps({
  contents: {
    type: Array as PropType<TabContent[]>,
    default: () => [
      {
        id: '',
        label: '',
      },
    ],
  },
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cols = ['grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12']

const clickEvent = ref<EventListener[]>([])

const classes = computed(() => `grid-cols-${props.contents.length}`)

onMounted(() => {
  const tabs = document.querySelectorAll('.tab')
  const indicator: HTMLElement | null = document.querySelector('.indicator')
  const panels = document.querySelectorAll('.tab-panel')

  if (indicator && panels?.length) {
    indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
    indicator.style.left = tabs[0].getBoundingClientRect().left - (tabs[0].parentElement?.getBoundingClientRect().left ?? 0) + 'px'

    tabs.forEach((tab, index) => {
      clickEvent.value[index] = () => {
        const tabTarget = tab.getAttribute('aria-controls')

        indicator.style.width = tab.getBoundingClientRect().width + 'px'
        indicator.style.left = tab.getBoundingClientRect().left - (tab.parentElement?.getBoundingClientRect().left ?? 0) + 'px'

        panels.forEach((panel) => {
          const panelId = panel.getAttribute('id')
          if (tabTarget === panelId) {
            tab.classList.add('active')
            panel.classList.remove('hidden', 'opacity-0')
            panel.classList.add('block', 'opacity-100')
          } else {
            tabs.forEach((tab, i) => {
              if (index !== i) {
                tab.classList.remove('active')
              }
            })
            panel.classList.add('hidden', 'opacity-0')
          }
        })
      }

      tab.addEventListener('click', clickEvent.value[index])
    })
  }
})

onBeforeUnmount(() => {
  const tabs = document.querySelectorAll('.tab')

  tabs.forEach((tab, index) => {
    tab.removeEventListener('click', clickEvent.value[index])
  })
})
</script>

<style>
.indicator {
  transition: left 0.4s;
}

.tab.active span {
  @apply text-primary-900 dark:text-primary-100;
}
</style>
