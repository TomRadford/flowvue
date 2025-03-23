<script setup lang="ts">
// FlowVue entry point
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <button class="bg-purple p-5 rounded-2xl" @click="count++">
    {{ count }}
  </button>
</template>
