<script setup>
const props = defineProps({
  item: Object,
  modelValue: String,
});
</script>

<template>
  <div class="button" :class="['button' + (item.idx + 1)]">
    <button
      class="button__type"
      :class="{ activeButton: modelValue === item.type }"
      @click="$emit('update:modelValue', item.type)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.button {
  width: 100%;
  &__type {
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    color: #000;
    border: 1px solid #000;
    background: #fff;
    padding: 17px 20px;
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
      background: #000;
      color: #fff;
    }
  }
}
.activeButton {
  background: #000;
  color: #fff;
}

@media screen and (max-width: 1440px) {
  .button {
    &__type {
      font-size: 20px;
      padding: 15px 20px;
    }
  }
}
</style>
