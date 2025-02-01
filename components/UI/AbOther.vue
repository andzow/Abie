<script setup>
import projectsArr from "~/public/json/projects.json";

const props = defineProps({
    nameProject: { type: String}
})

const arrProjects = ref(projectsArr);

const filteredProjects = computed(() => {
    const filteredArray = arrProjects.value.filter(el => el.name !== props.nameProject);
    const shuffledArray = filteredArray.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, 2);
})
</script>

<template>
    <section class="other">
        <div class="other__line"></div>
        <div class="other__container">
            <div class="other__cards" v-auto-animate="{ duration: 300 }">
                <PortfolioAbCard
                    data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-offset="-200"
                    v-for="item in filteredProjects"
                    :key="item.name"
                    :item="item"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.other {
    padding-bottom: 40px;
    padding-top: 100px;

    &__line {
        border-top: 1px solid #DADADA;
        width: 100%;
        padding-bottom: 40px;
    }

    &__container {
        max-width: 1760px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 120px;
    }
}
@media screen and (max-width: 1151px) {
  .other {
    &__cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
  }
}
@media screen and (max-width: 787px) {
  .other {
    &__cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 40px;
    }
  }
}
</style>