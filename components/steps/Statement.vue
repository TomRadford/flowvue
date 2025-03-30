<script setup lang="ts">
import { useTransactionsStore } from "~/stores/transaction";
import { computed } from "vue";
import TotalCard from "../breakdown/TotalCard.vue";
import CategoryBreakdown from "../breakdown/CategoryBreakdown.vue";
const transactionStore = useTransactionsStore();

/**
 * Smart date formatter that shows concise date range
 * based on the provided transaction dates
 */
const dateRange = computed(() => {
  if (transactionStore.transactions.length === 0) {
    return "";
  }

  // Sort transactions by date
  const sortedTransactions = [...transactionStore.transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const firstDate = new Date(sortedTransactions[0].date);
  const lastDate = new Date(
    sortedTransactions[sortedTransactions.length - 1].date
  );

  const firstDay = firstDate.getDate();
  const firstMonth = firstDate.toLocaleString("default", { month: "short" });
  const firstYear = firstDate.getFullYear();

  const lastDay = lastDate.getDate();
  const lastMonth = lastDate.toLocaleString("default", { month: "short" });
  const lastYear = lastDate.getFullYear();

  // Same month and year
  if (firstMonth === lastMonth && firstYear === lastYear) {
    return `${firstDay}-${lastDay} ${firstMonth} ${firstYear}`;
  }

  // Same year but different months
  if (firstYear === lastYear) {
    return `${firstDay} ${firstMonth} - ${lastDay} ${lastMonth} ${firstYear}`;
  }

  // Different years
  return `${firstDay} ${firstMonth} ${firstYear} - ${lastDay} ${lastMonth} ${lastYear}`;
});

const message = computed(() => {
  if (transactionStore.netIncome > 5000) {
    return "You're killing it! 🔥";
  }

  if (transactionStore.netIncome > 2000) {
    return "Lookin' good 💰";
  }

  if (transactionStore.netIncome > 300) {
    return "You're doing great! Keep it up 💪";
  }

  return "You've got this! 🫂";
});
</script>

<template>
  <div class="flex flex-col py-16 h-full overflow-auto">
    <div class="flex gap-8 flex-col">
      <span class="">
        <h1 class="text-4xl font-bold">Personal Income</h1>
        <h1 class="text-4xl font-bold">
          Statement
          <span v-if="dateRange" class="text-sm font-extralight">
            {{ dateRange }}
          </span>
        </h1>
      </span>
      <p>{{ message }}</p>
    </div>
    <div class="mt-10 flex flex-col sm:gap-10 gap-3">
      <div class="flex gap-3 sm:gap-3 flex-wrap">
        <TotalCard
          label="Total Income"
          :amount="transactionStore.incomeTotal"
          color="green"
        />
        <TotalCard
          label="Total Expenses"
          :amount="transactionStore.expensesTotal"
          color="orange"
        />
        <TotalCard
          label="Net Income"
          :amount="transactionStore.netIncome"
          color="blue"
        />
      </div>
      <CategoryBreakdown
        label="Income breakdown"
        :total="transactionStore.incomeTotal"
        :category-totals="transactionStore.incomeCategories"
        type="income"
      />
      <CategoryBreakdown
        label="Expenses breakdown"
        :total="transactionStore.expensesTotal"
        :category-totals="transactionStore.expenseCategories"
        type="expenses"
      />
    </div>
  </div>
</template>
