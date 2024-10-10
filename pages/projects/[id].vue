<script setup>
import projectsArr from "~/public/json/projects.json";

definePageMeta({
  middleware: [
    function (val) {
      const arrFaq = projectsArr.find(el => el.route === "/" + val.params.id);
      if (!arrFaq) {
        return navigateTo("/404/not-found");
      }
    },
  ],
});

const { params } = useRoute();
const findProject = projectsArr.find(el => el.route === "/" + params.id);

useSeoMeta({
  title: `${findProject.name} | Abie`,
  ogTitle: `Добро пожаловать в портфолио ABIE! Здесь представлен мой проект по разработке сайтов — от дизайна до полной реализации. Проект создан с учётом современных технологий и индивидуальных потребностей клиентов, чтобы помочь бизнесу выделиться в интернете | Abie`,
  description:
    "Ознакомьтесь с реализованными проектами по созданию сайтов под ключ. Я разрабатываю уникальные решения с акцентом на актуальные тренды, высокое качество и успех каждого бизнеса в онлайн-среде. | Abie",
  ogDescription:
    "Ознакомьтесь с реализованными проектами по созданию сайтов под ключ. Я разрабатываю уникальные решения с акцентом на актуальные тренды, высокое качество и успех каждого бизнеса в онлайн-среде. | Abie",
  ogImage: findProject?.imageSrc,
});
</script>

<template>
  <div>
    <PortfolioIdAdMain />
  </div>
</template>

<style scoped lang="scss"></style>
