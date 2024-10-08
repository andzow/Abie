<script setup></script>

<template>
  <div class="card">
    <div class="card__content">
      <h2 class="card__title">
        Почему важно создать уникальный бренд для интернет-магазина?
      </h2>
      <ul class="card__ul">
        <li class="card__li">уникальный бренд,</li>
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
  &__ul {
    position: relative;
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
  &__li {
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }
  &:hover {
    background: #f5f5f5;
  }
}
</style>
