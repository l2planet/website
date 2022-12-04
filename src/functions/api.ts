import { formatChain, formatLayer2, formatProject } from './format'
import {
    APIGetLogin,
    APIPostChain,
    RawFormChain,
    RawFormAuth,
    RawFormLayer2,
    RawFormProject,
    APIPostLayer2,
    APIPostProject,
    InfoEndpointData,
    InternalChain,
    InternalLayer2,
    InternalProject,
} from '../types/Api'
import { getJwtCookie, setJwtCookie } from './cookie'
import { Block } from '../components/Editor/types'

/** Makes a login request to the backend with given form data. */
export async function authLogin(formData: RawFormAuth): Promise<void> {
    try {
        const res = await fetch('https://api.l2planet.xyz/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.ok) {
            const json = (await res.json()) as APIGetLogin
            localStorage.setItem('username', formData.username)
            setJwtCookie(json.token, json.expire)
        } else {
            throw new Error('Wrong password or username.')
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}

/** Makes a register request to the backend with given form data. */
export async function authRegister(formData: RawFormAuth): Promise<void> {
    try {
        const res = await fetch('https://api.l2planet.xyz/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('Cannot make a request.')
    }
}

/** Makes a post request to the backend to send a new Chain. */
export async function sendChain(
    formData: RawFormChain,
    type: 'PATCH' | 'POST',
    allChains: InternalChain[]
): Promise<void> {
    try {
        const jwt = getJwtCookie()
        const chainData: APIPostChain = formatChain(formData, type === 'PATCH' ? 'update' : 'new', allChains)

        const res = await fetch('https://api.l2planet.xyz/auth/chain', {
            method: type,
            body: JSON.stringify(chainData),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })


        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}

/** Makes a post request to the backend to send a new Layer 2. */
export async function sendLayer2(
    formData: RawFormLayer2,
    type: 'PATCH' | 'POST',
    allChains: InternalChain[],
    allLayer2s: InternalLayer2[]
): Promise<void> {
    try {
        const jwt = getJwtCookie()
        const layer2Data: APIPostLayer2 = formatLayer2(
            formData,
            type === 'PATCH' ? 'update' : 'new',
            allChains,
            allLayer2s
        )

        const res = await fetch('https://api.l2planet.xyz/auth/solution', {
            method: type,
            body: JSON.stringify(layer2Data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })


        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}

/** Makes a post request to the backend to send a new Project. */
export async function sendProject(
    formData: RawFormProject,
    type: 'PATCH' | 'POST',
    allLayer2s: InternalLayer2[],
    allProjects: InternalProject[]
): Promise<void> {
    try {
        const jwt = getJwtCookie()
        const projectData: APIPostProject = formatProject(
            formData,
            type === 'PATCH' ? 'update' : 'new',
            allLayer2s,
            allProjects
        )

        const res = await fetch('https://api.l2planet.xyz/auth/project', {
            method: type,
            body: JSON.stringify(projectData),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })

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
        const data = JSON.stringify({
            username: localStorage.getItem('username') ?? '',
            newsletter: JSON.stringify(newsletterBlocks),
        })

        const res = await fetch('https://api.l2planet.xyz/auth/newsletter', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}


/** Makes a post request to the backend to send a new Newsletter. */
export async function sendEmailToSubscribe(email: string): Promise<void> {
    try {
        const data = `{ "email": "${email}" }`

        const res = await fetch('https://api.l2planet.xyz/subscribe', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok) {
            throw new Error(`Server didn't accept your request.`)
        }
    } catch (e: any) {
        if (e?.message) throw e
        throw new Error('An unknown error is occured.')
    }
}
