<template>
    <section class="additionally">
        <div class="additionally__container">
            <div class="additionally__position">
                <h3 class="additionally__text">Видим, слышим, говорим и чувствуем, а главное – передаем это проектами.</h3>
                <p class="additionally__info">Мы создаём магию уникальных решений и концепций для бизнеса, совмещаем креативные идеи и стратегическое мышление. </p>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="scss">
.additionally {
    padding-top: 300px;
    padding-bottom: 100px;

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__position {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    &__info {
        text-align: right;
        max-width: 506px;
        font-size: 24px;
    }

    &__text {
        font-size: 80px;
        max-width: 920px;
    }

    @media (max-width: 900px) {
        &__text {
            font-size: 50px;
            margin-bottom: 60px;
        }

        &__position {
            flex-direction: column;
        }
    }
}
@media (max-width: 900px) {
    .additionally {
        padding-top: 100px;
    }
}
</style>