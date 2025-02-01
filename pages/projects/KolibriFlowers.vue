<script setup>
useSeoMeta({
  title: "Проект Kolibri Flowers – Создание интернет-магазина цветов | ABIE",
  ogTitle: "Kolibri Flowers - Интернет-магазин цветов и аксессуаров",
  description:
    "Ознакомьтесь с нашим проектом создания интернет-магазина для Kolibri Flowers. Мы разработали удобную платформу для покупки свежих цветов, букетов и аксессуаров с доставкой на дом.",
  ogDescription:
    "Проект Kolibri Flowers включает создание современного интернет-магазина, который предлагает разнообразие цветов и букетов для любых поводов. Удобный интерфейс и простота оформления заказов — наш приоритет.",
  ogImage: "/Projects/Fl/flowersMini.webp",
});

const infoBlock = ref([
    {
        name: 'Kolibri flowers',
        text: 'Kolibri flowers – это цветочная мастерская из Перьми. Специализируется на цветочном декорировании мероприятий, входных групп, а так же актуальными цветочными букетами.',
        slogan: 'Услуги<br>Разработка интернет-магазина на платформе Tilda<br>Отрасль<br>Цветочный'
    },
    {
        name: 'задача',
        text: 'Разработать сайт на платформе Tilda, современный, эстетичный и удобный. Подключить каталог, оплату и доставку.',
        image: '/Projects/Fl/kolibri.webp'
    },
])
const infoBlock_2 = ref([
    {
        name: 'дизайн',
        text: 'Был разработан стиль для сайта, главными элементами стали типографика, сочетание гротеска и рукописного шрифта, натуральные природные оттенки. Все это в сочетании дает уникальный, современный стиль.',
        image: '/Projects/Fl/background.webp'
    },
])
</script>

<template>
    <div>
        <UIAbBackground :photo="'/Projects/Fl/flowersMax.webp'" :padding="true"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Fl/site.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbInfo :info="infoBlock_2" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Fl/photo_1.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Fl/photo_2.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Fl/photo_3.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbOther :nameProject="'Kolibri flowers'"/>
    </div>
</template>

<style scoped lang="scss">
</style>