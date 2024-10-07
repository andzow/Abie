<template>
  <section class="main">
    <div class="main__container">
        <div class="main__posotion">
            <p class="main__text" :style="{ marginRight: `${storage.indentRight}px` }">Aктивируем процессы создаём смыслы.</p>
        </div>
        <div class="main__content">
            <video class="main__video" type="video/mp4" autoplay muted loop preload="metadata" playsinline>
                <source src="/Main/myStories.mp4" />
            </video>
            <p class="main__option">автоматизация бизнеса</p>
        </div>
        <div class="main__posotion">
            <h2 class="main__title" :style="{ marginRight: `${storage.indentRight}px` }">My stories</h2>
            <p class="main__description" :style="{ marginRight: `${storage.indentRight}px` }">Интернет-магазин, админ-панель, интеграция AMO SRM, Почта России и СДЕК</p>
        </div>
    </div>
  </section>
</template>

<script setup lang=ts>
const storage = useStorageStore()
</script>

<style scoped lang="scss">
.main {
    padding-top: 400px;

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__posotion {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    &__text {
        font-size: 24px;
        max-width: 135px;
        text-align: right;
    }

    &__content {
        margin-top: 40px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    &__content:hover &__video {
        transform: scale(1.06);
    }

    &__option {
        position: absolute;
        top: 30px;
        right: 30px;
        color: var(--white);
        max-width: 135px;
        text-align: right;
    }

    &__video {
        width: 100%;
        transition: all .3s ease;
    }

    &__title {
        margin-top: 25px;
        font-size: 24px;
        border-bottom: 2px solid var(--black);
        cursor: pointer;
    }

    &__description {
        font-size: 24px;
        max-width: 485px;
        text-align: right;
    }
}
</style>