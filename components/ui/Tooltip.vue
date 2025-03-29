<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "reka-ui";

defineProps<{ collisionBoundary?: Element }>();
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <TooltipRoot>
      <TooltipTrigger class="w-full inline-block truncate">
        <slot name="trigger" />
      </TooltipTrigger>
      <!-- ToDo portal to parent instead of body -->
      <TooltipPortal>
        <TooltipContent
          class="z-10 select-none rounded-md bg-black/10 backdrop-blur-3xl px-[15px] py-[10px] text-sm leading-none shadow-sm border"
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
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
