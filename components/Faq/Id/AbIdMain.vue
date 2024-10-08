<script setup>
import faqJson from "~/public/json/faq-business.json";

const { params } = useRoute();

const { data } = await useAsyncData("faq-business", () =>
  faqJson.find(el => el.route === "/" + params.id)
);

const getArrFaq = computed(() => {
  return data.value;
});
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
        <ul class="main__item_ul" v-if="item?.list?.arrList">
          {{
            item?.list?.title ? item?.list?.title : ""
          }}
          <li
            class="main__item_li"
            v-for="(el, id) in item.list.arrList"
            :key="id"
          >
            {{ el }}
          </li>
        </ul>
        <p class="main__item_des" v-if="item?.list?.arrList">
          {{ item?.list?.des ? item?.list?.des : "" }}
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
    max-width: 800px;
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
        position: relative;
        font-size: 24px;
        font-weight: 400;
        color: #000;
        transform: translateX(16px);
        &::before {
          position: absolute;
          content: "";
          transform: translateY(100%) translateX(-15px);
          top: 2px;
          width: 5px;
          height: 5px;
          background: #000;
          border-radius: 100%;
        }
      }
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
@media screen and (max-width: 1500px) {
  .main {
    &__header {
      margin-bottom: 200px;
    }
    &__title {
      font-size: 68px;
      max-width: 1054px;
    }
    &__des {
      font-size: 20px;
    }
    &__item {
      margin-bottom: 65px;
      max-width: 800px;
      &_title {
        font-size: 28px;
        margin-bottom: 35px;
      }
      &_des {
        font-size: 20px;
      }
      &_ul {
        font-size: 20px;
        font-weight: 400;
        color: #000;
        li {
          font-size: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 1240px) {
  .main {
    padding-top: 200px;
    &__header {
      margin-bottom: 80px;
    }
  }
}
@media screen and (max-width: 900px) {
  .main {
    &__header {
      flex-direction: column;
      gap: 30px;
    }
    &__des {
      font-size: 20px;
      text-align: left;
    }
  }
}
@media screen and (max-width: 710px) {
  .main {
    &__title {
      font-size: 48px;
    }
  }
}
@media screen and (max-width: 510px) {
  .main {
    &__title {
      font-size: 38px;
    }
  }
}
</style>
