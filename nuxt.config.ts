import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  // Disable #components imports so
  // web component build doesnt break
  components: false,
  imports: {
    autoImport: false,
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@pinia/nuxt"],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: "flowvue 💰", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
