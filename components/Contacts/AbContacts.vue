<template>
    <section class="contacts" data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-offset="-200">
        <div class="contacts__container">
            <div class="contacts__position">
                <h2 class="contacts__title">Сделаем мир красивее вместе?</h2>
                <video class="contacts__video" type="video/mp4" autoplay muted loop playsinline>
                    <source :src="'/Contacts/contact.mp4'" />
                </video>
            </div>
            <div class="contacts__position contacts__position_steps">
                <div class="contacts__block">
                    <p class="contacts__description">Для связи по проектам:</p>
                    <a class="contacts__name"><UIAbLink>почта</UIAbLink></a>
                </div>
                <div class="contacts__block">
                    <a class="contacts__name"><UIAbLink>telegram</UIAbLink></a>
                    <a class="contacts__name"><UIAbLink>vk</UIAbLink></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="scss">
.contacts {
    padding-top: 400px;
    padding-bottom: 100px;

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__position {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    &__position_steps {
        margin-top: 100px;
        align-items: flex-end;
    }
    
    &__video {
        max-width: 600px;
    }

    &__title {
        font-size: 80px;
        max-width: 756px;
    }

    &__text {
        font-size: 24px;
        color: #868686;
        text-align: right;
    }

    &__description {
        font-size: 24px;
        max-width: 520px;
        text-align: right;
    }

    &__name {
        font-size: 24px;
        text-align: right;
        cursor: pointer;
    }

    &__block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    @media (max-width: 1140px) {
        &__position {
            flex-direction: column;
        }
        &__video {
            max-width: none;
            width: 100%;
        }
    }
    @media(max-width: 900px) {
        &__title {
            font-size: 50px;
            margin-bottom: 60px;
        }
    }
}

@media(max-width: 900px) {
    .contacts {
        padding-top: 250px;
    }
}
</style>