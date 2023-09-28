type Cents = number;

export const centsToString = (price: Cents, currency: string) => {
    const main = Math.floor(price / 100)
    const fraction =
    price - main * 100 < 10 ? `0${price % 100}` : `${price % 100}`
    return `${main},${fraction} ${currency}`
}

export const calculateValueProportionally = ({
    referenceValue,
    newRange,
    referenceRange,
    inverselyProportional,
}: {
  referenceValue: number;
  newRange: { min: number; max: number };
  referenceRange: { min: number; max: number };
  inverselyProportional?: true;
}) =>
    newRange.min +
  ((newRange.max - newRange.min) *
    (inverselyProportional
        ? referenceRange.max - referenceValue
        : referenceValue - referenceRange.min)) /
    (referenceRange.max - referenceRange.min)
