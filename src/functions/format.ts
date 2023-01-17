import {
    APIPostChain,
    APIPostLayer2,
    APIPostProject,
    InternalChain,
    InternalLayer2,
    InternalProject,
    L2Locale,
    RawFormChain,
    RawFormLayer2,
    RawFormProject
} from '../types/Api';
import { cleanWords } from './cleanWords';
import { getCoinGeckoId } from './getCoinGeckoId';
import { getGitHubName } from './getGithubName';
import { getImageUrl } from './getImageUrl';
import { getTwitterAccountId } from './getTwitterId';
import { getYoutubeId } from './getYoutubeId';

/**
 Converts `RawFormChain` data into `ApiPostChain`.
 
 If an error occurs, it throws it. So don't forget to catch.
 */
export const formatChain = (
    formData: RawFormChain,
    method: 'update' | 'new',
    allChains: InternalChain[]
): APIPostChain => {
    Object.entries(formData).forEach(([_key, _]) => {
        const key = _key as keyof RawFormChain;
        formData[key] = cleanWords(formData[key]);
    });

    const string_id = formData.name.split(' ').join('_').toLowerCase();
    const name = formData.name;
    const icon = formData.icon;
    const description = formData.description.split('\n').join(' ');

    if (method === 'new' && allChains.find((chain) => chain.id === string_id)) {
        throw new Error(`'${name}' already exists. Wanna update it?`);
    }

    if (name.length === 0) {
        throw new Error('Chain Name is empty!');
    }

    if (!/^http[^\?]*.(jpg|jpeg|gif|png|webp|svg)(\?(.*))?$/gim.test(icon)) {
        throw new Error('Icon URL is not valid!');
    }

    if (description.length === 0) {
        throw new Error('Description is empty!');
    }

    const data: APIPostChain = {
        string_id,
        name,
        icon,
        description,
    };

    return data;
};

/**
 Converts `RawFormLayer2` data into `APIPostLayer2`.
 
 If an error occurs, it throws it. So don't forget to catch.
 */
export const formatLayer2 = (
    formData: RawFormLayer2,
    method: 'update' | 'new',
    allChains: InternalChain[],
    allLayer2s: InternalLayer2[]
): APIPostLayer2 => {
    const string_id = cleanWords(formData.name).split(' ').join('_').toLowerCase();
    const chain_id = cleanWords(formData.chain_id);
    const name = cleanWords(formData.name);
    const icon = cleanWords(formData.icon);
    let status = cleanWords(formData.status);
    status = status == 'live' ? 'live' : status == 'testnet' ? 'testnet' : 'close';
    const description = cleanWords(formData.description).split('\n').join(' ');
    const categories = cleanWords(formData.categories)
        .split(',')
        .map((cat) => cat.trim());
    const website = cleanWords(formData.website);
    const evm_id = cleanWords(formData.evm_id);
    const bridges: APIPostLayer2['bridges'] = [];
    const gecko = getCoinGeckoId(cleanWords(formData.gecko)) ?? '';
    const twitter = getTwitterAccountId(cleanWords(formData.twitter)) ?? '';
    const github = getGitHubName(cleanWords(formData.github)) ?? '';
    const discord = cleanWords(formData.discord);
    const videos: string[] = [];
    const investors: string[] = [];
    const locales: L2Locale[] = [];

    formData.locales.forEach(({ href, title }) => {
        const _href = href.trim();
        const _title = title.trim();

        if (!_href || !_title) return;

        locales.push({ href: _href, title: _title });
    });

    formData.bridges.forEach((bridge) => {
        const contract_address = cleanWords(bridge.contract_address);
        if (!contract_address) return;
        const tokens: string[] = [];
        cleanWords(bridge.tokens)
            .split(',')
            .forEach((token) => {
                const _token = cleanWords(token);
                if (token.length > 0) {
                    tokens.push(_token);
                }
            });

        bridges.push({ contract_address, tokens });
    });

    formData.videos
        .split(',')
        .map((vid) => getYoutubeId(vid.trim()))
        .forEach((id) => (id !== null ? videos.push(id) : {}));
    formData.investors
        .split(',')
        .map((inv) => inv.trim())
        .forEach((url) => (getImageUrl(url) ? investors.push(url) : {}));

    if (!allChains.find((chain) => chain.id === chain_id)) {
        throw new Error(`Chain '${chain_id}' does not exist!`);
    }

    if (method === 'new' && allLayer2s.find((l2) => l2.id === string_id)) {
        throw new Error(`'${name}' already exists. Wanna update it?`);
    }

    if (name.length === 0) {
        throw new Error('Chain Name is empty!');
    }

    if (!/^http[^\?]*.(jpg|jpeg|gif|png|webp|svg)(\?(.*))?$/gim.test(icon)) {
        throw new Error('Icon URL is not valid!');
    }

    if (description.length === 0) {
        throw new Error('Description is empty!');
    }

    if (!formData.website.includes('https://')) {
        throw new Error('Website URL is not valid.');
    }

    const data: APIPostLayer2 = {
        string_id,
        chain_id,
        name,
        status,
        icon,
        description,
        categories,
        bridges,
        evm_id,
        investors,
        videos,
        website,
        gecko,
        twitter,
        github,
        discord,
        locales: JSON.stringify(locales),
    };

    return data;
};

/**
 Converts `RawFormProject` data into `APIPostProject`.
 
 If an error occurs, it throws it. So don't forget to catch.
 */
export const formatProject = (
    formData: RawFormProject,
    method: 'new' | 'update',
    allLayer2s: InternalLayer2[],
    allProjects: InternalProject[]
): APIPostProject => {
    Object.entries(formData).forEach(([_key, _]) => {
        const key = _key as keyof RawFormProject;
        formData[key] = cleanWords(formData[key]);
    });

    const l2_ids: string[] = [];
    formData.l2_ids.split(',').forEach((l2_id) => {
        const id = l2_id.trim();
        if (id.length > 0) {
            l2_ids.push(id);
        }
    });
    const string_id = cleanWords(formData.name).split(' ').join('_').toLowerCase();
    const name = formData.name;
    const icon = formData.icon;
    const description = formData.description.split('\n').join(' ');
    const categories = formData.categories.split(',').map((cat) => cat.trim());
    const twitter = getTwitterAccountId(formData.twitter) ?? '';
    const website = formData.website.includes('https://') ? formData.website : '';
    const github = getGitHubName(formData.github) ?? '';

    l2_ids.forEach((l2_id) => {
        if (!allLayer2s.find((l2) => l2.id === l2_id)) {
            throw new Error(`Layer 2 '${l2_id}' does not exist!`);
        }
    });

    if (method === 'new' && allProjects.find((project) => project.id === string_id)) {
        throw new Error(`'${name}' already exists. Wanna update it?`);
    }

    if (name.length === 0) {
        throw new Error('Chain Name is empty!');
    }

    if (!/^http[^\?]*.(jpg|jpeg|gif|png|webp|svg)(\?(.*))?$/gim.test(icon)) {
        throw new Error('Icon URL is not valid!');
    }

    if (description.length === 0) {
        throw new Error('Description is empty!');
    }

    const data: APIPostProject = {
        string_id,
        l2_ids,
        name,
        icon,
        description,
        categories,
        twitter,
        website,
        github,
    };

    return data;
};
