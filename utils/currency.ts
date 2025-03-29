/**
 * Formats a number into South African Rand (ZAR) currency format
 * with exactly 2 decimal places
 */
export const formatZAR = (amount: number) => {
  const formattedNumber = amount.toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `R${formattedNumber}`;
};
