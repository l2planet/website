/** Extracts Twitter ID from the URL. */
export function getTwitterAccountId(url: string): null | string {
    url = url.trim()

    if (url.startsWith('https://')) {
        url = url.slice(8)
    }

    if (url.startsWith('twitter.com/')) {
        url = url.slice(12)
    }

    const id = url.split('/').at(0)

    if (id !== undefined && id.length > 0) {
        return id
    }

    return null
}

export function getTweetId(twitterUrl: string): null | string {
    twitterUrl = twitterUrl.trim()

    try {
        const url = new URL(twitterUrl)
        if (url.host == 'twitter.com') {
            const id = url.pathname.split('/').at(3)
            return id !== undefined && id.length == 19 ? id : null
        } else {
            return null
        }
    } catch {
        return null
    }
}
