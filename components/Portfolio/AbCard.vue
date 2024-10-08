<script setup>
const props = defineProps({
  item: Object,
});

function redirectLink() {
  if (!props.item?.link) {
    return;
  }
  const router = useRouter();
  window.open(props.item?.link, "_blank");
}
</script>

<template>
  <div class="card">
    <div class="card__content">
      <div class="card__image" @click="redirectLink">
        <img :src="item.imageSrc" />
      </div>
      <div class="card__menu">
        <div class="card__item">
          <h2
            class="card__name"
            :class="{ enableLink: item?.link }"
            @click="redirectLink"
          >
            {{ item.name }}
          </h2>
          <p class="card__des" v-html="item.des"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  &__image {
    position: relative;
    display: flex;
    margin-bottom: 23px;
    overflow: hidden;
    cursor: pointer;
    img {
      object-fit: cover;
      transition: all 0.6s ease;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
  &__menu {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  &__name {
    font-size: 24px;
    font-weight: 400;
    color: #000;
    text-align: right;
  }
  &__des {
    font-size: 24px;
    font-weight: 400;
    color: #000;
    text-align: right;
    max-width: 450px;
  }
}
.enableLink {
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 1440px) {
  .card {
    &__name {
      font-size: 20px;
    }
    &__des {
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 456px) {
  .card {
    &__image {
      position: relative;
      display: flex;
      margin-bottom: 23px;
      overflow: hidden;
      cursor: pointer;
      img {
        min-height: 400px;
        object-fit: cover;
        transition: all 0.6s ease;
      }
      &:hover img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
