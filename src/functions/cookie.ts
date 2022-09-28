export function setCookie(name: string, val: string, expires: string) {
    document.cookie = `${name}=${val}; expires=${expires}; path=/`
}

export function getCookie(name: string) {
    const key = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(key) === 0) {
            return cookie.substring(key.length, cookie.length);
        }
    }
    return null;
}