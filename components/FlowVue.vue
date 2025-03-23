<script setup lang="ts">
// FlowVue entry point
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div>
    <button class="bg-purple p-5 rounded-2xl" @click="count++">
      {{ count }}
    </button>
  </div>
</template>

<style scoped>
div {
  font-family: Inter, sans-serif;
}
</style>
