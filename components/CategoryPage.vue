<script setup lang="ts">
import { useTransactionsStore } from "../stores/transaction";

import Button from "./ui/Button.vue";
import { useFlowStore } from "../stores/flow";
import { formatZAR } from "../utils/currency";
import Tooltip from "./ui/Tooltip.vue";
import { useTemplateRef, computed } from "vue";

defineProps<{ type: "income" | "expense" }>();

const listContainer = useTemplateRef("list-container");

// We pass down the container as soon as its ready
const safeListContainer = computed(
  () => listContainer.value as Element | undefined
);

const flowStore = useFlowStore();
const transactionsStore = useTransactionsStore();

const rowStyle =
  "grid grid-cols-[100px_1fr_2fr_2fr] gap-3 text-sm text-center font-light";
</script>

<template>
  <div class="flex gap-8 flex-col h-full">
    <div class="justify-center px-8 pt-10 text-center">
      <h1 class="text-4xl font-bold">What the {{ type }}?!</h1>

      <p>
        Lets categorise
        {{ type === "income" ? "that income 🤓" : "your spending 😎" }}
      </p>
    </div>

    <div ref="tooltip-portal" class="w-full relative overflow-auto">
      <table class="w-full">
        <thead class="sticky top-0">
          <tr :class="rowStyle" class="backdrop-blur-md rounded-xl">
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody ref="list-container">
          <tr
            v-for="transaction in type === 'income'
              ? transactionsStore.income
              : transactionsStore.expenses"
            :key="transaction.description"
            :class="rowStyle"
            class="my-2 py-3 even:bg-white/10 transition-all"
          >
            <td>{{ transaction.date }}</td>
            <td>{{ formatZAR(transaction.amount) }}</td>
            <td class="overflow-hidden">
              <Tooltip :collision-boundary="safeListContainer">
                <template #trigger>
                  {{ transaction.description }}
                </template>
                <template #content>
                  <p class="whitespace-pre-wrap text-center">
                    {{ transaction.description }}
                  </p>
                </template>
              </Tooltip>
            </td>
            <td class="truncate">{{ transaction.category }}</td>
          </tr>
        </tbody>
        <!-- <tfoot>
          <tr>
            <th scope="row">Totals</th>
            <td>21,000</td>
          </tr>
        </tfoot> -->
      </table>
    </div>
    <div class="mx-auto flex gap-2 mt-auto">
      <Button label="Prev" @click="flowStore.prev()" />
      <Button label="Next" @click="flowStore.next()" />
    </div>
  </div>
</template>
