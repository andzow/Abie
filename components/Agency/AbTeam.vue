<template>
    <section class="team">
        <div class="team__container">
            <div class="team__position">
                <h3 class="team__title" :style="{ marginRight: `${storage.indentRight}px` }">наша команда</h3>
            </div>
            <div class="team__grid">
                <div class="team__item" v-for="person in teamData" :key="person.name">
                    <div class="team__image">
                        <img class="team__svg" :src=person.image alt="">
                    </div>
                    <h4 class="team__name">{{ person.title }}</h4>
                    <p class="team__description">{{ person.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import team from '~/public/json/team.json'

const teamData: Ref<team[]> = ref(team)
const storage = useStorageStore()
let strokeActive: Ref<boolean> = ref(false)

</script>

<style scoped lang="scss">
.team {
    padding-top: 140px;

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__position {
        display: flex;
        justify-content: flex-end;
    }

    &__title {
        max-width: 135px;
        font-size: 24px;
        text-align: right;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 40px;
        margin-top: 80px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__image {
        border: 1px solid var(--black);
        padding: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
    }

    &__name {
        font-size: 80px;
        margin-top: 20px;
    }

    &__description {
        max-width: 320px;
        font-size: 24px;
        text-align: right;
    }

    &__svg {
        stroke-dasharray: 751.2; /* Периметр окружности */
        stroke-dashoffset: 751.2; /* Полное смещение */
        transition: stroke-dashoffset 2s ease;
    }
}
</style>