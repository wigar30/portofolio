<template>
  <div class="w-full h-full flex bg-primary-900 dark:bg-primary-100 rounded-3xl items-start" :class="[props.sidebarPosition === 'left' ? 'flex-row' : 'flex-row-reverse']">
    <div role="tablist" aria-label="tabs" class="relative w-max h-fit flex-none grid items-center px-4 py-6 overflow-hidden" :class="classes">
      <div
        class="absolute indicator h-10 w-1 top-2 bottom-0 rounded-full bg-primary-100 dark:bg-primary-900 shadow-md transition-all"
        :class="[props.sidebarPosition === 'left' ? 'left-6' : 'right-6']"
      />
      <button
        v-for="(content, i) in contents"
        :id="content.id"
        :key="i"
        role="tab"
        :aria-selected="i === 0"
        :aria-controls="`panel-${i + 1}`"
        tabindex="0"
        class="relative h-10 px-6 tab rounded-full"
        :class="[i === 0 ? 'active' : '', props.sidebarPosition === 'left' ? 'text-left left-0' : 'text-right']"
      >
        <span class="text-primary-100 dark:text-primary-900 font-normal transition-none">{{ content.label }}</span>
      </button>
    </div>
    <div class="relative w-full">
      <div v-for="(content, i) in contents" :id="`panel-${i + 1}`" :key="i" role="tabpanel" class="tab-panel p-6 pr-0 transition-opacity duration-300 text-start" :class="i !== 0 ? 'hidden' : 'block'">
        <slot :name="content.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabContent } from '@/types/TabsComponent'
defineOptions({
  name: 'VerticalTabComponent',
})

const props = defineProps({
  sidebarPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
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
const cols = ['grid-rows-2', 'grid-rows-3', 'grid-rows-4', 'grid-rows-5', 'grid-rows-6', 'grid-rows-7', 'grid-rows-8', 'grid-rows-9', 'grid-rows-10', 'grid-rows-11', 'grid-rows-12']

const clickEvent = ref<EventListener[]>([])

const classes = computed(() => `grid-rows-${props.contents.length}`)

onMounted(() => {
  const tabs = document.querySelectorAll('.tab')
  const indicator: HTMLElement | null = document.querySelector('.indicator')
  const panels = document.querySelectorAll('.tab-panel')

  if (indicator && panels?.length) {
    indicator.style.top = tabs[0].getBoundingClientRect().top - (tabs[0].parentElement?.getBoundingClientRect().top ?? 0 + 8) + 'px'

    tabs.forEach((tab, index) => {
      clickEvent.value[index] = () => {
        const tabTarget = tab.getAttribute('aria-controls')

        indicator.style.top = tab.getBoundingClientRect().top - (tab.parentElement?.getBoundingClientRect().top ?? 0 + 8) + 'px'

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
  transition: top 0.4s;
}

.tab.active span {
  @apply font-bold;
}
</style>
