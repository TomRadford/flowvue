import { defineAsyncComponent } from "vue";

export const FLOW_COMPONENTS = {
  welcome: defineAsyncComponent(
    () => import("../components/steps/Welcome.vue")
  ),
  csv: defineAsyncComponent(() => import("../components/steps/CSV.vue")),
};
