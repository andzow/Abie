<script setup>
useSeoMeta({
  title: "Проект My Stories – Создание интернет-магазина одежды | ABIE",
  ogTitle: "My Stories - Стильный интернет-магазин одежды для каждой истории",
  description:
    "Представляем проект My Stories — интернет-магазин, где каждая покупка становится частью вашей уникальной истории. Мы создали удобную и стильную платформу для покупки модной одежды и аксессуаров.",
  ogDescription:
    "Проект My Stories включает создание интернет-магазина одежды с фокусом на элегантный дизайн, удобство использования и широкий ассортимент. Наш магазин предлагает стильные решения для любого случая.",
  ogImage: "/Projects/Ms/myStoriesMin.webp",
});

const infoBlock = ref([
    {
        name: 'my stories',
        text: 'My Stories – это бренд женской одежды из преимущественно натуральных материалов с особой любовью к деталям и фурнитуре, в основе которого лежит философия экологичности, здоровья и осознанного потребления',
        slogan: 'Услуги<br> Разработка интернет магазина по брендбуку<br> Интеграции AMO SRM, Доставка Почта Росии и СДЭК<br>Отрасль<br> Ритейл',
    },
    {
        name: 'задача',
        text: 'Разработать сайт с нуля кодом. Важны интеграции с AМО CRM, Почтой России и СДЭК. С админ-панелью, где есть возможность самостоятельно вносить товары на сайт. А так же использовать функционал различных систем онлайн-оплаты',
        image: '/Projects/Ms/contacts.webp',
    },
])
const infoBlock_2 = ref([
    {
        name: 'дизайн',
        text: 'У My Stories уже был готовый брендбук со своим стилем и правилами. В дизайне мы отразили их и раскрыли с лучшей стороны. Фирменными элементами являются заголовки в скобках , журнальный тип верстки и шум на фотографиях. Все чтобы передать атмосферу моды',
        slogan: 'Услуги<br> Разработка интернет магазина по брендбуку<br> Интеграции AMO SRM, Доставка Почта Росии и СДЭК<br>Отрасль<br> Ритейл',
    },
    {
        name: 'разработка',
        text: 'Наши разработчики смогли реализовать всё то, что было необходимо клиенту. Мы с нуля создали Админ-панель, из которой теперь можно управлять всем сайтом, настроили необходимые интеграции с CRM и почтовыми сервисами. А так же подключили и настроили все виды онлайн-оплат',
        image: '/Projects/Ms/amo.webp',
    },
])
const infoBlock_3 = ref([
    {
        name: 'админ-панель',
        text: 'На сайте была реализована админ-панель с возможностью редактирование каталога: добавлять товар, описание, фото и видео, Редактирование разделов каталога, а также возможность добавлять промокоды',
    },
])
</script>

<template>
    <div>
        <UIAbBackground :video="'/Main/myStories.mp4'" :padding="true"/>
        <UIAbInfo :info="infoBlock" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Ms/visit.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbInfo :info="infoBlock_2" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Ms/photo_1.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Ms/lookbook.mp4'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :photo="'/Projects/Ms/photo_2.webp'" :width="true" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbInfo :info="infoBlock_3" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbBackground :video="'/Projects/Ms/admin.mp4'" data-aos="fade-zoom-in" data-aos-delay="1000"/>
        <UIAbOther :nameProject="'My stories'" />
    </div>
</template>

<style scoped lang="scss">
</style>