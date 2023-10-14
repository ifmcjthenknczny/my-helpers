export const removeDuplicates = (array: []) =>
    [...array].filter((item, index) => array.indexOf(item) === index)

export const removeDuplicatesAndExclude = <T>(
    array: T[],
    excludeArray: T[]
): T[] =>
        array.filter(
            (value, index, self) =>
                self.indexOf(value) === index && !excludeArray.includes(value)
        )

export const splitByCondition = <T>(
    array: T[],
    condition: (item: T) => boolean
): [T[], T[]] => array.reduce(
        (result: [T[], T[]], item: T) => {
            if (condition(item)) {
                result[0].push(item)
            } else {
                result[1].push(item)
            }
            return result
        },
        [[], []]
    )

export const splitByIndex = <T>(
    array: T[],
    breakpoint: number
) => [array.slice(0, breakpoint), array.slice(breakpoint)]

export const sum = (numbers: number[]) => numbers.reduce((acc, current) => acc + current, 0)