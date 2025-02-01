<script setup lang='ts'>
useSeoMeta({
  title: "Создание витражей – Индивидуальный дизайн и изготовление | ABIE",
  ogTitle: "ABIE - Искусство создания витражей на заказ",
  description:
    "Откройте для себя наш уникальный подход к созданию витражей. Мы разрабатываем эксклюзивные витражи для интерьеров и экстерьеров, учитывая стиль и пожелания клиентов. Каждый витраж — это произведение искусства.",
  ogDescription:
    "Наши витражи — это уникальные творения, выполненные по индивидуальному заказу. Мы работаем с различными стилями и техниками, чтобы каждый проект был неповторимым и отражал атмосферу вашего пространства.",
  ogImage: "/Projects/Vi/vitragMin.webp",
});

const infoBlock = ref([
    {
        name: 'витражи',
        text: 'Витражи — это прежде всего искусство цвета, преобразующее солнечные лучи в яркие, переливающиеся оттенки',
        slogan: 'Верстка книги, и дизайн витражного короба'
    },
    {
        name: 'метафора',
        text: 'главной метафорой оформления книги это форма прямоугольники - стеклышки из которых составляется витраж. далее и короб и картинки и текст строится по форме прямоугольников',
        slogan: 'Отрасль<br>Образование'
    },
    {
        name: 'короб',
        text: 'это подарочное издание и у книги есть защитный короб. он выполнен мною в технике тиффани',
        video: '/Projects/Vi/create.mp4'
    },
])
</script>

<template>
    <div>
        <UIAbBackground :photo="'/Projects/Vi/glass.webp'" :padding="true"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_1.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_2.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_3.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_4.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_5.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_6.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_7.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_8.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Vi/photo_9.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbOther :nameProject="'витражи'"/>
    </div>
</template>

<style scoped lang="scss">
</style>