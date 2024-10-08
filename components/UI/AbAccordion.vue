<template>
    <section class="accordion">
        <div class="accordion__container">
            <div class="accordion__position" :style="{ marginLeft: `${storage.indentLeft}px` }">
                <div class="accordion__content" v-for="(item, index) in infoData" :key="index">
                    <div class="accordion__header" @click="nextAccordion(index)">
                        <h3 class="accordion__title">{{ item.title }}</h3>
                        <img class="accordion__svg" src="/UI/logo.svg" :class="{'accordion__svg_active': item.isActive}" alt="">
                    </div>
                    <div class="accordion__main" :class="{'accordion__main_active': item.isActive, 'accordion__main_speps': item.class === 'steps'}">
                        <div class="accordion__block">
                            <p class="accordion__text" :class="{'accordion__speps': item.class === 'steps'}" v-for="(text, idx) in item.text" :key="idx">{{ text }}</p>
                            <p class="accordion__time" v-if="item.time">{{ item.time }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Transition>
            <span v-if="symbolActive" class="accordion__symbol" :class="{'accordion__symbol_b': symbol === 'б', 'accordion__symbol_speps': infoData[0].class === 'steps'}">
                {{ symbol }}
            </span>
        </Transition>
    </section>
</template>

<script setup lang='ts'>
import accordion from '~/public/json/accordion.json'
import steps from '~/public/json/steps.json'

const storage = useStorageStore()
const accordionData = ref(accordion)
const stepsData =  ref(steps)
let infoData: Ref<null | []> =  ref(null)
let prevIndex: Ref<null | number> = ref(null)
let symbol: Ref<string> = ref('а')
let symbolActive: Ref<boolean> = ref(true)
const route = useRoute()

const nextAccordion = (idx: number):void => {
    if(prevIndex.value === idx) {
        symbol.value = 'а'
        infoData.value[idx].isActive = false
        prevIndex.value = null
    } else if (prevIndex.value !== null) {
        symbol.value = infoData.value[idx].title[0]
        infoData.value[prevIndex.value].isActive = false
        infoData.value[idx].isActive = true
        prevIndex.value = idx
    } else {
        symbol.value = infoData.value[idx].title[0]
        infoData.value[idx].isActive = true
        prevIndex.value = idx
    }
    symbolActive.value = false
    setTimeout(() => {
        symbolActive.value = true
    })
}

const startAccordion = ():void => {
    if (route.name === 'index') {
        infoData = accordionData
    } else if (route.name === 'services') {
        infoData = stepsData
    }
}

watchEffect(():void  => {
  startAccordion()
})

onMounted(():void => {
    startAccordion()
})
</script>

<style scoped lang="scss">
.accordion {
    margin-top: 150px;
    padding-bottom: 100px;
    position: relative;

    &__container {
        max-width: 1740px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #DADADA;
        cursor: pointer;
    }
    
    &__title {
        font-size: 80px;
        text-transform: lowercase;
    }

    &__header:first-child {
        border-top: 1px solid #DADADA;
    }

    &__main {
        display: flex;
        justify-content: flex-end;
        max-height: 0;
        overflow: hidden;
        transition: all .5s ease-in-out;
    }

    &__main_speps {
        justify-content: flex-start;
    }

    &__main_active {
        max-height: 400px;
    }

    &__text {
        max-width: 520px;
        text-align: right;
        font-size: 24px;
    }

    &__time {
        font-size: 24px;
        color: #868686;
    }

    &__speps {
        text-align: left;
    }

    &__block {
        margin: 50px 0;
    }

    &__symbol {
        position: absolute;
        top: 0%;
        left: -80px;
        font-size: 900px;
        line-height: 500px;
    }

    &__symbol_speps {
        line-height: 800px;
    }

    &__symbol_b {
        line-height: 870px;
    }

    &__svg {
        transition: all .3s ease-in-out;
    }

    &__svg_active {
        transform: rotate(65deg);
    }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>