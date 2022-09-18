import { useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            if(item !== null) {
                return JSON.parse(item) as T
            } else {
                return defaultValue
            }
        } catch (e) {
            return defaultValue
        }
    })


    const isFirstRender = useRef(true)

    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {

        }
    }, [value])


    return [value, setValue] as const
}