// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/style/main.css"],
  plugins: ["~/plugins/v-auto-animate.js"],
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/UI/logo.svg",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
