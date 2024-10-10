<template>
  <header class="header" :class="{'header__special': headerActive}">
    <div class="header__container">
        <svg width="29" height="42" class="header__logo" viewBox="0 0 29 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="header__path" :class="{'header__path_active': logoActive}" d="M1.62691e-05 41.5996L21.8855 0.744262L28.7634 6.14704L1.62691e-05 41.5996Z" fill="#BBB"/>
        </svg>
        <div class="header__block">
            <svg width="29" height="42" class="header__logo header__logo_mobile" viewBox="0 0 29 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="header__path" :class="{'header__path_active': logoActive}" d="M1.62691e-05 41.5996L21.8855 0.744262L28.7634 6.14704L1.62691e-05 41.5996Z" fill="#BBB"/>
            </svg>
            <h1 class="header__title" :class="{'header__title_active': tilteActive}" @click="goHome">абие</h1>
        </div>
        <nav class="header__nav" :class="{'header__nav_active': navActive}">
            <NuxtLink to="/agency" class="header__item">
                <UIAbLink>агенство</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/projects" class="header__item">
                <UIAbLink>проекты</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/services" class="header__item">
                <UIAbLink>услуги</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/contacts" class="header__item">
                <UIAbLink>контакты</UIAbLink>
            </NuxtLink>
            <NuxtLink to="/blog" class="header__item">
                <UIAbLink>блог</UIAbLink>
            </NuxtLink>
        </nav>
        <div class="header__menu" :class="{'header__menu_active': menuActive}" @click="menuActive = !menuActive">
            <div class="header__line"></div>
            <div class="header__line header__line_last"></div>
        </div>
    </div>
    <Transition>
        <div class="header__position" v-if="menuActive">
        <NuxtLink to="/agency" class="header__page" @click="menuActive = fasle">
            агенство
        </NuxtLink>
        <NuxtLink to="/projects" class="header__page" @click="menuActive = fasle">
            проекты
        </NuxtLink>
        <NuxtLink to="/services" class="header__page" @click="menuActive = fasle">
            услуги
        </NuxtLink>
        <NuxtLink to="/contacts" class="header__page" @click="menuActive = fasle">
            контакты
        </NuxtLink>
        <NuxtLink to="/blog" class="header__page" @click="menuActive = fasle">
            блог
        </NuxtLink>
    </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const storage = useStorageStore()
const router = useRouter()

let header:HTMLElement | null = null
let lastScrollY:number = 0;
let logoActive:Ref<boolean> = ref(false);
let tilteActive:Ref<boolean> = ref(false);
let navActive:Ref<boolean> = ref(false);
let menuActive: Ref<boolean> = ref(false)
let headerActive: Ref<boolean> = ref(false)

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

const goHome = ():void => {
    router.push('/')
    menuActive.value = false
}

const checkWidth = ():void => {
    if (window.innerWidth <= 740) {
        headerActive.value = true
        window.removeEventListener('scroll', animationHeader);
    }
}

onMounted(() => {
    animationPreload()
    header = document.querySelector('.header') as HTMLElement | null;
    window.addEventListener('scroll', animationHeader);
    checkWidth()
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

    &__special {
        overflow: visible;
    }

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

    &__block {
        display: flex;
        align-items: center;
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
        cursor: pointer;
    }

    &__title:hover {
        transform: scale(1.03);
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

    &__logo_mobile {
        display: none;
        margin-right: 10px;
    }

    &__menu {
        display: none;
        height: 40px;
        width: 40px;
        border: 2px solid var(--black);
        position: relative;
        transition: all .3s ease;
    }

    &__menu_active {
        background: var(--black);
    }

    &__menu_active &__line {
        background: var(--white);
    }

    &__menu_active &__line:nth-child(1) {
        transform-origin: center center; 
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &__menu_active &__line:nth-child(2) {
        transform-origin: center center; 
        transform: translate(-50%, -50%) rotate(45deg);
    }
        
    &__line {
        position: absolute;
        background: var(--black);
        height: 2px;
        width: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -150%);
        transition: all .3s ease;
    }

    &__line_last {
        transform: translate(-50%, 150%);
    }

    &__position {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 106px);
        background: var(--white);
    }

    &__page {
        font-size: 32px;
    }

    &__page:not(:last-child) {
        margin-bottom: 10px;
    }

    @media(max-width: 1140px) {
        &__logo {
            display: none;
        }
        &__item:not(:last-child) {
            margin-right: 30px;
        }
        &__logo_mobile {
            display: block;
        }
    }

    @media(max-width: 900px) {
        &__title {
            font-size: 60px;
        }
        &__logo_mobile {
            width: 25px;
            height: 37px;
        }
    }

    @media(max-width: 740px) {
        &__nav {
            display: none;
        }

        &__menu {
            display: block;
        }
    }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>