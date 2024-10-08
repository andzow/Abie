<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="card">
    <div class="card__content">
      <h2 class="card__title">
        {{ item.title }}
      </h2>
      <ul class="card__ul">
        <li class="card__li" v-for="(li, idx) in item.list" :key="idx">
          {{ li }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  padding: 10px 0;
  transition: all 0.4s ease;
  cursor: pointer;

  &__title {
    color: #000;
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 70px;
  }
  &__li {
    position: relative;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    margin-left: 10px;
    transform: translateX(15px);
    &::before {
      position: absolute;
      content: "";
      transform: translateY(-50%) translateX(-15px);
      top: 50%;
      width: 5px;
      height: 5px;
      background: #000;
      border-radius: 100%;
    }
  }
  &:hover {
    background: #f5f5f5;
  }
}
</style>
