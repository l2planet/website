import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { InfoEndpointData, RawEndpointData } from '../types/Api'

/** The Interface for `ApiContext`. */
interface ApiContextState {
    /** Represents data on https://api.l2planet.xyz/info. */
    infoEndpointData?: InfoEndpointData
    /** Represents data on https://api.l2planet.xyz/raw. */

    rawEndpointData?: RawEndpointData
    /** Function that fetches the data at https://api.l2planet.xyz/raw. */
    fetchRawEndpoint: () => Promise<void>
}

/** The context that stores `ApiContextState`. */
const ApiContext = createContext({} as ApiContextState)

/** The hook to use `ApiContext`. */
export const useApi = () => useContext(ApiContext)

/** The provider component for `InfoEndpointContext`. */
export const ApiProvider = ({ children }: { children: ReactNode }) => {
    const [infoEndpointData, setInfoEndpointData] = useState<InfoEndpointData | undefined>()
    const [rawEndpointData, setRawEndpointData] = useState<RawEndpointData | undefined>()

    async function fetchInfoEndpoint() {
        const res = await fetch('https://api.l2planet.xyz/info')
        const jsonResBody = await res.json()
        setInfoEndpointData(jsonResBody)
    }

    const fetchRawEndpoint = useCallback(async () => {
        if (rawEndpointData) return

        const res = await fetch('https://api.l2planet.xyz/raw')
        const jsonResBody = await res.json()
        setRawEndpointData(jsonResBody)
    }, [rawEndpointData])

    // Make a get request to info endpoint, once the website is loaded.
    useEffect(() => {
        try {
            fetchInfoEndpoint()
        } catch {
            alert('An API error occured!')
        }
    }, [])

    // Return the context provider, value, and children.
    return (
        <ApiContext.Provider
            value={{
                infoEndpointData,
                rawEndpointData,
                fetchRawEndpoint,
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}
