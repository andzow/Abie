<template>
    <div>
        <UIAbHeader />
        <ErrorAbError />
        <UIAbPreload />
    </div>
</template>

<script setup lang="ts">
onMounted((): void => {
  findElement();
  window.addEventListener("resize", findElement);
});
</script>