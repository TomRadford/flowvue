import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  imports: {
    autoImport: false,
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts"],
  vite: { plugins: [tailwindcss()] },
});