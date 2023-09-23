<template>
  <div class="w-full h-screen">
    <div id="about-me" class="header h-20" />

    <BackgroundAboutMe>
      <UContainer as="section" class="w-screen h-section flex items-center">
        <CardAboutMe />
      </UContainer>
    </BackgroundAboutMe>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutMeComponent'
})
</script>