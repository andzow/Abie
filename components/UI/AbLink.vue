<template>
    <div class="link">
        <div class="link__line" :class="position">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        position: String ,
    }
}
</script>

<style scoped>

.link {
    position: relative;
}

.link__line::before {
    content: '';
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 0;
    height: 2px;
    background-color: var(--black);
    transition: all 0.4s ease;
}
.left::before {
    left: 0;
    transform: translateX(0);
}

.link__line:hover::before {
    width: 100%;
    height: 2px;
}
</style>