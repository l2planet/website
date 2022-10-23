/** Returns the same URL if it is an image. */
export function getImageUrl(imageUrl: string) {
    imageUrl = imageUrl.trim()

    try {
        const url = new URL(imageUrl).href
        return /^http[^\?]*.(jpg|jpeg|gif|png|webp)(\?(.*))?$/gim ? url : null
    } catch {
        return null
    }
}
