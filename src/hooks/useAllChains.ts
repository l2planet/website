import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { APIGetChain, InternalChain } from '../types/Api'

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
    const { infoEndpointData: endpointInfo } = useApi()

    // Declare `chains` memoized value.
    const chains: InternalChain[] | undefined = useMemo(() => {
        if (!endpointInfo) return undefined

        return Object.entries(endpointInfo.chains).map(([id, data]) => ({
            ...(data as APIGetChain),
            id,
        })) as unknown as InternalChain[]
    }, [endpointInfo])

    // Return `chains` inside a readonly object.
    return { chains } as const
}

/** The interface for the return value of `useAllChains`. */
interface AllChains {
    chains?: InternalChain[]
}
