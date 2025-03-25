<script setup lang="ts">
import { useFlowStore } from "~/stores/flow";
import AppCard from "./ui/AppCard.vue";

/**
 * FlowVue entry point ✨
 *
 * Used in Nuxt and Web Component 😎
 *
 **/

const flowStore = useFlowStore();
</script>

<template>
  <AppCard
    :color="flowStore.currentStep.backgroundColor"
    :position="flowStore.currentStep.backgroundPosition"
  >
    <component :is="flowStore.currentStep.component" />
  </AppCard>
</template>

<style scoped>
div {
  font-family: Inter, sans-serif;
  color: var(--color-white);
}
</style>
