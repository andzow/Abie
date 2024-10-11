<template>
    <section class="error">
        <div class="error__container">
            <div class="error__position">
                <p class="error__text" :style="{ marginRight: `${storage.indentRight}px` }">Эта страница пока в разработке</p>
                <button class="error__btn" @click="goHome" :style="{ marginRight: `${storage.indentRight}px` }">На главную</button>
                <img class="error__img" src="/Error/cat.png" alt="cat">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const storage = useStorageStore()
const router = useRouter()

const goHome = ():void => {
    router.push('/')
}
</script>

<style scoped lang="scss">
.error {
    height: 100vh;
    padding-top: 400px;

    &__container  {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__text {
        max-width: 130px;
        font-size: 24px;
        text-align: right;
    }

    &__btn {
        padding: 10px 40px 10px 80px;
        font-size: 24px;
        border: 1px solid var(--black);
        margin-top: 200px;
    }

    &__btn:hover {
        color: var(--white);
        background: var(--black);
    }

    &__position {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: relative;
    }

    &__img {
        position: absolute;
        right: 0;
        bottom: 0;
    }
}
</style>
