<script setup lang="ts">
import { useFlowStore } from "~/stores/flow";
import AppCard from "./ui/AppCard.vue";
import { FLOW_COMPONENTS } from "~/constants/flow";
// import { provide } from "vue";

/**
 * FlowVue entry point ✨
 *
 * Used in both Nuxt and Web Component 😎
 *
 **/

/**
 * Disabled Teleports since they seem to have issues with web components
 *
 * @todo fix this - left some notes/commented out providers in the code
 *
 * old comment (this didnt work the way I expected):
 * Set context to tell if we're in a web component or not
 * - useful for using our ui components with portals outside of this tree
 */
// provide("portalTarget", "#my-flow-vue");

const flowStore = useFlowStore();
</script>

<template>
  <AppCard
    id="my-flow-vue"
    :color="flowStore.currentStep.backgroundColor"
    :position="flowStore.currentStep.backgroundPosition"
    :class="
      flowStore.currentStep.componentId === 'statement' ? 'py-0 sm:py-0' : ''
    "
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
