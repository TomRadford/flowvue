<script setup lang="ts">
const colors = {
  blue: "bg-blue",
  green: "bg-green",
  aqua: "bg-aqua",
  orange: "bg-orange",
  purple: "bg-purple",
};

// Instead of using Tailwind classes for positioning, we'll use style bindings
const positions = {
  "bottom-right": { bottom: "0px", left: "75%" },
  "bottom-left": { bottom: "0px", left: "0%" },
  "top-right": { top: "0px", left: "75%" },
  "top-left": { top: "0px", left: "0%" },
};

export type Color = keyof typeof colors;
export type Position = keyof typeof positions;

withDefaults(
  defineProps<{
    color?: Color;
    position?: Position;
  }>(),
  { color: "green", position: "bottom-right" }
);
</script>

<template>
  <div
    class="w-full p-2 sm:p-10 relative flex justify-center items-center h-[700px] sm:w-[700px] sm:h-[800px] overflow-hidden bg-black sm:rounded-3xl"
  >
    <div class="w-full h-full z-10">
      <slot />
    </div>
    <div
      class="absolute w-[500px] h-[500px] duration-500 blur-[300px] z-0 transition-all"
      :class="[colors[color]]"
      :style="positions[position]"
    />
  </div>
</template>
