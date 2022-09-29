import { formatChain, formatLayer2, formatProject } from "./format";
import { APIGetLogin, APIPostChain, RawFormChain, RawFormAuth, RawFormLayer2, RawFormProject, APIPostLayer2, APIPostProject } from "../types/Api";
import { getJwtCookie, setJwtCookie } from "./cookie";
import { Block } from "../components/Editor/types";

/** Makes a login request to the backend with given form data. */
export async function authLogin(formData: RawFormAuth): Promise<void> {
    try {
        const res = await fetch('http://34.159.140.212/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.ok) {
            const json = await res.json() as APIGetLogin
            setJwtCookie(json.token, json.expire)
        } else {
            throw new Error('Wrong password or username.')
        }
    } catch (e) {
        throw new Error('An unknown error is occured.')
    }
}


/** Makes a register request to the backend with given form data. */
export async function authRegister(formData: RawFormAuth): Promise<void> {
    try {
        const res = await fetch('http://34.159.140.212/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e) {
        throw new Error('Cannot make a request.')
    }
}


/** Makes a post request to the backend to send a new Chain. */
export async function sendChain(formData: RawFormChain): Promise<void> {
    try {
        const jwt = getJwtCookie()
        const chainData: APIPostChain = formatChain(formData)

        const res = await fetch('http://34.159.140.212/chain', {
            method: 'POST',
            body: JSON.stringify(chainData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })

        console.log(res)

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}


/** Makes a post request to the backend to send a new Layer 2. */
export async function sendLayer2(formData: RawFormLayer2): Promise<void> {
    try {
        const jwt = getJwtCookie()
        const layer2Data: APIPostLayer2 = formatLayer2(formData)

        const res = await fetch('http://34.159.140.212/solution', {
            method: 'POST',
            body: JSON.stringify(layer2Data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })

        console.log(res)

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}




/** Makes a post request to the backend to send a new Project. */
export async function sendProject(formData: RawFormProject): Promise<void> {
    try {
        const jwt = getJwtCookie()
        const projectData: APIPostProject = formatProject(formData)

        const res = await fetch('http://34.159.140.212/project', {
            method: 'POST',
            body: JSON.stringify(projectData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })

        console.log(res)

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}





/** Makes a post request to the backend to send a new Newsletter. */
export async function sendNewsletter(newsletterBlocks: Block[]): Promise<void> {
    try {
        const jwt = getJwtCookie()

        const res = await fetch('http://34.159.140.212/newsletter', {
            method: 'POST',
            body: JSON.stringify(newsletterBlocks),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })

        console.log(res)

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}