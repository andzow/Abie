<script setup lang='ts'>
useSeoMeta({
  title: "Проект Fuchsi baby – Создание интернет-магазина | ABIE",
  ogTitle: "Fuchsi baby - Современный интернет-магазин для вашего бизнеса",
  description:
    "Познакомьтесь с нашим проектом по созданию интернет-магазина для Fuchsi baby. Мы разработали удобный и функциональный магазин, который помогает клиентам легко находить и покупать товары для детей.",
  ogDescription:
    "Проект Fuchsi baby включает в себя создание эффективного интернет-магазина с удобным интерфейсом, современной функциональностью и дизайном, который ориентирован на родителей. Узнайте больше о процессе разработки.",
  ogImage: "/Projects/Fu/FuchsiBabyMin.webp",
});

const infoBlock = ref([
    {
        name: 'FuchsiBaby',
        text: 'FuchsiBaby – это бренд детской одежды и аксессуаров для дома из Германии. Большой размерный ряд одежды от младенцев до школьников. Натуральные ткани и стильная одежда.  ',
        slogan: 'Услуги<br>Разработка интернет магазина<br>Админ-панели, блога<br>Отрасль<br>Ритейл'
    },
    {
        name: 'задача',
        text: 'Разработать сайт на коде с админ-панелью, возможность самостоятельно вносить товары на сайт и загружать каталога с таблицей Excel, в котором более 1000 товаров. Оплата осуществляется на сайте партнера, этот сайт будет играть рекламную роль.',
        image: '/Projects/Fu/dress.webp'
    },
])
const infoBlock_2 = ref([
    {
        name: 'дизайн',
        text: 'Был разработан стиль для сайта, главной метафорой стали детские рисунки - сами иллюстрации и элементы на сайте: звездочки, черточки, сердечки. Основная целевая аудитория это мамы, и такая метафора вызывает теплые чувства и мысли о своем ребенке. ',
    },
    {
        name: 'разработка',
        text: 'Перед разработчиками стояла зачада сверстать сайт, в котором каталог представляет из себя большое количество позиций, настроить фильтр поиска, а так же возможность загружать и обновлять каталог, путем загрузки Excel таблицы через админ-панель.',
    },
    {
        name: 'админ-панель',
        text: 'На сайте была реализована админ-панель с возможностью добавлять большое колличество товаров через таблицу Exel. Заказчик сам готовит таблицу с верными столбцами а они автоматом подставляются на сайт при загрузке.',
        image: '/Projects/Fu/famaly.webp'
    },
])
</script>

<template>
    <div>
        <UIAbBackground :photo="'/Projects/Fu/FuchsiBabyMax.webp'" :padding="true"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Fu/site.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbInfo :info="infoBlock_2" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Fu/photo_1.webp'" width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Fu/fox.mp4'" width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Fu/photo_2.webp'" width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbOther :nameProject="'FuchsiBaby'"/>
    </div>
</template>

<style scoped lang="scss">
</style>