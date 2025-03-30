import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref } from "vue";
import type {
  ExpenseCategory,
  IncomeCategory,
  Transaction,
} from "../types/transactions";

/**
 * Our transactions live here 🏠
 *
 * @todo sync them with API 😎
 */
export const useTransactionsStore = defineStore("transaction", () => {
  const transactions = ref<Transaction[]>([]);

  const income = computed(() =>
    transactions.value.filter((t) => t.type === "income")
  );

  const expenses = computed(() =>
    transactions.value.filter((t) => t.type === "expense")
  );

  const incomeTotal = computed(() =>
    income.value.reduce((acc, t) => acc + t.amount, 0)
  );

  const expensesTotal = computed(() =>
    expenses.value.reduce((acc, t) => acc + t.amount, 0)
  );

  const incomeCategories = computed(() =>
    income.value.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<IncomeCategory, number>)
  );

  const expenseCategories = computed(() =>
    expenses.value.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {} as Record<ExpenseCategory, number>)
  );

  const netIncome = computed(() => incomeTotal.value - expensesTotal.value);

  return {
    transactions,
    expenses,
    income,
    incomeTotal,
    expensesTotal,
    incomeCategories,
    expenseCategories,
    netIncome,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useTransactionsStore, import.meta.hot)
  );
}
