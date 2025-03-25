import { defineStore } from "pinia";
import {
  computed,
  defineAsyncComponent,
  markRaw,
  ref,
  type Component,
} from "vue";
import type { Color, Position } from "../components/ui/AppCard.vue";

type FlowStep = {
  component: Component;
  backgroundColor: Color;
  backgroundPosition: Position;
};

/**
 * Our Flow 'router' 🤓
 *
 * Allows us to navigate through the application with ease 💆
 */
export const useFlowStore = defineStore("flow", () => {
  const steps = ref<FlowStep[]>([
    {
      component: markRaw(
        defineAsyncComponent(() => import("../components/steps/Welcome.vue"))
      ),
      backgroundColor: "green",
      backgroundPosition: "bottom-right",
    },
    {
      component: markRaw(
        defineAsyncComponent(() => import("../components/steps/CSV.vue"))
      ),
      backgroundColor: "green",
      backgroundPosition: "bottom-left",
    },
  ]);
  const currentStepIndex = ref(0);

  const currentStep = computed(() => steps.value[currentStepIndex.value]);

  const next = () => {
    if (currentStepIndex.value + 1 < steps.value.length) {
      currentStepIndex.value++;
    }
  };

  const prev = () => {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--;
    }
  };

  return { currentStep, next, prev };
});
