<script setup lang="ts">
import { onMounted } from "vue";
import { useFlowStore } from "~/stores/flow";
import Spinner from "../icons/Spinner.vue";

const flowStore = useFlowStore();

onMounted(() => {
  // We actually dont need this loader
  // but a lil wait time increases perceived value
  // (see the Effort Heuristic)
  setTimeout(() => {
    flowStore.next();
  }, 2000);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div class="flex gap-8 flex-col">
      <h1 class="text-4xl font-bold">Hold tight...</h1>
      <p>
        We’re busy cooking up your new <br />
        <span class="font-bold">personal income statement</span>
      </p>
      <div class="mx-auto">
        <Spinner />
      </div>
    </div>
  </div>
</template>
