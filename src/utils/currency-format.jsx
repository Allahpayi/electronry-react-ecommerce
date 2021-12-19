export const currencyFormat = (currency) => {
  var newFormat = Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  });
  const newCurrency = newFormat.format(currency);
  return newCurrency;
};
