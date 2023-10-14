import { useState } from 'react'

const useQueryStatus = (
    initialBusyState = false,
    onError?: (e: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
): [boolean, <T extends (...args: any[]) => any>(f: T) => T] => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const [isBusy, setBusy] = useState(initialBusyState)

    const busyWrapper = <T extends (...args: any[]) => any>(f: T): T => // eslint-disable-line @typescript-eslint/no-explicit-any
    (async (...args) => {
        setBusy(true)
        try {
            return await f(...args)
        } catch (e) {
            if (onError) {
                onError(e)
            }
        } finally {
            setBusy(false)
        }
    }) as T

    return [isBusy, busyWrapper]
}

export default useQueryStatus