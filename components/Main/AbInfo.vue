<template>
    <section class="info" data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-offset="-200">
        <div class="info__container">
            <div class="info__position">
                <NuxtLink class="info__image" to="/projects/Budni">
                    <img class="info__img" src="/Main/coffee.webp" alt="">
                    <p class="info__option">упаковка</p>
                </NuxtLink>
            </div>
            <div class="info__content">
                <NuxtLink to="/projects/Budni" class="info__title" :style="{ marginRight: `${storage.indentRight}px` }">budni cofe</NuxtLink>
                <p class="info__description" :style="{ marginRight: `${storage.indentRight}px` }">Упаковка, редизайн, серия</p>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
const storage = useStorageStore()
</script>

<style scoped lang="scss">
.info {
    margin-top: 100px;

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__position {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__img {
        transition: all .3s ease;
    }

    &__image {
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }

    &__image:hover &__img {
        transform: scale(1.06);
    }

    &__option {
        position: absolute;
        top: 30px;
        right: 30px;
        text-align: right;
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

    @media(max-width: 1150px) {
        &__title {
            margin-right: 0 !important;
        }
        &__description {
            margin-right: 0 !important;
        }
    }

    @media(max-width: 700px) {
        &__option {
            top: 20px;
            right: 20px;
        }
    }
}
@media(max-width: 700px) {
    .info {
        margin-top: 20px;
    }
}
</style>