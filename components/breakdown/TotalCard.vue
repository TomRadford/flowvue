<script setup lang="ts">
import { TEXT_COLORS } from "~/constants/color";
import type { Color } from "~/types/colors";
import { formatZAR } from "~/utils/currency";

defineProps<{ label: string; amount: number; color: Color }>();
</script>

<template>
  <div
    class="bg-[#313131]/40 backdrop-blur-2xl rounded-lg flex flex-col gap-1 py-4 px-5"
  >
    <h4 class="text-sm">{{ label }}</h4>
    <p class="text-xl font-semibold" :class="[TEXT_COLORS[color]]">
      {{ formatZAR(amount) }}
    </p>
  </div>
</template>
