/** Extracts Coingecko ID from the URL. */
export function getCoinGeckoId(url: string): null | string {

    url = url.trim()

    if(url.startsWith('https://')) {
        url = url.slice(8)
    }

    if(url.startsWith('www.')) {
        url = url.slice(4)
    }


    if(url.startsWith('coingecko.com/')) {
        url = url.slice(14)
    }

    let [path, name] = url.split('/').slice(1,3)

    if(path === 'coins' && name.length > 0) {
        return name
    }
    
    return null
}