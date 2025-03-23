import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

/**
 * This is the config for building out `flow-vue` web component ✨
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
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      // Add any aliases needed for your component
    },
  },
});
