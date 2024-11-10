<script setup>
import { MaskInput } from "vue-3-mask";
import sendApplication from "~/services/api/telegram/sendApplication";
const storage = useStorageStore()

let branch = ref([
    "Медицина",
    "Horeca",
    "Ритейл",
    "В2В и В2С товары и услуги",
    "IT"
])

let task = ref([
    "Брэндинг",
    "Упаковка",
    "Сайт",
    "Полиграфия",
    "Анимация"
])

let budget = ref([
    "50 000 — 100 000",
    "100 000 — 200 000",
    "200 000 — 300 000",
    "300 000 — 400 000",
    "400 000 +"
])

const order = ref({
    name: '',
    branch: '',
    task: '',
    taskInfo: '',
    budget: '',
    about: {
        name: '',
        number: '',
        nameCompany: '',
        mail: ''
    }
})

let isActive = ref(false)
let isReady= ref(true)
let isError = ref('')

function Сompletion() {
    document.body.style.overflow = 'visible';
    storage.isBrief = false
}

function checkValid() {
    isReady.value = true

    const fieldsToCheck = [
        'name', 
        'branch', 
        'task', 
        'taskInfo', 
        'budget', 
        'about.name', 
        'about.number', 
        'about.nameCompany', 
        'about.mail'
    ];

    for (const field of fieldsToCheck) {
        const value = field.includes('.') ? order.value.about[field.split('.')[1]] : order.value[field];
        if (field === 'about.number') {
            if (value.length !== 18) {
                isReady.value = false;
                isError.value = field;
                return;
            }
        } else {
            if (value.length === 0) {
                isReady.value = false;
                isError.value = field;
                return;
            }       
        }
    }  
    isError.value = '';
}

async function sendData() {
    checkValid()

    if(isReady.value) {
        sendApplication(order.value)
        clearData()
        Сompletion()
    }
}

function clearData() {
    order.value = {
        name: '',
        branch: '',
        task: '',
        taskInfo: '',
        budget: '',
        about: {
            name: '',
            number: '',
            nameCompany: '',
            mail: ''
        }
    }
}
</script>

<template>
    <Transition>
        <section class="brief" v-if="storage.isBrief">
            <div class="brief__container">
                <div class="brief__position">
                    <div class="brief__header">
                        <div class="brief__info">
                            <img src="/UI/logo.svg" alt="">
                            <h2 class="brief__title">бриф</h2>
                        </div>
                        <p class="brief__description">Расскажите нам о вас<br> и вашем проекте</p>
                    </div>
                    <form class="brief__body" @submit.prevent="sendData">
                        <div class="brief__content">
                            <h3 class="brief__name" :class="{'brief__name_error': isError === 'name'}">Название</h3>
                            <input class="brief__input" type="text" placeholder="Название" v-model="order.name" @input="checkValid">
                        </div>

                        <div class="brief__content">
                            <h3 class="brief__name" :class="{'brief__name_error': isError === 'branch'}">Отрасль</h3>
                            <div class="brief__grid">
                                <p 
                                    class="brief__item" 
                                    :class="['brief__item' + '_' + index, {'brief__item_active': item === order.branch}]" 
                                    v-for="(item, index) in branch" :key="index"
                                    @click="order.branch = item, checkValid()">
                                    {{ item }}
                                </p>
                            </div>
                        </div>

                        <div class="brief__content">
                            <h3 class="brief__name" :class="{'brief__name_error': isError === 'task'}">Задача</h3>
                            <div class="brief__grid">
                                <p 
                                    class="brief__item"
                                    :class="['brief__item' + '_' + index, {'brief__item_active': item === order.task}]" 
                                    v-for="(item, index) in task" :key="index"
                                    @click="order.task = item, checkValid()">
                                    {{ item }}
                                </p>
                            </div>
                        </div>

                        <div class="brief__content">
                            <h3 class="brief__name" :class="{'brief__name_error': isError === 'taskInfo'}">Опишите задачу</h3>
                            <input class="brief__input" type="text" placeholder="Мне нужно разработать.." v-model="order.taskInfo" @input="checkValid">
                        </div>

                        <div class="brief__content">
                            <h3 class="brief__name" :class="{'brief__name_error': isError === 'budget'}">бюджет проекта</h3>
                            <div class="brief__grid">
                                <p 
                                    class="brief__item"
                                    :class="['brief__item' + '_' + index, {'brief__item_active': item === order.budget}]" 
                                    v-for="(item, index) in budget" :key="index"
                                    @click="order.budget = item, checkValid()">
                                    {{ item }}
                                </p>
                            </div>
                        </div>

                        <div class="brief__content">
                            <h3 
                                class="brief__name" 
                                :class="{'brief__name_error': isError === 'about.name' || isError === 'about.number' || isError === 'about.nameCompany' || isError === 'about.mail'}">
                                Информация о вас
                            </h3>
                            <div class="brief__grid_about">
                                <input class="brief__input" v-model="order.about.name" type="text" placeholder="Имя" @input="checkValid">
                                <MaskInput class="brief__input" v-model="order.about.number" mask="+7 (###) ### ## ##" placeholder="+ 7 (000) 000 00 00" @change="checkValid" />
                                <input class="brief__input" v-model="order.about.nameCompany" type="text" placeholder="Название компании" @input="checkValid">
                                <input class="brief__input" v-model="order.about.mail" type="text" placeholder="E-mail" @input="checkValid">
                            </div>
                        </div>

                        <div class="brief__switch">
                            <div class="brief__circle_big" @click="isActive = !isActive">
                                <div class="brief__circle_small" :class="{'brief__circle_active': isActive}"></div>
                            </div>
                            <p class="brief__text">Я согласен на персональную обработку данных</p>
                        </div>

                        <button class="brief__btn" :class="{'brief__btn_active': isActive}" >Отправить</button>
                    </form>
                    <img class="brief__close" src="/UI/close.svg" @click="Сompletion" alt="">
                </div>
            </div>
        </section>
    </Transition>
