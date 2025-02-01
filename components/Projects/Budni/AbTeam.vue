<script setup lang='ts'>
const team = ref([
    {
        name: "айтишник",
        text: "у него квадратная голова и серьга - код"
    },
    {
        name: "диджей",
        text: "это главный атрибуд - наушники"
    },
    {
        name: "фотограф",
        text: "закрыт один глаз, так обычно делают когда фотографируют на пленку"
    },
    {
        name: "дизайнер",
        text: "поломанный взгляд который пытается выверить пиксель"
    },
    {
        name: "креатор",
        text: "усы, это отсылка к садвадору дали, одному из самых креативных людей"
    },
    {
        name: "блогер",
        text: "темные очки которые он надевает, чтобы защищаться от толпы фанатов, но когда его не узнают он их сам сдвигает"
    },
])
</script>

<template>
    <section class="team">
        <div class="team__container">
            <div class="team__grid">
                <div class="team__item" v-for="item in team" :key="item.name">
                    <h4 class="team__name">{{ item.name }}</h4>
                    <p class="team__text">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.team {
    margin-top: 100px;
    margin-bottom: 100px;

    &__container {
        max-width: 1760px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 200px;
        row-gap: 100px;
    }

    &__item {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    &__name {
        font-size: 48px;
        margin-right: 20px;
    }

    &__text {
        font-size: 28px;
        max-width: 400px;
    }

    @media(max-width: 1500px) {
        &__grid {
            column-gap: 100px;
            row-gap: 60px;
        }
    }

    @media(max-width: 1200px) {
        &__grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media(max-width: 700px) {
        margin-top: 60px;
        margin-bottom: 60px;

        &__item {
            flex-direction: column;
            align-items: flex-start;
        }

        &__grid {
            row-gap: 30px;
        }

        &__text {
            font-size: 22px;
        }
    }
}
</style>