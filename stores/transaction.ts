import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref, watchEffect } from "vue";
import type { Transaction } from "../types/transactions";

/**
 * Our transactions live here 🏠
 *
 * @todo sync them with API 😎
 */
export const useTransactionsStore = defineStore("transaction", () => {
  const transactions = ref<Transaction[]>([]);

  watchEffect(() => console.log(transactions.value));

  const income = computed(() =>
    transactions.value.filter((t) => t.type === "income")
  );

  const expenses = computed(() =>
    transactions.value.filter((t) => t.type === "expense")
  );

  return { transactions, expenses, income };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useTransactionsStore, import.meta.hot)
  );
}
