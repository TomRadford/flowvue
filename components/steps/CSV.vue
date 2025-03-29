<script setup lang="ts">
import { useFlowStore } from "~/stores/flow";
import DropZone from "../ui/DropZone.vue";
import { parse } from "@vanillaes/csv";
import type { Transaction } from "~/types/transactions";
import { useTransactionsStore } from "~/stores/transaction";

const flowStore = useFlowStore();
const transactionsStore = useTransactionsStore();

const processCsv = async (file: File) => {
  const csvString = await file.text();
  const csv: string[][] = parse(csvString);

  // Skip over any additional metadata in the file
  // (Some banks, like FNB, add account info to the top of the file)
  // We're happy as long as there are date, amount and description columns 🤓
  const headerRowIndex = csv.findIndex(
    (row) =>
      row.some((cell) => cell.trim().toLowerCase() === "date") &&
      row.some((cell) => cell.trim().toLowerCase() === "amount") &&
      row.some((cell) => cell.trim().toLowerCase() === "description")
  );

  if (headerRowIndex === -1) {
    // ToDo: add nicer client ui alert
    alert("Could not find a header row in your CSV, please try again");
    return;
  }

  const dateCellIndex = csv[headerRowIndex].findIndex(
    (cell) => cell.trim().toLowerCase() === "date"
  );
  const amountCellIndex = csv[headerRowIndex].findIndex(
    (cell) => cell.trim().toLowerCase() === "amount"
  );
  const descriptionCellIndex = csv[headerRowIndex].findIndex(
    (cell) => cell.trim().toLowerCase() === "description"
  );

  const transactions: Transaction[] = [];

  for (let i = headerRowIndex + 1; i < csv.length; i++) {
    const row = csv[i];

    const date = row[dateCellIndex].trim();
    const amountString = row[amountCellIndex].trim();
    const description = row[descriptionCellIndex]
      .trim()
      // Replace long spaces with newline
      .replace(/\s{2,}/g, "\n");

    // Skip the row if any of the required cells are empty
    if (!date || !amountString || !description) continue;

    const amount = parseFloat(amountString.replace(/\s+/g, ""));

    if (isNaN(amount)) continue;

    const type = amount >= 0 ? "income" : "expense";

    const transaction: Transaction = {
      date,
      amount: Math.abs(amount),
      description,
      ...(type === "expense"
        ? {
            type: "expense",
            category: "other_expenses",
          }
        : { type: "income", category: "other_income" }),
    };

    transactions.push(transaction);
  }

  transactionsStore.transactions = transactions;
  flowStore.next();
};
</script>

<template>
  <div class="flex gap-8 flex-col h-full justify-center p-8">
    <h1 class="text-4xl font-bold">Drop that CSV 🫳</h1>

    <p>
      You're moments away from getting a tasty
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
