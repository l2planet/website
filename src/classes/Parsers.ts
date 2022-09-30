class ParseURL {
    constructor(url: string) {
        this.innerURL = url
    }

    protected innerURL: string
}

/**
 * A class that represents Youtube videos.
 * ## Usage
 * ```js
 * const videoId = new YoutubeVideo(url).getId()
 * ```
 */
export class YoutubeVideo extends ParseURL {
    getId(): string | null {
        try {
            const url = new URL(this.innerURL)
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
 * A class that represents Twitter tweets.
 * ## Usage
 * ```js
 * const tweetId = new TwitterTweet(url).getId()
 * ```
 */
export class TwitterTweet extends ParseURL {
    getId(): string | null {
        try {
            const url = new URL(this.innerURL)
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
            return /^http[^\?]*.(jpg|jpeg|gif|png|webp)(\?(.*))?$/gim
                ? url
                : null
        } catch {
            return null
        }
    }
}
