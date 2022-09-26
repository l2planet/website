/** Extracts Youtube ID from the URL. */
export function getYoutubeId(url: string): null | string {

    url = url.trim()

    if(url.startsWith('https://')) {
        url = url.slice(8)
    }

    if(url.startsWith('youtu.be/')) {
        url = url.slice(9)
    }

    if(url.startsWith('www.youtube.com/')) {
        url = url.slice(16)
    }


    if(url.startsWith('watch?v=') ) {
        url = url.slice(8)
    }

    if(url.length >= 11) {
        return url.slice(0, 11)
    } else {
        return null
    }

}