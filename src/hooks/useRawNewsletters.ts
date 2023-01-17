import { useEffect } from 'react';
import { useApi } from '../contexts/ApiContext';

export function useRawNewsletters() {
    const { fetchRawEndpoint, rawEndpointData } = useApi();

    // Make a get request to the API, once the website gets loaded.
    useEffect(() => {
        try {
            fetchRawEndpoint();
        } catch {
            alert('An error occured!');
        }
    }, [fetchRawEndpoint]);

    return rawEndpointData?.newsletters;
}
