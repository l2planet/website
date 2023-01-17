import { useEffect, useState } from 'react';
import { Block } from '../components/Editor/types';
import { useRawNewsletters } from './useRawNewsletters';
import { useRoute } from './useRoute';

/**
 * The hook that enables getting the raw newsletter with the ID of `id` URL parameter.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const newsletter = useRawNewsletterOfPage()
 *     return </>
 * }
 * ```
 */
export function useRawNewsletterOfPage() {
    const rawNewsletters = useRawNewsletters();
    const [newsletter, setNewsletter] = useState<Block[] | undefined>();
    const { id, navigateToNotFound } = useRoute();

    // Make a get request to the API, once the website gets loaded.
    useEffect(() => {
        if (newsletter || !rawNewsletters) return;

        const ID = parseInt(id ?? '-1');

        let ns = rawNewsletters.find((ns) => ns.ID == ID);

        if (!ns) {
            return navigateToNotFound() as any;
        } else {
            setNewsletter(JSON.parse(ns.newsletter));
        }
    }, [id, navigateToNotFound, newsletter, rawNewsletters]);

    return newsletter;
}
