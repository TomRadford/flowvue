<script setup lang="ts">
import { useFlowStore } from "~/stores/flow";
import Button from "../ui/Button.vue";

const flowStore = useFlowStore();
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <span class="text-8xl animate-wiggle mb-8">👋</span>
    <div class="flex gap-8 flex-col">
      <h1 class="text-4xl font-bold">Finance pit stop?</h1>
      <p>Get your income breakdown, pain-free.</p>
      <Button label="Import statement 📈" @click="flowStore.next()" />
    </div>
  </div>
</template>
