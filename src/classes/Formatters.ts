import { format } from "path";
import { cleanWords } from "../functions/cleanWords";
import { getCoinGeckoId } from "../functions/getCoinGeckoId";
import { getTwitterId } from "../functions/getTwitterId";
import { getYoutubeId } from "../functions/getYoutubeId";
import { ImageURL } from "./Parsers";
import { RawFormChain, RawFormLayer2, RawFormProject, RawFormLogin, APIPostChain, APIPostLayer2, APIPostProject } from "../types/Api";

export class ChainFormatter {
    constructor(chainFormData: RawFormChain) {
        this._data = chainFormData
    }

    private _data: RawFormChain


  
    private clean() {
        Object.entries(this._data).forEach(([_key, _]) => {
            const key = _key as keyof RawFormChain
            this._data[key] = cleanWords(this._data[key])
        })
    }


    format(): APIPostChain | null {
        this.clean()

        const id = this._data.name.split(' ').join('_').toLowerCase()
        const name = this._data.name
        const icon = this._data.icon.startsWith('https://') && this._data.icon.includes('.svg') ? this._data.icon : null
        const description = this._data.description.split('\n').join(' ')

        return icon ? {
            id,
            name,
            icon,
            description
        } : null
    }
}




export class Layer2Formatter {
    constructor(chainFormData: RawFormLayer2) {
        this._data = chainFormData
    }

    private _data: RawFormLayer2



    private clean() {
        Object.entries(this._data).forEach(([_key, _]) => {
            const key = _key as keyof RawFormLayer2
            this._data[key] = cleanWords(this._data[key])
        })
    }


    format(): APIPostLayer2 | null {
        this.clean()

        const id = this._data.name.split(' ').join('_').toLowerCase()
        const name = this._data.name
        const icon = this._data.icon.startsWith('https://') && this._data.icon.includes('.svg') ? this._data.icon : null
        const description = this._data.description.split('\n').join(' ')
        const categories = this._data.categories.split(',').map(cat => cat.trim())
        const website = this._data.website.includes('https://') ? this._data.website : null
        const evmId = this._data.evmId
        const bridges = this._data.bridges.split(',').map(bri => bri.trim())
        const tokens = this._data.tokens.split(',').map(tok => tok.trim())
        const gecko = getCoinGeckoId(this._data.gecko)
        const twitter = getTwitterId(this._data.twitter)
        const videos: string[] = []
        this._data.videos.split(',').map(vid => getYoutubeId(vid.trim())).forEach(id => id !== null ? videos.push(id): {})
        const investors: string[] = []
        this._data.investors.split(',').map(inv => inv.trim()).forEach(url => new ImageURL(url).getURL() ? investors.push(url): {})

        return icon && website ? {
            id,
            name,
            icon,
            description,
            categories,
            bridges,
            evmId,
            investors,
            tokens,
            videos,
            website,
            gecko: gecko ? gecko : undefined,
            twitter: twitter ? twitter: undefined,
        } : null
    }
}




export class ProjectFormatter {
    constructor(chainFormData: RawFormProject) {
        this._data = chainFormData
    }

    private _data: RawFormProject


    private clean() {
        Object.entries(this._data).forEach(([_key, _]) => {
            const key = _key as keyof RawFormProject
            this._data[key] = cleanWords(this._data[key])
        })
    }


    format(): APIPostProject | null {
        this.clean()

        const name = this._data.name
        const icon = this._data.icon.startsWith('https://') && this._data.icon.includes('.svg') ? this._data.icon : null
        const description = this._data.description.split('\n').join(' ')
        const categories = this._data.categories.split(',').map(cat => cat.trim())
        const twitter = getTwitterId(this._data.twitter)
        const website = this._data.website.includes('https://') ? this._data.website : null

        return icon ? {
            name,
            icon,
            description,
            categories,
            twitter: twitter ? twitter : undefined,
            website: website ? website : undefined,
        } : null
    }
}