import { format } from "path";
import { cleanWords } from "./cleanWords";
import { getCoinGeckoId } from "./getCoinGeckoId";
import { getTwitterId } from "./getTwitterId";
import { getYoutubeId } from "./getYoutubeId";
import { ImageURL } from "../classes/Parsers";
import { RawFormChain, RawFormLayer2, RawFormProject, RawFormAuth, APIPostChain, APIPostLayer2, APIPostProject } from "../types/Api";


/**
 Converts `RawFormChain` data into `ApiPostChain`.
 
 If an error occurs, it throws it. So don't forget to catch.
 */
export const formatChain = (formData: RawFormChain): APIPostChain => {
    Object.entries(formData).forEach(([_key, _]) => {
        const key = _key as keyof RawFormChain
        formData[key] = cleanWords(formData[key])
    })

    const id = formData.name.split(' ').join('_').toLowerCase()
    const name = formData.name
    const icon = formData.icon
    const description = formData.description.split('\n').join(' ')


    if (!formData.icon.startsWith('https://')) {
        throw new Error('Icon URL is not valid.')
    }

    if (!formData.icon.includes('.svg')) {
        throw new Error('Icon is not an SVG file')
    }


    return {
        id,
        name,
        icon,
        description,
    }

}





/**
 Converts `RawFormLayer2` data into `APIPostLayer2`.
 
 If an error occurs, it throws it. So don't forget to catch.
 */
export const formatLayer2 = (formData: RawFormLayer2): APIPostLayer2 => {
    Object.entries(formData).forEach(([_key, _]) => {
        const key = _key as keyof RawFormLayer2
        formData[key] = cleanWords(formData[key])
    })

    const id = formData.name.split(' ').join('_').toLowerCase()
    const name = formData.name
    const icon = formData.icon
    const description = formData.description.split('\n').join(' ')
    const categories = formData.categories.split(',').map(cat => cat.trim())
    const website = formData.website
    const evm_id = formData.evm_id
    const bridges = formData.bridges.split(',').map(bri => bri.trim())
    const tokens = formData.tokens.split(',').map(tok => tok.trim())
    const gecko = getCoinGeckoId(formData.gecko) || undefined
    const twitter = getTwitterId(formData.twitter) || undefined
    const videos: string[] = []
    const investors: string[] = []

    formData.videos.split(',').map(vid => getYoutubeId(vid.trim())).forEach(id => id !== null ? videos.push(id) : {})
    formData.investors.split(',').map(inv => inv.trim()).forEach(url => new ImageURL(url).getURL() ? investors.push(url) : {})

    if (!formData.icon.startsWith('https://')) {
        throw new Error('Icon URL is not valid.')
    }

    if (!formData.icon.includes('.svg')) {
        throw new Error('Icon is not an SVG file.')
    }

    if (!formData.website.includes('https://')) {
        throw new Error('Website URL is not valid.')
    }


    return {
        id,
        name,
        icon,
        description,
        categories,
        bridges,
        evm_id,
        investors,
        tokens,
        videos,
        website,
        gecko,
        twitter,
    }

}







/**
 Converts `RawFormProject` data into `APIPostProject`.
 
 If an error occurs, it throws it. So don't forget to catch.
 */
export const formatProject = (formData: RawFormProject): APIPostProject => {
    Object.entries(formData).forEach(([_key, _]) => {
        const key = _key as keyof RawFormProject
        formData[key] = cleanWords(formData[key])
    })

    const name = formData.name
    const icon = formData.icon
    const description = formData.description.split('\n').join(' ')
    const categories = formData.categories.split(',').map(cat => cat.trim())
    const twitter = getTwitterId(formData.twitter) || undefined
    const website = formData.website.includes('https://') ? formData.website : undefined

    if (!formData.icon.startsWith('https://')) {
        throw new Error('Icon URL is not valid.')
    }

    if (!formData.icon.includes('.svg')) {
        throw new Error('Icon is not an SVG file.')
    }

    return {
        name,
        icon,
        description,
        categories,
        twitter,
        website,
    }

}


