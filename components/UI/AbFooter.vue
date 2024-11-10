<template>
    <footer class="footer">
        <div class="footer__container">
            <img class="footer__logo" src="/UI/logo.svg" alt="">
            <div class="footer__position">
                <img class="footer__logo_mobile" src="/UI/logo.svg" alt="">
                <h2 class="footer__title">абие</h2>
            </div>
            <div class="footer__buttons">
                <button class="footer__btn footer__btn_white">ВК</button>
                <button class="footer__btn footer__btn_white">Написать в Telegram</button>
                <button class="footer__btn footer__btn_black" @click="Сompletion">Заполнить краткий бриф</button>
            </div>
        </div>
    </footer>
</template>

<script setup lang='ts'>
const storage = useStorageStore()

function Сompletion() {
    document.body.style.overflow = 'hidden';
    storage.isBrief = true
}
</script>

<style scoped lang="scss">
.footer {
    padding: 30px 0;
    width: 100%;
    background: var(--white);
    border-top: 1px solid #DADADA;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__title {
        font-size: 80px;
    }

    &__btn {
        line-height: 20px;
        font-size: 22px;
        border: 1px solid var(--black);
        padding: 20px 40px;
        transition: all .3s ease;
    }

    &__btn:nth-child(2) {
        border-left: none;
    }

    &__btn_black {
        color: var(--white);
        background: var(--black);
    }

    &__btn_white:hover {
        background: var(--black);
        color: var(--white);
    }

    &__logo_mobile {
        display: none;
        margin-right: 10px;
    }

    &__position {
        display: flex;
        align-items: center;
    }

    @media (max-width: 1140px) {
        &__logo_mobile {
            display: block;
        }

        &__logo {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        &__container {
            flex-direction: column;
        }

        &__buttons {
            display: flex;
            flex-direction: column;
            margin-top: 15px;
        }

        &__btn:nth-child(2) {
            border: 1px solid var(--black);
            border-top: none;
        }
    }
}
</style>