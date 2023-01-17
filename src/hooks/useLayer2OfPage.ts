import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { InternalLayer2, L2Locale } from '../types/Api'
import { useRoute } from './useRoute'

/**
 * The hook that enables getting the layer 2 solution with the ID of `id` URL parameter.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { layer2 } = useLayer2OfPage()
 *     return </>
 * }
 * ```
 */
export function useLayer2OfPage(): Layer2OfPage {
    // Extract `endpointInfo`, `id`, and `navigateToNotFound`.
    const { infoEndpointData: endpointInfo } = useApi()
    const { id, navigateToNotFound } = useRoute()

    // Declare `layer2` memoized value.
    const layer2: InternalLayer2 | undefined = useMemo(() => {
        if (!endpointInfo) return
        if (!id) {
            navigateToNotFound()
            return
        }

        const _layer2 = endpointInfo.layer2s[id]

        if (!_layer2) {
            navigateToNotFound()
            return
        }

        let locales: L2Locale[]

        try {
            const parsedLocales = JSON.parse(_layer2.locales)
            locales = parsedLocales
        } catch (error) {
            locales = []
        }

        return {
            ..._layer2,
            projects: _layer2.projects ?? [],
            id,
            locales,
        } as unknown as InternalLayer2
    }, [endpointInfo, id, navigateToNotFound])

    // Return `chain` inside a readonly object.
    return { layer2 } as const
}

/** The interface for the return value of `useLayer2OfPage`. */
interface Layer2OfPage {
    layer2?: InternalLayer2
}
