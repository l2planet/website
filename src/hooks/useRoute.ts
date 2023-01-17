import { useRouter } from 'next/router';

/**
 * The hook that enables getting `id` url parameter, and a method that navigates to `404` page.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { id, navigateToNotFound } = useRoute()
 *     return </>
 * }
 * ```
 */
export function useRoute(): IdParam {
    // Extract `query`.
    const { query, push } = useRouter();

    return {
        id: query.id?.toString(),
        navigateToNotFound: () => push('/404'),
    } as const;
}

/** The interface for the return value of `useIdParam`. */
interface IdParam {
    id?: string;
    navigateToNotFound(): Promise<boolean>;
}
