<script setup lang="ts">
import { useFlowStore } from "~/stores/flow";
import AppCard from "./ui/AppCard.vue";
import { FLOW_COMPONENTS } from "~/constants/flow";

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
    <component :is="FLOW_COMPONENTS[flowStore.currentStep.componentId]" />
  </AppCard>
</template>

<style scoped>
div {
  font-family: Inter, sans-serif;
  color: var(--color-white);
}
</style>