</template>

<style scoped lang="scss">
.brief {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background: rgba($color: #000000, $alpha: .2);
    width: 100vw;
    overflow-y: auto;
    padding: 100px 0;

    &__container {
        max-width: 1760px;
        padding: 0 20px;
        margin: 0 auto;
    }

    &__position {
        width: 100%;
        background: #fff;
        padding: 35px 60px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        overflow-y: auto;
    }

    &__close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        transition: all .3s ease;
    }

    &__close:hover {
        transform: scale(1.06);
    }

    &__header {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 100px;
    }

    &__info {
        display: flex;
        align-items: center;
        margin-bottom: 135px;
    }

    &__title {
        margin-left: 20.8333vw;
        font-size: 80px;
    }
    
    &__content:not(:last-child) {
        margin-bottom: 40px;
    }

    &__description {
        max-width: 135px;
        text-align: right;
        font-size: 24px;
    }

    &__body {
        width: 100%;
    }

    &__name {
        text-transform: uppercase;
        font-size: 24px;
        margin-bottom: 20px;
        transition: all .3s ease;
    }

    &__name_error {
        color: #e62727;
    }

    &__input {
        padding: 20px 25px;
        border: 1px solid var(--black);
        width: 100%;
        font-size: 20px;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border: 1px solid var(--black);
        grid-template-areas: 
        "block_0 block_1 block_2 block_3 block_4";
    }

    &__item {
        padding: 20px 25px;
        width: 100%;
        font-size: 20px;
        text-align: center;
        transition: all .3s ease;
        cursor: pointer;
    }

    &__item:hover {
        background: var(--black);
        color: var(--white);
    }

    &__item:not(:last-child) {
        border-right: 1px solid var(--black);
    }

    &__item_active {
        background: var(--black) !important;
        color: var(--white) !important;
    }

    &__item_0 {
        grid-area: block_0;
    }

    &__item_1 {
        grid-area: block_1;
    }

    &__item_2 {
        grid-area: block_2;
    }

    &__item_3 {
        grid-area: block_3;
    }

    &__item_4 {
        grid-area: block_4;
    }

    &__grid_about {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        border: none;
    }

    &__switch {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
    }

    &__circle_big {
        width: 40px;
        min-width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--black);
        cursor: pointer;
    }

    &__circle_small {
        width: 20px;
        height: 20px;
        background: var(--black);
        border-radius: 50%;
        transform: scale(0);
        transition: all .3s ease;
    }

    &__circle_active {
        transform: scale(1);
    }

    &__text {
        margin-left: 20px;
        font-size: 22px;
    }

    &__btn {
        padding: 20px 0;
        width: 100%;
        background: #ccc;
        font-size: 24px;
        color: var(--white);
        cursor: not-allowed;
        transition: all .3s ease;
        pointer-events: none;
    }

    &__btn_active {
        background: var(--black);
        cursor: pointer;
        pointer-events: auto;
    }

    @media(max-width: 1574px) {
        &__item {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas: 
            "block_0 block_1 block_2 block_3"
            "block_4 block_4 block_4 block_4";
        }

        &__item_3 {
            border-right: none !important;
        }

        &__item_4 {
            border-top: 1px solid var(--black);
        }
    }

    @media(max-width: 1250px) {
        &__grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
            "block_0 block_1"
            "block_2 block_3"
            "block_4 block_4";
        }

        &__item_1 {
            border-right: none !important;
        }

        &__item_0,
        &__item_1 {
            border-bottom: 1px solid var(--black);
        }
    }

    @media(max-width: 650px) {
        &__grid {
            grid-template-columns: repeat(1, 1fr);
            grid-template-areas:
            "block_0"
            "block_1"
            "block_2"
            "block_3"
            "block_4";
        }

        &__item_0,
        &__item_2 {
            border-right: none !important;
        }

        &__item_2 {
            border-bottom: 1px solid var(--black);
        }

        &__position {
        padding: 20px 30px;
        }

        &__item:hover {
            background: var(--white);
            color: var(--black);
        }

        &__grid_about {
            grid-template-columns: repeat(1, 1fr);
        }

        &__text  {
            font-size: 18px;
        }

        &__title {
            margin-left: 20px;
            font-size: 60px;
        }
    }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>