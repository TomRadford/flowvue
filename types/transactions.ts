import type {
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES,
} from "../constants/categories";

export type IncomeCategory = keyof typeof INCOME_CATEGORIES;
export type ExpenseCategory = keyof typeof EXPENSE_CATEGORIES;

type BaseTransaction = {
  date: string;
  amount: number;
  description: string;
};

export type IncomeTransaction = {
  type: "income";
  category: IncomeCategory;
} & BaseTransaction;

export type ExpenseTransaction = {
  type: "expense";
  category: ExpenseCategory;
} & BaseTransaction;

export type Transaction = IncomeTransaction | ExpenseTransaction;
