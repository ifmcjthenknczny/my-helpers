import { useState } from 'react'

const useLocalStorage = <T>(
    localStorageKey: string,
    initialValue: T
): [T, (value: T) => void] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(localStorageKey)
            return item ? JSON.parse(item) : initialValue
        } catch (err) {
            return initialValue
        }
    })

    const updateValue = (value: T) => {
        try {
            localStorage.setItem(localStorageKey, JSON.stringify(value))
            setStoredValue(value)
        } catch (err) {
            // do nothing
        }
    }

    return [storedValue, updateValue]
}

export default useLocalStorage
