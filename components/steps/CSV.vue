<script setup lang="ts">
import { useFlowStore } from "~/stores/flow";
import DropZone from "../ui/DropZone.vue";
import { parse } from "@vanillaes/csv";

const flowStore = useFlowStore();

const processCsv = async (file: File) => {
  const csvString = await file.text();
  const csv = parse(csvString);
  console.log(csv);
};
</script>

<template>
  <div class="flex gap-8 flex-col h-full justify-center p-8">
    <h1 class="text-4xl font-bold">Drop that CSV 🫳</h1>

    <p>
      You’re moments away from getting a tasty
      <span class="font-bold">personal income statement</span>
    </p>
    <div class="flex flex-col gap-2">
      <p class="font-extralight text-xs text-right pr-4">
        Download an
        <a href="/examples/flowvue-example.csv" class="font-bold"> example</a>
      </p>
      <DropZone @file-selected="processCsv" />
    </div>
    <div class="">
      <p class="text-center text-sm font-light">
        Your money secrets are safe with us 🤫
      </p>
    </div>
  </div>
</template>
