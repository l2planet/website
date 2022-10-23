class ParseURL {
    constructor(url: string) {
        this.innerURL = url
    }

    protected innerURL: string
}


/**
 * A class that represents Twitter accounts.
 * ## Usage
 * ```js
 * const accountId = new TwitterAccount(url).getId()
 * ```
 */
export class TwitterAccount extends ParseURL {
    getId(): string | null {
        try {
            const url = new URL(this.innerURL)
            if (url.host == 'twitter.com') {
                const id = url.pathname.split('/').at(1)
                return id !== undefined && id.length > 0 ? id : null
            } else {
                return null
            }
        } catch {
            return null
        }
    }
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
