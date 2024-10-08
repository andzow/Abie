<script setup>
import projectsArr from "~/public/json/projects.json";

const setPortfolioServiceFirst = [
  {
    name: "Все",
    type: "",
  },
  {
    name: "Интернет-магазин",
    type: "e-commerce",
  },
  {
    name: "Стоматология",
    type: "dentistry",
  },
  {
    name: "Тильда",
    type: "tilda",
  },
  {
    name: "Брэндинг",
    type: "branding",
  },
];
const setPortfolioServiceSec = [
  {
    name: "Аналитика",
    type: "analytics",
  },
  {
    name: "Полиграфия",
    type: "printing",
  },
  {
    name: "Маркетплейсы",
    type: "marketplaces",
  },
  {
    name: "Сайт-визитка",
    type: "landing-page",
  },
  {
    name: "Упаковка",
    type: "packaging",
  },
];
const arrProjects = ref(projectsArr);

const activeFilter = ref("");

const filteredProjects = computed(() => {
  return arrProjects.value.filter(el => {
    if (activeFilter.value === "") {
      return el;
    }
    if (el.type.includes(activeFilter.value)) {
      return el;
    }
  });
});
</script>

<template>
  <section class="main">
    <div class="main__content">
      <div class="main__buttons">
        <div class="main__buttons_first">
          <PortfolioAbButton
            v-for="(item, idx) in setPortfolioServiceFirst"
            :key="idx"
            :item="{ ...item, idx }"
            v-model="activeFilter"
          />
        </div>
        <div class="main__buttons_sec">
          <PortfolioAbButton
            v-for="(item, idx) in setPortfolioServiceSec"
            :key="idx"
            :item="{ ...item, idx }"
            v-model="activeFilter"
          />
        </div>
        <div class="main__buttons_mob">
          <PortfolioAbButton
            v-for="(item, idx) in [
              ...setPortfolioServiceFirst,
              ...setPortfolioServiceSec,
            ]"
            :key="idx"
            :item="{ ...item, idx }"
            v-model="activeFilter"
          />
        </div>
      </div>
      <div class="main__cards" v-auto-animate="{ duration: 300 }">
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
  margin-bottom: 200px;

  &__content {
    max-width: 1740px;
    margin: 0 auto;
    padding: 0 20px;
  }
  &__buttons {
    margin-bottom: 60px;
    &_first {
      display: grid;
      grid-template-columns: 10% repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 10px;
    }
    &_sec {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      margin-bottom: 10px;
    }
    &_mob {
      display: none;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 120px;
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
@media screen and (max-width: 1010px) {
  .main {
    padding-top: 170px;
    margin-bottom: 200px;

    &__buttons {
      &_first {
        display: none;
      }
      &_sec {
        display: none;
      }
      &_mob {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
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
@media screen and (max-width: 457px) {
  .main {
    &__buttons {
      &_mob {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
      }
    }
  }
}
</style>
