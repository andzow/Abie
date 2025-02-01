<script setup>
useSeoMeta({
  title: "Проект Trend Rent – Создание интернет-магазина | ABIE",
  ogTitle: "Trend Rent - Современный интернет-магазин аренды товаров",
  description:
    "Ознакомьтесь с нашим проектом создания интернет-магазина для Trend Rent. Мы разработали удобную платформу для аренды товаров, которая помогает клиентам легко находить и заказывать необходимые вещи.",
  ogDescription:
    "Проект Trend Rent включает в себя создание интернет-магазина для аренды товаров с интуитивно понятным интерфейсом, быстрым поиском и простотой оформления заказов. Узнайте больше о процессе разработки.",
  ogImage: "/Projects/Tr/trendMin.webp",
});

const infoBlock = ref([
    {
        name: 'trend rent',
        text: 'Москвовский бренд, который предлагает классную, эксклюзивную, брендовую одежду для сдачи в аренду для фотосессий и мероприятий',
        slogan: 'Услуги<br>Разработка сайта на платформе Tilda'
    },
    {
        name: 'задача',
        text: 'Разработать сайт на платформе Tilda, с уникальным стилем, выражающий индивидуальность и откликающийся целевой аудитории молодых девушек от 16 -30 лет',
    },
    {
        name: 'метафора',
        text: 'Главной метафорой является отсылка к детским журналам и детству, когда каждая девочка вырезала наряды из модных журналов, поэтому мы взяли идею коллажа за основу',
        image: '/Projects/Tr/gallery.webp'
    },
])
const infoBlock_2 = ref([
    {
        name: 'дизайн',
        text: 'Главными элементами дизайна стали: вырезка одежды, фирменный яркий градиент, а так же современная типографика. Совмещение этих идей позволило появиться уникальному и интересному стилю',
    }
])
</script>

<template>
    <div>
        <UIAbBackground :video="'/Projects/Tr/trandRent.mp4'" :padding="true"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Tr/site.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Tr/photo_1.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Tr/photo_2.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Tr/photo_3.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Tr/photo_4.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbOther :nameProject="'TREND RENT'"/>
    </div>
</template>