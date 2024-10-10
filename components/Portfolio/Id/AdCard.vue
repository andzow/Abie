<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="card">
    <div class="card__menu">
      <h2 class="card__title">{{ item?.name }}</h2>
      <p class="card__info" v-html="item?.info"></p>
    </div>
    <div class="card__img" v-if="item?.imageSrc">
      <img :src="item?.imageSrc" />
    </div>
    <p class="card__des" v-html="item.des" v-else-if="item?.des"></p>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 120px;
  &__menu {
    max-width: 520px;
    transform: translateX(120px);
  }
  &__title {
    font-size: 81px;
    font-weight: 400;
    color: #000;
    margin-bottom: 60px;
    text-align: right;
  }
  &__info {
    font-size: 24px;
    font-weight: 400;
    color: #000;
    text-align: right;
  }
  &__des {
    font-size: 24px;
    font-weight: 400;
    color: #868686;
    text-align: right;
    max-width: 500px;
  }
  &__img {
    object-fit: cover;
  }
}
@media screen and (max-width: 1730px) {
  .card {
    &__menu {
      max-width: 520px;
      transform: translateX(30px);
    }
  }
}
@media screen and (max-width: 1560px) {
  .card {
    &__menu {
      max-width: 520px;
      transform: translateX(0px);
    }
  }
}
@media screen and (max-width: 1440px) {
  .card {
    &__menu {
      max-width: 450px;
      transform: translateX(0px);
    }
  }
}
@media screen and (max-width: 1140px) {
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
    &__menu {
      max-width: auto;
      transform: translateX(0px);
      width: 100%;
    }
    &__title {
      font-size: 68px;
      margin-bottom: 30px;
      text-align: center;
    }
    &__info {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    &__des {
      font-size: 20px;
      text-align: center;
      max-width: 500px;
    }
    &__img {
      margin-top: 20px;
    }
  }
}
</style>
