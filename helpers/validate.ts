import { Schema } from 'joi'

export const hasNumber = (text: string) => /\d/.test(text)

export const validateEmail = (mail: string) =>
    !!mail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)

export const validateSchema = <T>(data: Partial<T>, schema: Schema<T>): T => {
    const { error, value } = schema.validate(data)
    if (error) {
        throw new Error(`Validation error: ${error.message}`)
    }
    return value
}
