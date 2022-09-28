import { APIGetLogin, APIPostChain, APIPostLogin } from "../types/Api";

export async function authLogin(data: APIPostLogin): Promise<null | APIGetLogin> {
    try {
        const res = await fetch('https://cors-anywhere.herokuapp.com/http://34.159.140.212/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.ok) {
            return await res.json() as APIGetLogin
        } else {
            return null
        }
    } catch(e) {
        return null
    }
}


export async function authRegister(data: APIPostLogin): Promise<null| undefined> {
    try {
        const res = await fetch('https://cors-anywhere.herokuapp.com/http://34.159.140.212/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.ok) {
            return
            
        } else {
            return null
        }
    } catch(e) {

        return null
    }
}


export async function sendChain(data: APIPostChain, jwt: string): Promise<null| undefined> {
    try {
        const res = await fetch('https://cors-anywhere.herokuapp.com/http://34.159.140.212/chain', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
        console.log( res)

        if (res.ok) {
            return
            
        } else {
            return null
        }
    } catch(e) {

        return null
    }
}