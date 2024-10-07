<template>
    <Transition>
        <div class="preload" v-if="storage.preloadActive"></div>
    </Transition>
</template>

<script setup lang='ts'>
const storage = useStorageStore()
</script>

<style scoped lang="scss">
.preload {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background: var(--white);
    cursor: auto;
    opacity: 1;

    &__active {
        opacity: 0;
    }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>