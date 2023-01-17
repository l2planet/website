/** Extracts GitHub profile name from the URL. */
export function getGitHubName(url: string): null | string {
    url = url.trim();

    if (url.startsWith('https://')) {
        url = url.slice(8);
    }

    if (url.startsWith('github.com/')) {
        url = url.slice(11);
    }

    const name = url.split('/').at(0);

    if (name !== undefined && name.length > 0) {
        return name;
    }

    return null;
}
