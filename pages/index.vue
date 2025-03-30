<script setup lang="ts">
import FlowVue from "~/components/FlowVue.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-6 justify-center pt-36">
    <h1 class="text-3xl font-bold">flowvue</h1>
    <p class="text-lg font-light">
      A simple personal income statement generator 💰
    </p>
    <FlowVue />
    <NuxtLink class="font-semibold hover:underline" to="/install"
      >Add to my site 🛫</NuxtLink
    >
  </div>
</template>
