import { Block } from '../components/Editor/types';
import { ChartDataItem } from './globals';

export interface InfoEndpointData {
    chains: {
        [chainId in string]?: APIGetChain;
    };

    layer2s: {
        [layer2Id in string]?: APIGetLayer2;
    };

    projects: {
        [projectId in string]?: APIGetProject;
    };

    latest_newsletter: {
        newsletter: string;
        username: string;
    };
}

export interface RawEndpointData {
    layer2s: {
        [layer2Id in string]?: APIGetRawLayer2;
    };
    newsletters: [
        {
            ID: number;
            newsletter: string;
        }
    ];
}

export interface RawFormAuth {
    username: string;
    password: string;
}

export interface APIPostAuth {
    username: string;
    password: string;
}

export interface APIGetLogin {
    code: 200;
    expire: string;
    token: string;
}

export interface ApiGetRegister {}

/** Comes from the chain form on admin panel */
export interface RawFormChain {
    name: string;
    icon: string;
    description: string;
}

// Gets calculated by parsing `raw data` from the form
// Used while sending data to the backend
export interface APIPostChain {
    string_id: string;
    name: string;
    icon: string;
    description: string;
}

// Backend calculates this value
// Server will add new layer2 solutions' IDs to "layer2s" prop
export interface APIGetChain {
    name: string;
    icon: string;
    description: string;
    layer2s: string[];
}

// Gets calculated client side
export interface InternalChain {
    id: string;
    name: string;
    icon: string;
    description: string;
    layer2s: InternalLayer2[];
    l2Categories: string[];
}

// Comes from the layer 2 form on admin panel
export interface RawFormLayer2 {
    chain_id: string;
    name: string;
    status: string;
    icon: string;
    description: string;
    categories: string;
    website: string;
    evm_id: string;
    bridges: RawBridge[];
    gecko: string;
    twitter: string;
    github: string;
    discord: string;
    videos: string;
    investors: string;
    locales: L2Locale[];
}

// Gets calculated by parsing `raw data` from the form
// Used while sending data to the backend
export interface APIPostLayer2 {
    string_id: string;
    chain_id: string;
    name: string;
    status: string;
    icon: string;
    description: string;
    categories: string[];
    website: string;
    evm_id: string;
    bridges: {
        contract_address: string;
        tokens: string[];
    }[];
    gecko?: string;
    twitter?: string;
    github?: string;
    discord?: string;
    videos: string[];
    investors: string[];
    locales: string;
}

export interface RawBridge {
    contract_address: string;
    tokens: string;
}

export interface L2Locale {
    href: string;
    title: string;
}

// Backend calculates this value
// Server will add new projects' IDs to "projects" prop
export interface APIGetLayer2 {
    name: string;
    status: 'testnet' | 'live' | 'close';
    icon: string;
    description: string;
    categories: string[];
    projects: string[];
    website: string;
    twitter?: string;
    gecko?: string;
    github?: string;
    discord?: string;
    videos: string[];
    investors: string[];
    price?: number;
    tvl: number;
    tps: string;
    send: string;
    swap: string;
    tvls: ChartDataItem[];
    locales: string;
}

// Gets calculated client side
export interface InternalLayer2 {
    id: string;
    name: string;
    status: 'testnet' | 'live' | 'close';
    icon: string;
    description: string;
    categories: string[];
    projects: InternalProject[];
    projectCategories: string[];
    website: string;
    twitter?: string;
    gecko?: string;
    github?: string;
    discord?: string;
    videos: string[];
    investors: string[];
    price?: number;
    tvl: number;
    tps: string;
    send: string;
    swap: string;
    tvls: ChartDataItem[];
    locales: L2Locale[];
}

// Backend calculates this value
// Server will add new projects' IDs to "projects" prop
export interface APIGetRawLayer2 {
    chain_id: string;
    evm_id: string;
    name: string;
    status: 'testnet' | 'live' | 'close';
    icon: string;
    description: string;
    categories: string[];
    projects: string[];
    website: string;
    twitter?: string;
    github?: string;
    gecko?: string;
    discord?: string;
    videos: string[];
    investors: string[];
    bridges: {
        contract_address: string;
        tokens: string[];
    }[];
    locales: string;
}

// Gets calculated client side
export interface InternalRawLayer2 {
    chain_id: string;
    evm_id: string;
    id: string;
    name: string;
    status: 'testnet' | 'live' | 'close';
    icon: string;
    description: string;
    categories: string[];
    projects: string[];
    website: string;
    twitter?: string;
    gecko?: string;
    github?: string;
    discord?: string;
    videos: string[];
    investors: string[];
    bridges: {
        contract_address: string;
        tokens: string[];
    }[];
    locales: L2Locale[];
}

export interface RawFormProject {
    chain_id: string;
    l2_ids: string;
    name: string;
    icon: string;
    description: string;
    categories: string;
    website: string;
    twitter: string;
    github: string;
}

export interface APIPostProject {
    l2_ids: string[];
    string_id: string;
    name: string;
    icon: string;
    description: string;
    categories: string[];
    website?: string;
    twitter?: string;
    github?: string;
}

export interface APIGetProject {
    name: string;
    icon: string;
    description: string;
    categories: string[];
    website?: string;
    twitter?: string;
    github?: string;
}

export interface InternalProject {
    id: string;
    name: string;
    icon: string;
    description: string;
    categories: string[];
    website?: string;
    twitter?: string;
    github?: string;
}

export interface InternalRawProject {
    layer2_ids: string[];
    id: string;
    name: string;
    icon: string;
    description: string;
    categories: string[];
    website?: string;
    twitter?: string;
    github?: string;
}

export interface InternalNewsletter {
    author: string;
    blocks: Block[];
}
