<script setup>
const props = defineProps({
    name: { type: String, default: ''},
    text: { type: String, default: ''},
    slogan: { type: String, default: ''},
    image: { type: String, default: ''},
    imageHref: { type: String, default: ''},
    href: { type: String, default: ''},
    video: { type: String, default: ''},
})
</script>

<template>
    <div class="info__item">
        <div class="info__position">
            <h3 class="info__name">{{ props.name }}</h3>
            <p class="info__text">{{ props.text }}</p>
        </div>
        <p v-if="props.slogan" class="info__description" v-html="props.slogan"></p>
        <img v-if="props.image" class="info__image"  :src="props.image" alt="">
        <a class="info__href" v-if="props.href" :href="props.href" target="_blank">
            <img class="info__img" :src="props.imageHref" alt="">
            <svg class="info__svg" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H62V63" stroke="black"/>
                <path d="M62 1L2 61" stroke="black"/>
            </svg>
        </a>
        <video
            v-if="props.video"
            class="info__video"
            type="video/mp4"
            autoplay
            muted
            loop
            preload="metadata"
            playsinline
        >
            <source :src="props.video" />
        </video>
    </div>
</template>

<style scoped lang="scss">
.info {
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
        margin-right: 20px;
    }

    &__name {
        font-size: 80px;
        margin-bottom: 40px;
    }

    &__text {
        width: 520px;
        font-size: 24px;
        text-align: right;
    }

    &__description {
        text-align: right;
        color: #868686;
        font-size: 24px;
    }

    &__href {
        position: relative;
    }

    &__img {
        transition: all .3s ease;
    }

    &__img:hover {
        transform: scale(1.02);
    }

    &__svg {
        position: absolute;
        bottom: 0;
        right: calc(100% + 10px);
    }

    &__video {
        max-width: 600px;
    }

    @media(max-width: 1400px) {
        &__position {
            margin-left: 0px;
        }
    }

    @media(max-width: 1240px) {
        &__name {
            font-size: 60px;
            margin-bottom: 30px;
        }

        &__text {
            font-size: 22px;
        }

        &__image {
            max-width: 400px;
        }

        &__video {
            max-width: 400px;
        }
    }

    @media(max-width: 998px) {
        &__item {
            flex-direction: column;
            align-items: flex-start !important;
            padding-top: 40px !important;
        }

        &__image {
            max-width: none;
            width: 100%;
            margin-top: 20px;
        }

        &__video {
            max-width: none;
            width: 100%;
            margin-top: 20px;
        }

        &__description {
            text-align: left;
            font-size: 22px;
            margin-top: 20px;
            width: auto;
        }

        &__position {
            margin-right: 0px;
            align-items: flex-start;
        }

        &__text {
            text-align: left;
            width: auto;
        }

        &__img {
            margin-top: 20px;
        }

        &__svg {
            display: none;
        }
    }

    @media(max-width: 600px) {
        &__text {
            font-size: 18px;
        }
        
        &__description {
            font-size: 18px;
        }

        &__name {
            font-size: 48px;
            margin-bottom: 30px;
        }
    }
}
</style>