export const makePostRequest = async (url: string, body: Object) => {
    try {
        return (await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        }))
    } catch(e) {
        console.log(e)
    }

}