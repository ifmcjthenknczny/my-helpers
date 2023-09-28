export const randInt = (end: number, start: number = 0) =>
    Math.floor(Math.random() * (end - start + 1)) + start

export const randElement = (array: []) => array[randInt(0, array.length - 1)]

export const shuffle = (array: []) => {
    let currentIndex = array.length,
        randomIndex: number
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }
    return array
}

export const randNip = () => {
    const randomInts = new Array(9).map(() => randInt(9))
    const coefficients = [6, 5, 7, 2, 3, 4, 5, 6, 7]
    const controlSum =
    randomInts.reduce((acc, curr, i) => acc + curr * coefficients[i], 0) % 11
    return randomInts.concat(controlSum).join('')
}

export const randTime = () => [randInt(23), randInt(59)]

export const randDate = (
    yearMin: number = new Date().getFullYear() - 100,
    yearMax: number = new Date().getFullYear()
) => new Date(randInt(yearMin, yearMax), randInt(0, 11), randInt(31))

export const randPesel = (
    yearMin: number = new Date().getFullYear() - 100,
    yearMax: number = new Date().getFullYear()
) => {
    const date = randDate(yearMin, yearMax)
    const century = Math.ceil(date.getFullYear() / 100)
    const monthBase = ((century - 19) * 20 + 80) % 100
    const peselWithoutControlSum = `${date.getFullYear() - Math.floor(date.getFullYear() / 100) * 100}${(monthBase + date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate()}${(randInt(9999)).toString().padStart(4, '0')}`
    const controlDigits = '1379137913'.split('').map(digit => +digit)
    const controlSum = 10 - (peselWithoutControlSum.split('').map(digit => +digit).reduce((acc, curr,  i) => acc + curr*controlDigits[i], 0) % 10) % 10
    return `${peselWithoutControlSum}${controlSum}`
}