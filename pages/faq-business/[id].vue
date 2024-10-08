<script setup>
import faqJson from "~/public/json/faq-business.json";

definePageMeta({
  middleware: [
    function (val) {
      const arrFaq = faqJson.find(el => el.route === "/" + val.params.id);
      if (!arrFaq) {
        return navigateTo("/404/not-found");
      }
    },
  ],
});
</script>

<template>
  <FaqIdAbIdMain />
</template>

<style scoped lang="scss"></style>
