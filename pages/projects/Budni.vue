<script setup>
useSeoMeta({
  title: "Проект Budni Кофе – Реализация дизайна упаковки | ABIE",
  ogTitle: "Budni Кофе - Инновационный дизайн упаковки для вашего бренда",
  description:
    "Ознакомьтесь с нашим проектом по разработке уникального дизайна упаковки для Budni Кофе. Мы создали стильный и привлекательный внешний вид, который подчеркнул особенности бренда и привлек внимание покупателей.",
  ogDescription:
    "В проекте Budni Кофе мы реализовали современный дизайн упаковки, который сочетает в себе функциональность и эстетику. Узнайте больше о процессе и результатах этой работы.",
  ogImage: "/Projects/Bu/budniMin.webp",
});

const infoBlock = ref([
    {
        name: 'budni cofe',
        text: 'My Stories – это бренд женской одежды из преимущественно натуральных материалов с особой любовью к деталям и фурнитуре в основе которого лежит философия экологичности, здоровья и осознанного потребления',
        slogan: 'Редизайн упаковки<br>Отрасль<br>Horeca'
    },
    {
        name: 'задача',
        text: 'обновить упаковку для зернового кофе, с разделением по профессиям для офисных работников. упаковка должна отражать бунтарство, современность и должен быть огонёк',
    },
    {
        name: 'концепция',
        text: 'основной графический элемент упаковки — это персонажи профессий с утрированными эмоциями. идея в том, что в них сможет находить себя потребитель. я опиралась на стиль полького плаката кривые свободные линии, потеки ',
        video: '/Projects/Bu/pack.mp4'
    },
])
</script>

<template>
    <div>
        <UIAbBackground :photo="'/Projects/Bu/budniMax.webp'" :padding="true"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000" />
        <UIAbBackground :photo="'/Projects/Bu/photo_1.webp'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <ProjectsBudniAbTeam data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Bu/photo_2.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Bu/drip.mp4'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Bu/photo_3.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Bu/photo_4.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Bu/photo_5.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Bu/photo_6.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Bu/photo_7.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbOther :nameProject="'budni cofe'"/>
    </div>
</template>

<style scoped lang="scss">
</style>