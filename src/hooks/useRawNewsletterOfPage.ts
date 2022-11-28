import { useEffect, useState } from 'react'
import { Block } from '../components/Editor/types'
import { RawEndpointData } from '../types/Api'
import { useRoute } from './useRoute'

export function useRawNewsletterOfPage() {
    const [newsletter, setNewsletter] = useState<Block[] | undefined>()
    const { id, navigateToNotFound } = useRoute()

    // Make a get request to the API, once the website gets loaded.
    useEffect(() => {
        if(newsletter) return
        try {
            fetch('https://api.l2planet.xyz/raw').then((res) =>
                res.json().then((data: RawEndpointData) => {
                    const ID = parseInt(id ?? '-1')
                    let ns = data.newsletters.find((ns) => ns.ID == ID)
                    if (!ns) {
                        return navigateToNotFound()
                    } else {
                        setNewsletter(JSON.parse(ns.newsletter))
                    }
                })
            )
        } catch {
            alert('An error occured!')
        }
    }, [id, navigateToNotFound, newsletter])

    return newsletter
}
