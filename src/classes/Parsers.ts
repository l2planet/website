class ParseURL {
    constructor(url: string) {
        this.innerURL = url
    }

    protected innerURL: string
}


/**
 * A class that represents Image URLs.
 * ## Usage
 * ```js
 * const url = new ImageURL(url).getURL()
 * ```
 */
export class ImageURL extends ParseURL {
    getURL(): string | null {
        try {
            const url = new URL(this.innerURL).href
            return /^http[^\?]*.(jpg|jpeg|gif|png|webp)(\?(.*))?$/gim ? url : null
        } catch {
            return null
        }
    }
}
