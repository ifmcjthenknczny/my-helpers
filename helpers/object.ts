export const objectDeepCopy = <T>(object: T) =>
    JSON.parse(JSON.stringify(object))

export const objectMap = (obj: object, func: (key: string) => any) => // eslint-disable-line @typescript-eslint/no-explicit-any
    Object.keys(obj).map(func)

export const getValuesOfKey = <T>(array: T[], key: keyof T) =>
    array.map((element) => element[key])

export const getKeyByValue = (object: {[key: string]: any}, value: any): string | undefined => { // eslint-disable-line @typescript-eslint/no-explicit-any
    for (const [key, val] of Object.entries(object)) {
        if (val === value) {
            return key
        }
    }
    return undefined
}

export const filterProperties = (object: object, properties: string[]) =>
    Object.fromEntries(
        Object.entries(object).filter(([key]) => !properties.includes(key))
    )

export const removeProperty = <T extends object, K extends keyof T>(
    object: T,
    key: K
): Omit<T, K> => {
    const { [key]: _, ...rest } = object // eslint-disable-line @typescript-eslint/no-unused-vars
    return rest
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const omit = <T extends { [key: string]: any }, K extends keyof T>(
    obj: T,
    keysToOmit: K[]
): Omit<T, K> =>
        Object.keys(obj).reduce((newObj, key) => {
            if (keysToOmit.includes(key as K)) {
                return newObj
            }
            return { ...newObj, [key]: obj[key] }
        }, {} as Omit<T, K>)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pick = <T extends { [key: string]: any }, K extends keyof T>(
    obj: T,
    keysToPick: K[]
): Pick<T, K> =>
        keysToPick.reduce((newObj, key) => {
            if (key in obj) {
                return { ...newObj, [key]: obj[key] }
            }
            return newObj
        }, {} as Pick<T, K>)

export const modifyObjectValues = (obj: object, func: (value: any) => any) => // eslint-disable-line @typescript-eslint/no-explicit-any
    Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = func(value)
        return acc
    }, {} as any) // eslint-disable-line @typescript-eslint/no-explicit-any

export const removeUndefinedOrNull = (obj: {[key: string]: any}) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    return Object.entries(obj)
        .reduce((acc, [key, value]) => {
            if(value !== undefined && value !== null) {
                acc[key] = value
            }
            return acc
        }, {} as {[key: string]: any}) // eslint-disable-line @typescript-eslint/no-explicit-any
}
