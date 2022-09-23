import { useCallback, useState } from "react";

export function useBoolean(defaultValue: boolean) {
    const [value, setValue] = useState<boolean>(defaultValue)

    const toggleValue = useCallback(() => {
        setValue(value => !value)
    }, [])
    
    return [value, toggleValue] as const
}