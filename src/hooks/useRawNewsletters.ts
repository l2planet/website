import { useEffect, useState } from 'react'
import { RawEndpointData } from '../types/Api'

export function useRawNewsletters() {
    const [endpointRaw, setEndpointRaw] = useState<RawEndpointData | undefined>()

    // Make a get request to the API, once the website gets loaded.
    useEffect(() => {
        try {
            fetch('https://api.l2planet.xyz/raw').then((res) =>
                res.json().then((data) => setEndpointRaw(data))
            )
        } catch {
            alert('An error occured!')
        }
    }, [])

    return endpointRaw?.newsletters
}
