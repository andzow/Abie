<script setup>
import projectsArr from "~/public/json/projects.json";

const arrProjects = ref(projectsArr);
const { params } = useRoute();
const project = computed(() => {
  return projectsArr.find(el => el.route === "/" + params.id);
});

const filteredProjects = computed(() => {
  return arrProjects.value
    .filter(el => project.value.route !== el.route)
    .filter((_, idx) => idx < 2);
});
</script>

<template>
  <section class="main">
    <div class="main__content">
      <div class="main__banner">
        <img :src="project['back-photo']" />
      </div>
      <div class="main__task">
        <PortfolioIdAdCard
          v-for="item in project.arrTask"
          :key="item.name"
          :item="item"
        />
      </div>
      <div class="main__media">
        <img :src="project['media-photo']" />
      </div>
      <div class="main__news">
        <PortfolioIdAdCard
          v-for="item in project.arrNews"
          :key="item.name"
          :item="item"
        />
      </div>
      <div class="main__photos">
        <div
          class="main__photos_item"
          v-for="item in project.arrPhotos"
          :key="item"
        >
          <img :src="item" />
        </div>
      </div>
      <div class="main__brandbook">
        <PortfolioIdAdCard
          v-for="item in project.arrBrandbook"
          :key="item.name"
          :item="item"
        />
      </div>
      <div class="main__images">
        <div
          class="main__images_item"
          v-for="item in project.arrImages"
          :key="item"
        >
          <img :src="item" />
        </div>
      </div>
      <div class="main__cards">
        <PortfolioAbCard
          v-for="item in filteredProjects"
          :key="item.name"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main {
  padding-top: 170px;
  margin-bottom: 250px;

  &__content {
    max-width: 1740px;
    margin: 0 auto;
    padding: 0 20px;
  }
  &__banner {
    height: calc(100vh - 190px);
    margin-bottom: 100px;
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  &__media {
    margin-bottom: 110px;
  }
  &__photos {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-bottom: 120px;
  }
  &__images {
    display: flex;
    justify-content: space-between;
    margin-bottom: 130px;
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 120px;
    padding-top: 45px;
    border-top: 1px solid #dadada;
  }
}
@media screen and (max-width: 1730px) {
  .main {
    &__task {
      &_menu {
        max-width: 520px;
        transform: translateX(0px);
      }
    }
  }
}
@media screen and (max-width: 1151px) {
  .main {
    &__cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
  }
}
@media screen and (max-width: 1100px) {
  .main {
    padding-top: 140px;
    margin-bottom: 200px;

    &__banner {
      height: calc(100vh - 160px);
    }
  }
}
@media screen and (max-width: 787px) {
  .main {
    &__cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 40px;
    }
  }
}
@media screen and (max-width: 550px) {
  .main {
    &__photos {
      flex-direction: column;
    }
    &__images {
      display: flex;
      flex-direction: column;
      row-gap: 25px;
    }
  }
}
</style>
