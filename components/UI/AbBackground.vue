<script setup>
const props = defineProps ({
    video: { type: String, default: ""},
    photo: { type: String, default: ""},
    padding: { type: Boolean, default: false},
    width: { type: Boolean, default: false},
})

function start() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

onMounted(() => {
    start()
})
</script>

<template>
    <section class="background" :class="{'background__padding': props.padding}">
        <div class="background__container" :class="{'background__container_width': props.width}">
            <video
                v-if="props.video"
                class="background__video"
                type="video/mp4"
                autoplay
                muted
                loop
                preload="metadata"
                playsinline
            >
                <source :src="props.video" />
            </video>
            <img class="background__img" v-if="props.photo" :src="props.photo" alt="">
        </div>
    </section>
</template>

<style scoped lang="scss">
.background {

    &__container {
        max-width: 1760px;
        margin: 0 auto;
        padding: 0 20px;
        height: calc(var(--vh, 1vh) * 100 - 200px);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__container_width {
        max-width: 100%;
        padding: 0px;
        height: 100%;
    }

    &__padding {
        padding-top: 200px;
    }

    &__video {
        width: 100%; 
        height: 100%;
        object-fit: cover;
    }

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>