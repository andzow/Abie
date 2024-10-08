<script setup>
import faqJson from "~/public/json/faq-business.json";

const arrFaq = faqJson;
</script>

<template>
  <section class="faq">
    <div class="faq__content">
      <FaqAbCard v-for="(item, idx) in arrFaq" :key="idx" :item="item" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  padding-top: 400px;
  margin-bottom: 75px;

  &__content {
    max-width: 1740px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 20px;
  }
}
</style>
