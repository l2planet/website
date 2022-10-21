import { useRouter } from "next/router";
import { useMemo } from "react";
import { useInfoEndpoint } from "../contexts/InfoEndpointContext";
import { APIGetChain, InternalChain } from "../types/Api";

/**
 * The hook that enables getting `id` url parameter.
 * 
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { id } = useIdParam()   
 *     return </>
 * }
 * ```
 */
export function useIdParam() {
    // Extract `query`.
    const { query } = useRouter()

    return { id: query.id } as const
}

/** The interface for the return value of `useIdParam`. */
interface IdParam {
    id?: string
}