<template>
  <div class="w-full h-screen">
    <div id="home" class="header h-20" />

    <BackgroundHome>
      <div id="home-text" class="w-full h-full flex items-center justify-center flex-col text-center space-y-4 z-20 absolute opacity-100" >
        <p class="text-7xl font-black fade-out text-white" :class="isAnimated ? 'fade-in' : ''">Hey.</p>
        <div class="flex">
          <span class="text-6xl font-medium whitespace-pre-wrap fade-out" :class="isAnimated ? 'fade-in' : ''">Welcome To My </span>
          <NuxtLink class="text-6xl font-medium underline decoration-primary-500 fade-in-hidden" :to="'/#about-me'" :class="isAnimated ? 'fade-in' : ''">Portofolio.</NuxtLink>
        </div>
      </div>
    </BackgroundHome>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeComponent'
})

const isAnimated = ref(false)

const elementIsVisibleInViewport = (el: any, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

onMounted(() => {
  const homeText = document.getElementById('home-text')
  setTimeout(() => {
    if (elementIsVisibleInViewport(homeText)) {
      isAnimated.value = true
    }
  }, 700)
})
</script>

<style>
.fade-out {
  opacity: 0;
  transition: 0.4s all ease-in;
}
.fade-in-hidden {
  opacity: 0;
  transform: translate(0, -50px);
  transition: 0.4s all ease-in-out;
}
.fade-in {
  opacity: 1;
  transform: translate(0, 0);
}

.blur-bottom {
  box-shadow: 0px -26px 30px 5px rgba(38,38,38,1) inset;
-webkit-box-shadow: 0px -26px 30px 5px rgba(38,38,38,1) inset;
-moz-box-shadow: 0px -26px 30px 5px rgba(38,38,38,1) inset;
}
</style>