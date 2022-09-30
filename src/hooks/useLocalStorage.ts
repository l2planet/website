import { useEffect, useRef, useState } from 'react'

/**
 * ## useLocalStorage
 * A hook that provides an easy to use interface to work with `localStorage` API.
 *
 * ## Usage
 * ```jsx
 *                                     //   KEY      DEFAULT
 * const [name, setName] = useLocalStorage('name', 'John Doe')
 *
 * // name == "John Doe"
 *
 * setName('Berzan') // Now, it's saved as "Berzan"!
 *
 * // name == "Berzan"
 * ```
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            if (item !== null) {
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
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {}
    }, [value, key])

    return [value, setValue] as const
}
