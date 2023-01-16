import { useMemo } from 'react'
import { useApi } from '../contexts/ApiContext'
import { APIGetLayer2, InternalRawProject } from '../types/Api'
import { useRoute } from './useRoute'

/**
 * The hook that enables getting the raw project with the ID of `id` URL parameter.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { rawProject } = useRawProjectOfPage()
 *     return </>
 * }
 * ```
 */
export function useRawProjectOfPage(): ChainOfPage {
    // Extract `endpointInfo`, `id`, and `navigateToNotFound`.
    const { infoEndpointData: endpointInfo } = useApi()
    const { id, navigateToNotFound } = useRoute()

    // Declare `rawProject` memoized value.
    const rawProject: InternalRawProject | undefined = useMemo(() => {
        if (!endpointInfo) return
        if (!id) {
            navigateToNotFound()
            return
        }

        const _project = endpointInfo.projects[id]

        if (_project === undefined) {
            navigateToNotFound()
            return
        }

        const layer2_ids: string[] = []
        1

        for (const [layer2Id, layer2Data] of Object.entries(endpointInfo.layer2s) as [
            string,
            APIGetLayer2
        ][]) {
            if (layer2Data.projects !== null && layer2Data.projects.includes(id)) {
                layer2_ids.push(layer2Id)
            }
        }

        return {
            ..._project,
            categories: _project.categories ?? [],
            id,
            layer2_ids,
        }
    }, [endpointInfo, id, navigateToNotFound])

    // Return `rawProject` inside a readonly object.
    return { rawProject } as const
}

/** The interface for the return value of `useRawProjectOfPage`. */
interface ChainOfPage {
    rawProject?: InternalRawProject
}
