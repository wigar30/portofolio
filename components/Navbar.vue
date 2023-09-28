<template>
  <nav class="w-full h-20 py-4 fixed top-0 z-[999] backdrop-blur-sm">
    <UContainer class="w-full h-full flex items-center justify-end space-x-6">
      <div v-for="(item, i) in menus" :key="i">
        <ULink class="scroll-smooth flex" exact-hash :class="{ 'route-active': item.key === currentActive, 'route-inactive': item.key !== currentActive }" :to="{ hash: item.to }">
          <p class="text-sm leading-[14px] text-neutral-700 dark:text-neutral-400 font-semibold">{{ item.label }}</p>
        </ULink>
      </div>

      <UPopover>
        <div class="rounded-full p-1 border border-gray-600">
          <div class="w-3 h-3 rounded-full bg-primary-600" />
        </div>

        <template #panel>
          <div class="w-36 h-40 grid grid-cols-4 mx-auto p-4 gap-x-4">
            <div v-for="(item, i) in colorList" :key="i" class="mx-auto" @click="handleChangePrimaryColor(item.label)">
              <UTooltip
                :text="item.label"
                :ui="{
                  base: 'first-letter:uppercase text-xs font-normal truncate',
                }"
              >
                <div class="w-3 h-3 rounded-full flex items-center justify-center" :class="item.color" />
              </UTooltip>
            </div>
          </div>
        </template>
      </UPopover>
    </UContainer>
  </nav>
</template>

<script setup lang="ts">
import { ColorState } from '#imports'

type ColorList = {
  label: ColorState
  color: string
}

defineOptions({
  name: 'NavbarComponent',
})

defineProps({
  currentActive: {
    type: String,
    default: 'home',
  },
})

const { setColor } = useColor()

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

const colorList: ColorList[] = [
  {
    label: 'red',
    color: 'bg-red-600',
  },
  {
    label: 'orange',
    color: 'bg-orange-600',
  },
  {
    label: 'amber',
    color: 'bg-amber-600',
  },
  {
    label: 'yellow',
    color: 'bg-yellow-600',
  },
  {
    label: 'lime',
    color: 'bg-lime-600',
  },
  {
    label: 'green',
    color: 'bg-green-600',
  },
  {
    label: 'emerald',
    color: 'bg-emerald-600',
  },
  {
    label: 'teal',
    color: 'bg-teal-600',
  },
  {
    label: 'cyan',
    color: 'bg-cyan-600',
  },
  {
    label: 'sky',
    color: 'bg-sky-600',
  },
  {
    label: 'blue',
    color: 'bg-blue-600',
  },
  {
    label: 'indigo',
    color: 'bg-indigo-600',
  },
  {
    label: 'violet',
    color: 'bg-violet-600',
  },
  {
    label: 'purple',
    color: 'bg-purple-600',
  },
  {
    label: 'fuchsia',
    color: 'bg-fuchsia-600',
  },
  {
    label: 'pink',
    color: 'bg-pink-600',
  },
  {
    label: 'rose',
    color: 'bg-rose-600',
  },
]

const handleChangePrimaryColor = (color: ColorState) => {
  setColor(color)
}
</script>

<style>
.route-active {
  @apply py-2 px-4 border-2 border-primary-500 rounded-full bg-black;
}
.route-active p {
  @apply text-neutral-600 dark:text-neutral-200;
}
</style>
