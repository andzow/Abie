<template>
  <div>
    <UIAbPreload />
    <UIAbHeader />
    <NuxtPage />
    <UIAbFooter />
  </div>
</template>

<script setup lang="ts">
onMounted(():void => {
  findElement()
  window.addEventListener('resize', findElement);
})
onUnmounted(() => {
  window.removeEventListener('resize', findElement);
});
</script>
