/** Extracts Twitter ID from the URL. */
export function getTwitterId(url: string): null | string {

    url = url.trim()

    if(url.startsWith('https://')) {
        url = url.slice(8)
    }

    if(url.startsWith('twitter.com/')) {
        url = url.slice(12)
    }

    const id = url.split('/').at(0)
    
    if(id !== undefined && id.length > 0) {
        return id
    }
    
    return null
}