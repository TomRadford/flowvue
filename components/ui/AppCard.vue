<script setup lang="ts">
import { BG_COLORS } from "~/constants/color";
import type { Color } from "~/types/colors";

// Instead of using Tailwind classes for positioning, we'll use style bindings
const positions = {
  "bottom-right": { top: "calc(100% - 500px)", left: "75%" },
  "bottom-left": { top: "calc(100% - 500px)", left: "0%" },
  "top-right": { top: "0%", left: "75%" },
  "top-left": { top: "0%", left: "0%" },
};

export type Position = keyof typeof positions;

withDefaults(
  defineProps<{
    color?: Color;
    position?: Position;
    id?: string;
    className?: string;
  }>(),
  { color: "green", position: "bottom-right", id: "app-card", className: "" }
);
</script>

<template>
  <div
    :id="id"
    class="w-full p-2 sm:p-10 relative flex justify-center items-center h-[700px] sm:w-[700px] sm:h-[800px] overflow-hidden bg-black sm:rounded-3xl"
    :class="className"
  >
    <div class="w-full h-full z-10">
      <slot />
    </div>
    <div
      class="absolute w-[500px] h-[500px] duration-500 blur-[300px] z-0 transition-all"
      :class="[BG_COLORS[color]]"
      :style="positions[position]"
    />
  </div>
</template>
