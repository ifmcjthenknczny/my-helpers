export const range = (size: number, start: number = 0) =>
    [...Array(size).keys()].map((i) => i + start)

export const rangeChars = (size: number = 26, startChar: string = 'A') => {
    if (startChar.length !== 1) throw new Error('Enter char of length 1.')
    return [...Array(size).keys()].map((i) =>
        String.fromCharCode(startChar.charCodeAt(0) + i)
    )
}

export const rangeExclude = (
    start: number,
    end: number,
    exclusionArray: number[]
) =>
    [...Array(end - start)]
        .map((_, i) => (!exclusionArray.includes(i + start) ? i + start : null))
        .filter((i) => i !== null)

export const rangeWithModulo = (start: number, end: number, modulo: number) => {
    if (end < start) {
        const length = modulo - start + 1 + end
        return [...Array(length)].map((_, i) => (i + start) % modulo)
    }
    return [...Array(end - start)].map((_, i) => i + start)
}
