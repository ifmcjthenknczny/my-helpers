import { useState } from 'react'

const useAlert = (disappearTime: number, autoDisappear?: true): [string | undefined, (text?: string) => void] => {
    const [alert, setAlert] = useState<string>()
    const handleAlert = (text?: string) => setAlert(text)
    const handleAlertDebounce = (text?: string) => {
        setAlert(text)
        setTimeout(() => setAlert(undefined), disappearTime)
    }
    if (autoDisappear) {
        return [alert, handleAlertDebounce]
    }
    return [alert, handleAlert]
}

export default useAlert