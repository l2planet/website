import { useMemo } from 'react';
import { useApi } from '../contexts/ApiContext';
import { APIGetChain, APIGetProject, InternalChain, InternalProject } from '../types/Api';

/**
 * The hook that enables getting all the projects available on the backend inside a component.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { projects } = useAllProjects()
 *     return </>
 * }
 * ```
 */
export function useAllProjects(): AllProjects {
    // Extract `apiManager`.
    const { infoEndpointData: endpointInfo } = useApi();

    // Declare `chains` memoized value.
    const projects: InternalProject[] | undefined = useMemo(() => {
        if (!endpointInfo) return undefined;

        return Object.entries(endpointInfo.projects).map(([id, data]) => ({
            ...(data as APIGetProject),
            id,
        }));
    }, [endpointInfo]);

    // Return `chains` inside a readonly object.
    return { projects } as const;
}

/** The interface for the return value of `useAllProjects`. */
interface AllProjects {
    projects?: InternalProject[];
}
