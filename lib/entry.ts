import { defineCustomElement } from "vue";
import FlowVue from "../components/FlowVue.vue";
// Import the CSS as a string
import mainCssText from "../assets/css/main.css?inline";

// Convert Vue component to custom element
const CustomComponentElement = defineCustomElement(FlowVue, {
  shadowRoot: true,
  // Since FlowVue doesn't import our tailwind main.css,
  // we add it here, which inserts the all the styles as an inline
  // <style> tag to the shadow root - which allows them to be scoped to this component.
  styles: [mainCssText, ...(FlowVue.styles || [])],
});

// Register the custom element
customElements.define("flow-vue", CustomComponentElement);

// Create a function to initialize the component with a target element ID
window.initCustomComponent = (targetId: string = "my-flow-vue") => {
  const targetEl = document.getElementById(targetId);
  if (!targetEl) {
    console.error(`Target element with ID "${targetId}" not found`);
    return;
  }

  // Since we can't use Nuxt fonts here,
  // just load the Inter font from google
  // using a link element
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";
  document.head.appendChild(fontLink);

  // Create a new instance and mount it
  const customEl = document.createElement("flow-vue");
  targetEl.appendChild(customEl);
};

// Auto-initialize when the script loads if the target element exists
window.addEventListener("DOMContentLoaded", () => {
  window.initCustomComponent();
});

// Add types to window
declare global {
  interface Window {
    initCustomComponent: (targetId?: string) => void;
  }
}
