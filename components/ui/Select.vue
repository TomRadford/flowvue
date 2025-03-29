<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  //   SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "reka-ui";
// import { inject } from "vue";

type SelectOption = string;

const selectOption = defineModel<SelectOption>();

defineProps<{
  options: Record<string, string>;
  label: string;
}>();

// const portalTarget = inject<string | undefined>("portalTarget") ?? "body";
</script>

<!-- ToDo add proper icons instead of emojis -->
<template>
  <SelectRoot v-model="selectOption">
    <SelectTrigger
      class="inline-flex items-center justify-between rounded-lg px-[15px] text-xs leading-none h-[35px] gap-[5px] focus:bg-white/10 hover:bg-white/10 border cursor-pointer shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
      aria-label="Customise options"
    >
      <SelectValue placeholder="Select an option" />

      ↓
    </SelectTrigger>
    <!-- Disabled Teleport since it seems to have issues with web components -->
    <!-- <SelectPortal defer :to="portalTarget"> -->
    <SelectContent
      class="min-w-[160px] bg-black/10 backdrop-blur-2xl rounded-lg border shadow-sm will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
      :side-offset="5"
    >
      <SelectScrollUpButton
        class="flex items-center justify-center h-[25px] cursor-default"
      >
        ↑
      </SelectScrollUpButton>

      <SelectViewport class="p-[5px]">
        <SelectLabel class="px-[25px] text-xs font-extralight leading-[25px]">
          {{ label }}
        </SelectLabel>
        <SelectGroup>
          <SelectItem
            v-for="(value, name) in options"
            :key="value"
            class="text-xs leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-white/50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-white/30 data-[highlighted]:text-green1"
            :value="name"
          >
            <SelectItemIndicator
              class="absolute left-0 w-[25px] inline-flex items-center justify-center"
            >
              ✓
            </SelectItemIndicator>
            <SelectItemText> {{ value }} </SelectItemText>
          </SelectItem>
        </SelectGroup>
      </SelectViewport>

      <SelectScrollDownButton
        class="flex items-center justify-center h-[25px] cursor-default"
      >
        ↓
      </SelectScrollDownButton>
    </SelectContent>
    <!-- </SelectPortal> -->
  </SelectRoot>
</template>
