export const capitalizeFirstLetter = (text: string) =>
    `${text.charAt(0).toUpperCase()}${text.slice(1)}`

export const capitalizeFirstLetterOfWords = (input: string): string =>
    input.replace(/\b\w+/g, (match: string) => {
        const lowercaseMatch = match.toLowerCase()
        return lowercaseMatch.charAt(0).toUpperCase() + lowercaseMatch.slice(1)
    })

export const clearString = (text: string) => text.trim().toLowerCase()

export const splitUpToLastSeparator = (str: string, separator: string = '/') => {
    const separatorIndex = str.lastIndexOf(separator)
    return separatorIndex === -1 ? str : str.substring(0, separatorIndex)
}

export const extractAllSubRoutes = (route: string): string[] => {
    const subRoutes = [route]
    let currentRoute = route
    while (currentRoute.includes('/')) {
        currentRoute = splitUpToLastSeparator(currentRoute)
        subRoutes.push(currentRoute)
    }
    return subRoutes.filter(Boolean).toReversed()
}