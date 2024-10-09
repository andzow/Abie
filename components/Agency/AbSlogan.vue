<template>
    <section class="slogan">
        <div class="slogan__container">
            <div class="slogan__position">
                <p class="slogan__info" :style="{ marginRight: `${storage.indentRight}px` }">( —от церковно-славянский) тотчас, сразу, немедля</p>
            </div>
            <h2 class="slogan__text">Наш логотип — простейшая фигура треугольника. абие — это  старорусское слово означающее вовлеченность и приступление к действию тотчас. острый треугольник означает стрелку из часов.</h2>
        </div>
        <svg width="390" height="900" class="slogan__logo" :class="{'slogan__logo_active': arrowActive && !storage.preloadActive}" viewBox="0 0 29 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.62691e-05 41.5996L21.8855 0.744262L28.7634 6.14704L1.62691e-05 41.5996Z" fill="#000"/>
        </svg>
    </section>
</template>

<script setup lang='ts'>
const storage = useStorageStore();
let arrowActive: Ref<boolean> = ref(false)

const startAnimation = ():void => {
    setTimeout(() => {
        arrowActive.value = true
    })
}

onMounted(():void => {
    startAnimation()
})
</script>

<style scoped lang="scss">
.slogan {
    padding-top: 400px;
    position: relative;
    overflow: hidden;

    &__logo {
        position: absolute;
        top: 0;
        right: -5%;
        transform-origin: center center; /* Устанавливаем центр вращения */
        transform: rotate(-90deg);
        transition: transform 2s linear;
    }

    &__logo_active {
        transform: rotate(0deg);
    }

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__position {
        display: flex;
        justify-content: flex-end;
    }

    &__info {
        text-align: right;
        max-width: 174px;
        font-size: 24px;
    }

    &__text {
        font-size: 80px;
        max-width: 1050px;
        margin-top: 100px;
    }
}
</style>