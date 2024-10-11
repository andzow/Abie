<template>
  <div>
    <UIAbPreload />
    <UIAbHeader />
    <main>
      <NuxtPage />
    </main>
    <UIAbFooter />
  </div>
</template>

<script setup lang="ts">
onMounted((): void => {
  findElement();
  window.addEventListener("resize", findElement);
});
</script>
