export const safeDivide = (dividend: number, divisor: number, returnZero?: true) => {
    if (divisor === 0) {
        return returnZero ? 0 : null
    }
    return dividend / divisor
}

export const roundNumber = (number: number, decimalPlaces: number) => {
    const multiplier = Math.pow(10, decimalPlaces)
    return Math.round(number * multiplier) / multiplier
}