// This function formats a given number as currency in Indian Rupees (INR) using the `Intl.NumberFormat` API. It takes a number as input and returns a string representing the formatted currency value. The formatting style is set to "currency" and the currency is specified as "INR".
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};