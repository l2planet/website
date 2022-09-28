import { ChartDataItem } from "./globals"

export interface APIPrimaryData {
    chains: {
        [chainId in string]?: APIGetChain
    }
    layer2s: {
        [layer2Id in string]?: APIGetLayer2
    }
    projects: {
        [projectId in string]?: APIGetProject
    }
}











export interface RawFormAuth {
    username: string
    password: string
}

export interface APIPostLogin {
    username: string
    password: string
}

export interface APIGetLogin {
    code: 200,
    expire: string,
    token: string,
}







/** Comes from the chain form on admin panel */
export interface RawFormChain {
    name: string
    icon: string
    description: string
}

// Gets calculated by parsing `raw data` from the form
// Used while sending data to the backend
export interface APIPostChain {
    id: string
    name: string
    icon: string
    description: string
}


// Backend calculates this value 
// Server will add new layer2 solutions' IDs to "layer2s" prop
export interface APIGetChain {
    name: string
    icon: string
    description: string
    layer2s: string[]
}


// Gets calculated client side
export interface InternalChain {
    id: string
    name: string
    icon: string
    description: string
    layer2s: InternalLayer2[]
    l2Categories: string[]
}









// Comes from the layer 2 form on admin panel
export interface RawFormLayer2 {
    name: string
    icon: string
    description: string
    categories: string
    website: string
    evmId: string
    bridges: string
    tokens: string
    gecko: string
    twitter: string
    videos: string
    investors: string
}


// Gets calculated by parsing `raw data` from the form
// Used while sending data to the backend
export interface APIPostLayer2 {
    id: string
    name: string
    icon: string
    description: string
    categories: string[]
    website: string
    evmId: string
    bridges: string[]
    tokens: string[]
    gecko?: string
    twitter?: string
    videos: string[]
    investors: string[]
}



// Backend calculates this value 
// Server will add new projects' IDs to "projects" prop
export interface APIGetLayer2 {
    name: string
    icon: string
    description: string
    categories: string[]
    projects: string[]
    website: string
    twitter?: string
    gecko?: string
    videos: string[]
    investors: string[]
    price?: number
    tvl: number
    tvls: {
        daily: ChartDataItem[] // max. 7 pcs of `ChartDataItem`
        weekly: ChartDataItem[]
        monthly: ChartDataItem[]
        quarterly: ChartDataItem[]
        yearly: ChartDataItem[]
    }
}


// Gets calculated client side
export interface InternalLayer2 {
    id: string
    name: string
    icon: string
    description: string
    categories: string[]
    projects: InternalProject[]
    projectCategories: string[]
    website: string
    twitter?: string
    gecko?: string
    videos: string[]
    investors: string[]
    price?: number
    tvl: number
    tvls: {
        daily: ChartDataItem[],
        weekly: ChartDataItem[],
        monthly: ChartDataItem[],
        quarterly: ChartDataItem[],
        yearly: ChartDataItem[],
    }
}













export interface RawFormProject {
    name: string
    icon: string
    description: string
    categories: string
    website: string
    twitter: string
}


export interface APIPostProject {
    name: string
    icon: string
    description: string
    categories: string[]
    website?: string
    twitter?: string
}



export interface APIGetProject {
    name: string
    icon: string
    description: string
    categories: string[]
    website?: string
    twitter?: string
}


export interface InternalProject {
    name: string
    icon: string
    description: string
    categories: string[]
    website?: string
    twitter?: string
}
