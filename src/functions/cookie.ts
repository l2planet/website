/** Sets the jwt cookie. */
export function setJwtCookie(token: string, expires: string) {
    document.cookie = `jwt=${token}; expires=${expires}; path=/`;
}

/** Returns the jwt cookie. If there is no cookie, throws an error. */
export function getJwtCookie(): string {
    const key = 'jwt=';

    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];

        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }

        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    throw new Error('You must be logged in!');
}
