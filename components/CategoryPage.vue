<script setup lang="ts">
import { useTransactionsStore } from "../stores/transaction";

import Button from "./ui/Button.vue";
import { useFlowStore } from "../stores/flow";
import { formatZAR } from "../utils/currency";
import Tooltip from "./ui/Tooltip.vue";
import { useTemplateRef, computed, ref } from "vue";
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "~/constants/categories";
import Select from "./ui/Select.vue";

const props = defineProps<{ type: "income" | "expense" }>();

const listContainer = useTemplateRef("list-container");
const sort = ref<"asc" | "desc">("asc");

// We pass down the container as soon as its ready
// this for the tooltip to render in the correct place
const safeListContainer = computed(
  () => listContainer.value as Element | undefined
);

const flowStore = useFlowStore();
const transactionsStore = useTransactionsStore();

const displayTransactions = computed(() => {
  const transactions =
    props.type === "income"
      ? transactionsStore.income
      : transactionsStore.expenses;
  // We spread the array to avoid mutating the original
  return [...transactions].sort((a, b) => {
    if (sort.value === "asc") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });
});

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
            <th scope="col">
              <button
                class="cursor-pointer"
                @click="() => (sort = sort === 'asc' ? 'desc' : 'asc')"
              >
                Date
                <span class="text-xs">
                  {{ sort === "desc" ? "↑" : "↓" }}
                </span>
              </button>
            </th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody ref="list-container">
          <tr
            v-for="transaction in displayTransactions"
            :key="transaction.date + transaction.description"
            :class="rowStyle"
            class="my-2 py-3 even:bg-white/10 transition-all rounded-xl"
          >
            <td class="my-auto">{{ transaction.date }}</td>
            <td class="my-auto">{{ formatZAR(transaction.amount) }}</td>
            <td class="overflow-hidden my-auto">
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
            <td>
              <Select
                v-model="transaction.category"
                label="Category"
                :options="
                  type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES
                "
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto flex gap-2 mt-auto">
      <Button label="Prev" @click="flowStore.prev()" />
      <Button label="Next" @click="flowStore.next()" />
    </div>
  </div>
</template>
