export const capitalizeFirstLetter = (text: string) =>
    `${text.charAt(0).toUpperCase()}${text.slice(1)}`

export const capitalizeFirstLetterOfWords = (input: string): string =>
    input.replace(/\b\w+/g, (match: string) => {
        const lowercaseMatch = match.toLowerCase()
        return lowercaseMatch.charAt(0).toUpperCase() + lowercaseMatch.slice(1)
    })

export const clearString = (text: string) => text.trim().toLowerCase()
