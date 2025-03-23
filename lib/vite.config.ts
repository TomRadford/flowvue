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
        inlineDynamicImports: true,
      },
    },
    // ToDo this should be a github release
    outDir: "dist/lib",
    emptyOutDir: true,
    cssCodeSplit: false,
    cssMinify: true,
  },
  resolve: {
    alias: {
      // Add any aliases needed for your component
    },
  },
});
