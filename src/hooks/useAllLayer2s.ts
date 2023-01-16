import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { APIGetLayer2, InternalLayer2 } from '../types/Api'

/**
 * The hook that enables getting all the layer 2 solutions available on the backend inside a component.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { layer2s } = useAllLayer2s()
 *     return </>
 * }
 * ```
 */
export function useAllLayer2s(): AllLayer2s {
    // Extract `apiManager`.
    const { infoEndpointData: endpointInfo } = useApi()

    // Declare `layer2s` memoized value.
    const layer2s: InternalLayer2[] | undefined = useMemo(() => {
        if (!endpointInfo) return undefined

        return Object.entries(endpointInfo.layer2s).map(([id, data]) => ({
            ...(data as APIGetLayer2),
            id,
        })) as unknown as InternalLayer2[]
    }, [endpointInfo])

    // Return `layer2s` inside a readonly object.
    return { layer2s } as const
}

/** The interface for the return value of `useAllLayer2s`. */
interface AllLayer2s {
    layer2s?: InternalLayer2[]
}
