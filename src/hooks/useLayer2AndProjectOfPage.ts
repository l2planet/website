import { useMemo } from "react";
import { useApi } from "../contexts/ApiContext";
import { useInfoEndpoint } from "../contexts/InfoEndpointContext";
import { APIGetLayer2, InternalChain, InternalLayer2, InternalProject } from "../types/Api";
import { useRoute } from "./useRoute";

/**
 * The hook that enables getting a layer 2 solution and associated projects with the ID of `id` URL parameter.
 * 
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { layer2 } = useLayer2AndProjectsOfPage()   
 *     return </>
 * }
 * ```
 */
export function useLayer2AndProjectsOfPage(): Layer2AndProjectsOfPage {
    // Extract `apiManager`.
    const { endpointInfo } = useInfoEndpoint()
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

        const projects: InternalProject[] = []

        const projectCategoriesSet = new Set<string>()

        const projectCategories: string[] = []

        for (const projectId of _layer2.projects) {
            const project = endpointInfo.projects[projectId]
            if (project) {
                projects.push({ ...project, id: projectId })
                for (const category of project.categories) {
                    projectCategoriesSet.add(category)
                }
            }
        }

        projectCategoriesSet.forEach(category => projectCategories.push(category))


        return {
            ..._layer2,
            id,
            projects,
            projectCategories,
        } as unknown as InternalLayer2


    }, [endpointInfo, id, navigateToNotFound])

    // Return `chain` inside a readonly object.
    return { layer2 } as const
}

/** The interface for the return value of `useLayer2AndProjectsOfPage`. */
interface Layer2AndProjectsOfPage {
    layer2?: InternalLayer2
}