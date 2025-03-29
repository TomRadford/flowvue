import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Color, Position } from "../components/ui/AppCard.vue";
import type { FLOW_COMPONENTS } from "../constants/flow";

type FlowStep = {
  // We cant store the actual component here
  // since a function isn't string serialisable 🤔
  componentId: keyof typeof FLOW_COMPONENTS;
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
      componentId: "welcome",
      backgroundColor: "green",
      backgroundPosition: "bottom-right",
    },
    {
      componentId: "csv",
      backgroundColor: "green",
      backgroundPosition: "bottom-left",
    },
    {
      componentId: "income",
      backgroundColor: "purple",
      backgroundPosition: "bottom-right",
    },
    {
      componentId: "expenses",
      backgroundColor: "orange",
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

  return { steps, currentStepIndex, currentStep, next, prev };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFlowStore, import.meta.hot));
}
