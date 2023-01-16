import { useMemo } from 'react'
import { Block } from '../components/Editor/types'
import { useApi } from '../contexts/ApiContext'
import { InternalNewsletter } from '../types/Api'

/**
 * The hook that enables getting the latest newsletter available.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { latestNewsletter } = useLatestNewsletter()
 *     return </>
 * }
 * ```
 */
export function useLatestNewsletter(): ChainOfPage {
    // Extract `endpointInfo` and `navigateToNotFound`.
    const { infoEndpointData: endpointInfo } = useApi()

    // Declare `latestNewsletter` memoized value.
    const latestNewsletter: InternalNewsletter | undefined = useMemo(() => {
        if (!endpointInfo) return

        const _latest_newsletter = endpointInfo.latest_newsletter

        try {
            return {
                author: _latest_newsletter.username,
                blocks: (JSON.parse(_latest_newsletter.newsletter) as Block[]) ?? [],
            }
        } catch (error) {
            return
        }
    }, [endpointInfo])

    // Return `latestNewsletter` inside a readonly object.
    return { latestNewsletter } as const
}

/** The interface for the return value of `useLatestNewsletter`. */
interface ChainOfPage {
    latestNewsletter?: InternalNewsletter
}
