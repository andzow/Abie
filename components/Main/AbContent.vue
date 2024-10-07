<template>
    <section class="content">
        <div class="content__container">
            <div class="content__position">
                <div class="content__item">
                    <div class="content__image">
                        <img class="content__img" src="/Main/colibri.webp" alt="">
                        <p class="content__option">Tilda</p>
                    </div>
                    <h2 class="content__title">Kolibri flowers</h2>
                    <p class="content__description">Tilda, интернет-магазин</p>
                </div>
                <div class="content__item">
                    <div class="content__video">
                        <video class="content__source" type="video/mp4" autoplay muted loop preload="metadata" playsinline>
                            <source src="/Main/kupala.mp4" />
                        </video>
                        <p class="content__option content__option_kupala">айдентика</p>
                    </div>
                    <h2 class="content__title">Купала</h2>
                    <p class="content__description content__description_kupala">Айдентика, гайдбук, промо ролик, полиграфия</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="scss">
.content {
    margin-top: 100px;

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__position {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__title {
        margin-top: 25px;
        text-align: right;
        font-size: 24px;
        border-bottom: 2px solid var(--black);
        cursor: pointer;
    }

    &__description {
        font-size: 24px;
        text-align: right;
    }

    &__description_kupala {
        max-width: 450px;
    }

    &__image {
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }

    &__option {
        position: absolute;
        top: 30px;
        right: 30px;
        color: var(--white);
        max-width: 135px;
        text-align: right;
    }

    &__option_kupala {
        top: auto;
        bottom: 30px;
    }

    &__img {
        transition: all .3s ease;
    }

    &__image:hover &__img{
        transform: scale(1.06);
    }

    &__video {
        max-width: 600px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }

    &__source {
        width: 100%;
        height: 100%;
        transition: all .6s ease;
        transform: scale(1.04);
    }

    &__video:hover &__source {
        transform: scale(1.1);
    }
}
</style>