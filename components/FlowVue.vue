<script setup lang="ts">
// FlowVue entry point
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div
    class="w-full p-10 relative flex justify-center items-center h-[500px] sm:w-[700px] sm:h-[800px] overflow-hidden bg-black rounded-3xl"
  >
    <div class="flex flex-col items-center justify-center z-10">
      <span class="text-8xl animate-wiggle mb-8">👋</span>
      <div class="flex gap-8 flex-col">
        <h1 class="text-4xl font-bold">Finance pit stop?</h1>
        <p>Get your income breakdown, pain-free.</p>
      </div>
    </div>
    <div
      class="absolute bottom-0 w-[500px] h-[500px] -right-1/4 bg-green blur-[300px] z-0"
    />
  </div>
</template>

<style scoped>
div {
  font-family: Inter, sans-serif;
  color: var(--color-white);
}
</style>
