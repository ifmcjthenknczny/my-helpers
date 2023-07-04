type Cents = number;

const centsToString = (price: Cents, currency: string) => {
  const main = Math.floor(price / 100);
  const fraction =
    price - main * 100 < 10 ? `0${price % 100}` : `${price % 100}`;
  return `${main},${fraction} ${currency}`;
};
