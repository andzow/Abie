<template>
    <section class="info">
        <div class="info__container">
            <div class="info__position">
                <div class="info__image">
                    <img class="info__img" src="/Main/medols.webp" alt="">
                    <p class="info__option">сайт стоматологии на коде</p>
                </div>
            </div>
            <div class="info__content">
                <h2 class="info__title" :style="{ marginRight: `${storage.indentRight}px` }">Медолс</h2>
                <p class="info__description" :style="{ marginRight: `${storage.indentRight}px` }">Сайт стоматологии,<br> соблюдение норм МИНЗДРАВА</p>
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
        color: var(--white);
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