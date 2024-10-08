<script setup>
import faqJson from "~/public/json/faq-business.json";

const { params } = useRoute();

const getArrFaq = computed(() => {
  return faqJson.find(el => el.route === "/" + params.id);
});
console.log(getArrFaq);
</script>

<template>
  <section class="main">
    <div class="main__content">
      <div class="main__header">
        <h1 class="main__title">
          {{ getArrFaq.title }}
        </h1>
        <p class="main__des">
          {{ getArrFaq.info }}
        </p>
      </div>
      <div
        class="main__item"
        v-for="(item, idx) in getArrFaq.arrInfo"
        :key="idx"
      >
        <h2 class="main__item_title">
          {{ item?.title }}
        </h2>
        <p class="main__item_des">
          {{ item.text }}
        </p>
        <ol class="main__item_ul">
          Для того чтобы сайт стоматологической клиники был эффективным, он
          должен включать следующие функции:
          <li class="main__item_li">
            Онлайн-запись. Пациенты должны иметь возможность записаться на прием
            через сайт в удобное для них время.
          </li>
        </ol>
        <p class="main__item_des">
          В сфере медицинских услуг сайт — это не просто визитная карточка, а
          важный инструмент для привлечения пациентов и автоматизации процессов.
          Для стоматологической клин
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main {
  padding-top: 400px;
  margin-bottom: 114px;

  &__content {
    width: 100%;
    max-width: 1740px;
    margin: 0 auto;
    padding: 0 20px;
  }
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 30px;
    margin-bottom: 240px;
  }
  &__title {
    font-size: 81px;
    font-weight: 400;
    color: #000;
    max-width: 1054px;
  }
  &__des {
    font-size: 24px;
    font-weight: 400;
    color: #868686;
    max-width: 572px;
    text-align: right;
  }
  &__item {
    margin-bottom: 65px;
    &_title {
      font-size: 32px;
      font-weight: 400;
      color: #000;
      margin-bottom: 40px;
    }
    &_des {
      font-size: 24px;
      font-weight: 400;
      color: #000;
    }
    &_ul {
      font-size: 24px;
      font-weight: 400;
      color: #000;
      li {
        font-size: 24px;
        font-weight: 400;
        color: #000;
        transform: translateX(20px);
      }
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
