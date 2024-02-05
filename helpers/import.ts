export async function safeImport(modulePath: string) {
    try {
        return await import(modulePath)
    } catch (err) {
        return {}
    }
}