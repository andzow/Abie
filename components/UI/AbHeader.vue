<template>
  <header class="header">
    <div class="header__container">
        <img src="/UI/logo.svg" alt="">
        <h1 class="header__title">абие</h1>
        <nav class="header__nav">
            <NuxtLink to="/" class="header__item">
                <UIAbLink>агенство</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/" class="header__item">
                <UIAbLink>проекты</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/" class="header__item">
                <UIAbLink>услуги</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/" class="header__item">
                <UIAbLink>контакты</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/" class="header__item">
                <UIAbLink>блог</UIAbLink>
            </NuxtLink>
        </nav>
    </div>
  </header>
</template>

<script>
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    padding: 35px 0;
    width: 100vw;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__nav {
        display: flex;
    }

    &__title {
        font-size: 80px;
    }

    &__item {
        font-size: 20px;
    }

    &__item:not(:last-child) {
        margin-right: 70px;
    }
}
</style>