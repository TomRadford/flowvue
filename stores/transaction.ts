import { acceptHMRUpdate, defineStore } from "pinia";
import { ref } from "vue";
import type { Transaction } from "../types/transactions";

/**
 * Our transactions live here 🏠
 *
 * @todo sync them with API 😎
 */
const useTransactionsStore = defineStore("transaction", () => {
  const transactions = ref<Transaction[]>([]);

  return { transactions };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useTransactionsStore, import.meta.hot)
  );
}
