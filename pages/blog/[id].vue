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

const { params } = useRoute();
const findBlog = faqJson.find(el => el.route === "/" + params.id);

useSeoMeta({
  title: `${findBlog.info} | Abie`,
  ogTitle: `${findBlog.title} | Abie`,
  description:
    "Добро пожаловать в блог ABIE! Здесь вы найдете актуальные рекомендации и инсайты по разработке веб-сайтов и дизайну. Следите за новыми трендами и получайте советы, которые помогут вашему бизнесу выделиться онлайн.",
  ogDescription:
    "Мы предлагаем практические советы и актуальную информацию о современных подходах и трендах в создании сайтов под ключ.",
  ogImage: "/Projects/colibri.webp",
});
</script>

<template>
  <FaqIdAbIdMain />
</template>

<style scoped lang="scss"></style>
