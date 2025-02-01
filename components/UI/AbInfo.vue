<script setup>
const props = defineProps({
    info: { type: Array, default: []}
})
</script>

<template>
    <section class="info">
        <div class="info__container">
            <UIAbBlock 
                v-for="item in props.info" 
                :key="item.name"
                :name="item.name"
                :text="item.text"
                :slogan="item?.slogan"
                :image="item?.image"
                :imageHref="item?.imageHref"
                :href="item?.href"
                :video="item?.video"/>
        </div>
    </section>
</template>

<style scoped lang="scss">
.info {
    padding-bottom: 100px;
    
    &__container {
        max-width: 1760px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 100px;
    }

    &__position {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: 130px;
    }

    &__name {
        font-size: 80px;
        margin-bottom: 40px;
    }

    &__text {
        max-width: 520px;
        font-size: 24px;
        text-align: right;
    }

    &__description {
        text-align: right;
        color: #868686;
        font-size: 24px;
    }
}
</style>