<script setup lang="ts">
import { useFlowStore } from "~/stores/flow";
import AppCard from "./ui/AppCard.vue";
import { FLOW_COMPONENTS } from "~/constants/flow";

/**
 * FlowVue entry point ✨
 *
 * Used in both Nuxt and Web Component 😎
 *
 **/

const flowStore = useFlowStore();
</script>

<template>
  <AppCard
    :color="flowStore.currentStep.backgroundColor"
    :position="flowStore.currentStep.backgroundPosition"
  >
    <Transition name="fade" mode="out-in">
      <component
        :is="FLOW_COMPONENTS[flowStore.currentStep.componentId]"
        :key="flowStore.currentStep.componentId"
      />
    </Transition>
  </AppCard>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

div {
  font-family: Inter, sans-serif;
  color: var(--color-white);
}
</style>
