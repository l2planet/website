import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { useInfoEndpoint } from '../contexts/InfoEndpointContext'
import { APIGetLayer2, InternalChain, InternalLayer2 } from '../types/Api'
import { useRoute } from './useRoute'

/**
 * The hook that enables getting the chain with the ID of `id` URL parameter.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { chain } = useChainOfPage()
 *     return </>
 * }
 * ```
 */
export function useChainOfPage(): ChainOfPage {
    // Extract `endpointInfo`, `id`, and `navigateToNotFound`.
    const { endpointInfo } = useInfoEndpoint()
    const { id, navigateToNotFound } = useRoute()

    // Declare `chain` memoized value.
    const chain: InternalChain | undefined = useMemo(() => {
        if (!endpointInfo) return
        if (!id) {
            navigateToNotFound()
            return
        }

        const _chain = endpointInfo.chains[id]

        if (_chain === undefined) {
            navigateToNotFound()
            return
        }

        const layer2s: InternalLayer2[] = []
        const uniqueL2CategoriesSet = new Set<string>()

        for (const l2Id of _chain.layer2s) {
            const l2 = endpointInfo.layer2s[l2Id]
            if (l2) {
                layer2s.push({ ...l2, id: l2Id } as unknown as InternalLayer2)
                for (const category of l2.categories) {
                    uniqueL2CategoriesSet.add(category)
                }
            }
        }

        const uniqueL2Categories: string[] = []

        uniqueL2CategoriesSet.forEach((category) => uniqueL2Categories.push(category))

        return {
            ..._chain,
            layer2s: layer2s,
            l2Categories: uniqueL2Categories,
            id,
        }
    }, [endpointInfo, id, navigateToNotFound])

    // Return `chain` inside a readonly object.
    return { chain } as const
}

/** The interface for the return value of `useChainOfPage`. */
interface ChainOfPage {
    chain?: InternalChain
}
