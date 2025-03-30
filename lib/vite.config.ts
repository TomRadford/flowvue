import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

/**
 * This is the config for building the `flow-vue` web component ✨
 */
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Enable web components support
          isCustomElement: (tag: string) => tag.includes("-"),
        },
      },
      customElement: true,
    }),
    // Add the Tailwind v4 plugin directly
    tailwindcss(),
  ],
  define: {
    // Fix for "process is not defined" error
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "entry.ts"),
      name: "FlowVue",
      fileName: "flow-vue",
      formats: ["es"],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    // ToDo this could make sense as a github release that triggers npm publish
    // (which can then be imported by UNPKG cdn in a script tag)
    outDir: "public/dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    cssMinify: true,
  },
  resolve: {
    alias: {
      // Match Nuxt import alias
      "~": resolve(__dirname, "../"),
    },
  },
});
