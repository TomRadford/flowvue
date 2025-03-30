<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  // TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "reka-ui";
// import { inject } from "vue";

defineProps<{ collisionBoundary?: Element }>();

// const portalTarget = inject<string | undefined>("portalTarget") ?? "body";
</script>

<template>
  <!-- ToDo mobile alternative for tooltip -->
  <TooltipProvider :delay-duration="0">
    <TooltipRoot>
      <TooltipTrigger class="w-full inline-block truncate">
        <slot name="trigger" />
      </TooltipTrigger>
      <!-- Disabled Teleport since it seems to have issues with web components -->
      <!-- <TooltipPortal defer :to="portalTarget"> -->
      <TooltipContent
        class="z-10 select-none rounded-md bg-black/10 backdrop-blur-3xl px-[15px] py-[10px] text-sm leading-none shadow-sm border border-white"
        :side-offset="5"
        :collision-boundary="collisionBoundary"
      >
        <slot name="content" />
        <TooltipArrow
          class="fill-white stroke-gray-200"
          :width="12"
          :height="6"
        />
      </TooltipContent>
      <!-- </TooltipPortal> -->
    </TooltipRoot>
  </TooltipProvider>
</template>
