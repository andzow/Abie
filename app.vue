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

<script setup>
import AOS from "aos";
import 'aos/dist/aos.css';

onMounted(() => {
  findElement();
  window.addEventListener("resize", findElement);
  if (process.client) {
    AOS.init();
  }
});
</script>
