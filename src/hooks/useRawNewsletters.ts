import { useEffect, useState } from 'react';
import { useApi } from '../contexts/ApiContext';
import { RawEndpointData } from '../types/Api';

export function useRawNewsletters() {
    const { fetchRawEndpoint, rawEndpointData } = useApi();

    // Make a get request to the API, once the website gets loaded.
    useEffect(() => {
        try {
            fetchRawEndpoint();
        } catch {
            alert('An error occured!');
        }
    }, []);

    return rawEndpointData?.newsletters;
}
