<script setup lang="ts">
import { capitalize } from "vue";
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "~/constants/categories";
import type { ExpenseCategory, IncomeCategory } from "~/types/transactions";
import { formatZAR } from "~/utils/currency";

defineProps<{
  categoryTotals:
    | Record<IncomeCategory, number>
    | Record<ExpenseCategory, number>;
  total: number;
  type: "income" | "expenses";
}>();

const rowStyle = "grid grid-cols-3 gap-3 text-sm text-left font-light";
</script>

<template>
  <div
    class="bg-[#313131]/40 backdrop-blur-2xl rounded-lg flex flex-col gap-1 py-4 px-5"
  >
    <h4 class="text-sm mb-3 mt-1">{{ capitalize(type) }} breakdown</h4>
    <div class="px-2">
      <table class="w-full">
        <thead class="sticky top-0">
          <tr :class="rowStyle">
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">% of total</th>
          </tr>
        </thead>
        <tbody ref="list-container">
          <tr
            v-for="(value, name) in categoryTotals"
            :key="name"
            :class="rowStyle"
            class="py-3 rounded-xl even:bg-white/10"
          >
            <td>
              {{
                (type === "expenses" ? EXPENSE_CATEGORIES : INCOME_CATEGORIES)[
                  name
                ]
              }}
            </td>
            <td>{{ formatZAR(value) }}</td>
            <td>{{ ((value / total) * 100).toFixed(2) }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
