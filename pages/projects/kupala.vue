<script setup>
useSeoMeta({
  title: "Проект Купала – Создание айдентики | ABIE",
  ogTitle: "Купала - Разработка уникальной айдентики для вашего бренда",
  description:
    "Ознакомьтесь с нашим проектом по созданию айдентики для бренда Купала. Мы разработали уникальный визуальный стиль, который отражает ценности бренда и привлекает внимание целевой аудитории.",
  ogDescription:
    "Проект Купала включает в себя разработку айдентики, которая помогает бренду выделиться на рынке. Мы создали логотип, цветовую палитру и другие элементы, которые идеально подходят для имиджа компании.",
  ogImage: "/Projects/Id/kupalaMin.webp",
});

const infoBlock = ref([
    {
        name: 'купала',
        text: 'Разработка айдентики для фольклорного фестиваля летнего солнцестояния. Концепция — современное звучание, ремёсла, наслаждение природой, знакомства и общение. Площадка — Московская обл, Луховицы 20–21 июня',
        slogan: 'Услуги<br> Разработка айдентики и бредбука для фестиваля'
    },
    {
        name: 'задача',
        text: 'Разработка логотипа, фирменного стиля, оформление и навигация на площадке фестиваля, оформление социальных сетей. Анимационный промо-ролик.',
        slogan: 'Отрасль<br>Фестивали'
    },
    {
        name: 'метафора',
        text: 'Главным символом праздника является солнце — айдентика повторяет его форму. Круг состоит из нарезанных букв входящих в слово купала, и создает некоторое количество слоев-кругов. В этот круг могут быть вписаны другие слова фестиваля, из-за этого могут меняться количество слоев-кругов. Главной анимацией является сбор круга в слово купала. ',
        image: '/Projects/Id/task-cupala.webp'
    },
])

const infoArtist = ref([
    {
        name: 'артисты',
        text: 'Выступающие артисты и группы кодируются красным цветом на плакатах',
        image: '/Projects/Id/news-cupala.webp'
    },
    {
        name: 'плакаты',
        text: 'Фотостиль является основой и задает узнаваемость бренду. Главный элемент айдентики — круг, либо его проявление — луч, находятся на плакатах и могут становиться частью фотографии, усиливая ее. Например, становится кругами на воде,  луч становится веточкой растений, которая отбрасывает тень на лицо, круг — кокошник на голове  у девушки.',
    },
])

const infoHref = ref([
    {
        name: 'brand book',
        text: 'это официальный документ, который содержит правила и стандарты визуальной и вербальной идентичности бренда. Он помогает сохранять единый стиль и поддерживать целостность бренда во всех коммуникациях и рекламных материалах.',
        imageHref: '/Projects/Id/brandbook-cupala.webp',
        href: "https://www.behance.net/gallery/199028599/Brand-guideline-festival-gajdlajn-festivalja-brendbuk"
    },
])
</script>

<template>
    <div>
        <UIAbBackground :video="'/Main/kupala.mp4'" :padding="true"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Id/promo.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbInfo :info="infoArtist" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Id/placats.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbInfo :info="infoHref" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Id/final.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbOther :nameProject="'Купала'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
    </div>
</template>

<style scoped lang="scss">
</style>