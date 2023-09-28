export const generatePhotoLink = (polishName: string) => {
    const URL_TEMPLATE = 'https://source.unsplash.com/random/200x200/'
    const polishLettersReplacement = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z',
    }
    let searchPhrase = polishName.toLowerCase().split(' ').join('+')
    Object.entries(polishLettersReplacement).forEach(
        ([polishLetter, replacement]) =>
            (searchPhrase = searchPhrase.replaceAll(polishLetter, replacement))
    )
    return `${URL_TEMPLATE}?${searchPhrase}`
}
