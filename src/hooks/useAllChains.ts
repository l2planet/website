import { useMemo } from "react";
import { useApi } from "../contexts/ApiContext";
import { InternalChain } from "../types/Api";

/**
 * The hook that enables getting all the chains available on the backend inside a component.
 * 
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { chains } = useAllChains()   
 *     return </>
 * }
 * ```
 */
export function useAllChains(): AllChains {
    // Extract `apiManager`.
    const { api } = useApi()

    // Declare `chains` memoized value.
    const chains = useMemo(() => api?.getAllChains(), [api])

    // Return `chains` inside a readonly object.
    return { chains } as const
}

/** The interface for the return value of `useAllChains`. */
interface AllChains {
    chains?: InternalChain[]
}