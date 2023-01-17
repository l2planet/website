import { useEffect, useMemo, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { APIGetLayer2, InternalRawLayer2, RawEndpointData } from '../types/Api'
import { useRoute } from './useRoute'

/**
 * The hook that enables getting the raw layer 2 solution with the ID of `id` URL parameter.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { rawLayer2 } = useRawLayer2OfPage()
 *     return </>
 * }
 * ```
 */
export function useRawLayer2OfPage(): RawLayer2OfPage {
    // Extract `id`, and `navigateToNotFound`.
    const { id, navigateToNotFound } = useRoute()
    const [rawLayer2, setRawLayer2] = useState<undefined | InternalRawLayer2>()
    const { fetchRawEndpoint, rawEndpointData } = useApi()

    // Make a get request to the API, once the website gets loaded.
    useEffect(() => {
        try {
            fetchRawEndpoint()
        } catch {
            alert('An error occured!')
        }
    }, [])

    useEffect(() => {
        if (rawLayer2 || !rawEndpointData) return
        if (!id) {
            return navigateToNotFound() as any
        }

        const _rawLayer2 = rawEndpointData.layer2s[id]

        if (!_rawLayer2) {
            return navigateToNotFound() as any
        }

        setRawLayer2({
            ..._rawLayer2,
            projects: _rawLayer2.projects ?? [],
            categories: _rawLayer2.categories ?? [],
            videos: _rawLayer2.videos ?? [],
            investors: _rawLayer2.investors ?? [],
            id,
        })
    }, [id, navigateToNotFound, rawLayer2, rawEndpointData])

    // Return `layer2` inside a readonly object.
    return { rawLayer2 } as const
}

/** The interface for the return value of `useRawLayer2OfPage`. */
interface RawLayer2OfPage {
    rawLayer2?: InternalRawLayer2
}
