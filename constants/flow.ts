import { defineAsyncComponent } from "vue";
import LoaderPage from "../components/LoaderPage.vue";

const createComponentWithLoader = (
  // bit of a type hack - to say its a promise that resolve a module import
  importFn: () => Promise<typeof import("../components/FlowVue.vue")>
) =>
  defineAsyncComponent({
    loader: importFn,
    // ToDo: Seems like this only works with web component
    // build. it's probably something I'm misunderstanding
    // with how Nuxt handles dynamic imports
    loadingComponent: LoaderPage,
  });

export const FLOW_COMPONENTS = {
  welcome: createComponentWithLoader(
    () => import("../components/steps/Welcome.vue")
  ),
  csv: createComponentWithLoader(() => import("../components/steps/CSV.vue")),
  income: createComponentWithLoader(
    () => import("../components/steps/Income.vue")
  ),
  expenses: createComponentWithLoader(
    () => import("../components/steps/Expenses.vue")
  ),
  anticipator: createComponentWithLoader(
    () => import("../components/steps/Anticipator.vue")
  ),
  statement: createComponentWithLoader(
    () => import("../components/steps/Statement.vue")
  ),
};
