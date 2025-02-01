<template>
  <section class="main">
    <div class="main__container">
        <div class="main__posotion">
            <p class="main__text" :style="{ marginRight: `${storage.indentRight}px` }">Aктивируем процессы создаём смыслы.</p>
        </div>
        <NuxtLink to="/projects/MyStories" class="main__content">
            <video class="main__video" type="video/mp4" autoplay muted loop preload="metadata" playsinline>
                <source src="/Main/myStories.mp4" />
            </video>
            <img class="main__logo" src="/Main/logo.svg" alt="">
            <p class="main__option">автоматизация бизнеса</p>
        </NuxtLink>
        <div class="main__posotion">
            <NuxtLink to="/projects/MyStories" class="main__title" :style="{ marginRight: `${storage.indentRight}px` }">My stories</NuxtLink>
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
        height: 100%;
        display: inline-block;
    }

    &__logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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

    @media (max-width: 1374px) {
        &__title {
            margin-right: 0 !important;
        }
        
        &__description {
            margin-right: 0 !important;
        }
    }

    @media (max-width: 900px) {
        &__option {
            top: 20px;
            right: 20px;
        }

        &__logo {
            width: 200px;
        }
    }
}
@media (max-width: 900px) {
    .main {
        padding-top: 250px;
    }
}
</style>