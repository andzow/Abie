<template>
  <header class="header">
    <div class="header__container">
        <svg width="29" height="42" class="header__logo" viewBox="0 0 29 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="header__path" :class="{'header__path_active': logoActive}" d="M1.62691e-05 41.5996L21.8855 0.744262L28.7634 6.14704L1.62691e-05 41.5996Z" fill="#BBB"/>
        </svg>
        <h1 class="header__title" :class="{'header__title_active': tilteActive}">абие</h1>
        <nav class="header__nav" :class="{'header__nav_active': navActive}">
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

<script setup lang="ts">
const storage = useStorageStore()

let header:HTMLElement | null = null
let lastScrollY:number = 0;
let logoActive:Ref<boolean> = ref(false);
let tilteActive:Ref<boolean> = ref(false);
let navActive:Ref<boolean> = ref(false);

const animationHeader = ():void => {
    const currentScrollY = window.scrollY;

    if (header) {
        if (currentScrollY > lastScrollY) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };

    lastScrollY = currentScrollY;
}

const animationPreload = ():void => {
    const body = document.body
    body.style.overflow = 'hidden';

    setTimeout(() => {
        tilteActive.value = true
    }, 1000)
    setTimeout(() => {
        logoActive.value = true
    }, 2000)
    setTimeout(() => {
        navActive.value = true
    }, 3000)
    setTimeout(() => {
        storage.preloadActive = false
        body.style.overflow = 'visible';
    }, 4000)
}

onMounted(() => {
    animationPreload()
    header = document.querySelector('.header') as HTMLElement | null;
    window.addEventListener('scroll', animationHeader);
});

onUnmounted(() => {
    window.removeEventListener('scroll', animationHeader);
});
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    width: 100vw;
    background: var(--white);
    z-index: 1000;
    max-height: 150px;
    transition: max-height .5s ease;
    overflow: hidden;

    &__active {
        max-height: 0px;
    }

    &__logo {
        transition: all .3s ease;
    }

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1740px;
        margin: 0 auto;
        padding: 20px 20px;
    }

    &__nav {
        display: flex;
        opacity: 0;
        transition: all .3s ease;
    }

    &__nav_active {
        opacity: 1;
    }

    &__title {
        font-size: 80px;
        color: #BBBBBB;
        transition: all .3s ease;
    }

    &__title_active {
        color: var(--black);
    }

    &__item {
        font-size: 20px;
    }

    &__item:not(:last-child) {
        margin-right: 70px;
    }

    &__path {
        transition: all .3s ease;
    }

    &__path_active {
        fill: var(--black);
    }
}
</style>