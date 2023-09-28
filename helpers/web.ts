export const copyToClipboard = async (text: string | number) => {
    try {
        await navigator.clipboard.writeText(`${text}`)
    } catch (e) {
    // do nothing
    }
}
