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
    // Completely disable auto-imports
    imports: [],
    autoImport: false,
    dirs: [],
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@pinia/nuxt"],
  nitro: {
    routeRules: {
      // Allow CORS for our lib 🤝
      "/dist/**": {
        cors: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "Content-Type,Authorization",
        },
      },
    },
  },
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
