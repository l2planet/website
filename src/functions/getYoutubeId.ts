/** Extracts Youtube ID from the URL. */
export function getYoutubeId(youtubeUrl: string): null | string {
    youtubeUrl = youtubeUrl.trim()

    try {
        const url = new URL(youtubeUrl)
        if (url.host == 'www.youtube.com') {
            const id = url.searchParams.get('v')
            return id !== null && id.length === 11 ? id : null
        } else if (url.host == 'youtu.be') {
            const id = url.pathname.slice(1)
            return id.length === 11 ? id : null
        } else {
            return null
        }
    } catch {
        return null
    }
}
