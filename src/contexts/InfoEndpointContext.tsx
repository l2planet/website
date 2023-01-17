import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { InfoEndpointData } from '../types/Api';

/** The Interface for `InfoEndpointContext`. */
interface InfoEndpointContextState {
    /** Represents data on https://api.l2planet.xyz/info. */
    endpointInfo?: InfoEndpointData;
}

/** The context that stores `InfoEndpointContextState`. */
const InfoEndpointContext = createContext({} as InfoEndpointContextState);

/** The hook to use `InfoEndpointContext`. */
export const useInfoEndpoint = () => useContext(InfoEndpointContext);

/** The provider component for `InfoEndpointContext`. */
export const InfoEndpointProvider = ({ children }: { children: ReactNode }) => {
    const [endpointInfo, setEndpointInfo] = useState<InfoEndpointData | undefined>();

    // Make a get request to the API, once the website gets loaded.
    useEffect(() => {
        try {
            fetch('https://api.l2planet.xyz/info').then((res) =>
                res.json().then((data) => setEndpointInfo(data))
            );
        } catch {
            alert('An error occured!');
        }
    }, []);

    // Return the context provider, value, and children.
    return (
        <InfoEndpointContext.Provider
            value={{
                endpointInfo,
            }}
        >
            {children}
        </InfoEndpointContext.Provider>
    );
};
