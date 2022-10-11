import { Block } from '../components/Editor/types'
import { getLayer2Categories, getProjectCategories } from '../functions/getAvailableCategories'
import {
    APIGetLayer2,
    APIPrimaryData,
    InternalChain,
    InternalLayer2,
    InternalNewsletter,
    InternalProject,
} from '../types/Api'
import { StatusProps, FeesTableData, TPSTableData } from '../types/globals'

function getPaths() {
    return location.pathname.split('/').slice(1)
}

const getChainPath = () => getPaths()[1]
const getLayer2Path = () => getPaths()[1]

export class ApiManager {
    constructor(initData: APIPrimaryData) {
        this.data = initData
    }

    private data: APIPrimaryData

    getProjects(l2Id: string): InternalProject[] | null {
        const l2 = this.data.layer2s[l2Id]
        if (l2 !== undefined) {
            const projects: InternalProject[] = []
            for (const projectId of l2.projects) {
                const project = this.data.projects[projectId]
                if (project !== undefined) {
                    projects.push(project)
                }
            }
            return projects
        } else {
            return null
        }
    }

    getLayer2(id: string, opt: 'parseProjects' | 'doNotParseProjects'): InternalLayer2 | null {
        const layer2 = this.data.layer2s[id]
        if (layer2 !== undefined) {
            const projects = opt === 'parseProjects' ? this.getProjects(id) : []
            if (projects !== null) {
                const projectCategories =
                    opt === 'parseProjects' ? getProjectCategories(projects) : []
                return {
                    id: id,
                    name: layer2.name,
                    status: layer2.status as StatusProps['status'],
                    icon: layer2.icon,
                    description: layer2.description,
                    categories: layer2.categories,
                    projects: projects,
                    projectCategories: projectCategories,
                    website: layer2.website,
                    twitter: layer2.twitter,
                    gecko: layer2.gecko,
                    videos: layer2.videos,
                    investors: layer2.investors,
                    price: layer2.price,
                    tvl: layer2.tvl,
                    tvls: layer2.tvls,
                    tps: layer2.tps,
                }
            }
        }
        return null
    }

    getChain(id: string): InternalChain | null {
        const chain = this.data.chains[id]
        const layer2s: InternalLayer2[] = []
        if (chain !== undefined) {
            for (const layer2Id of chain.layer2s) {
                const layer2 = this.data.layer2s[layer2Id]
                if (layer2 !== undefined) {
                    layer2s.push({ ...layer2, id: layer2Id } as any)
                }
            }
            return {
                id: id,
                name: chain.name,
                icon: chain.icon,
                description: chain.description,
                layer2s: layer2s,
                l2Categories: getLayer2Categories(layer2s),
            }
        }
        return null
    }

    getAllChains(): InternalChain[] {
        return Object.entries(this.data.chains).map(([id, chain]: any) => ({
            ...chain,
            id,
        }))
    }

    getAllLayer2s(): InternalLayer2[] {
        return Object.entries(this.data.layer2s).map(([id, layer2]: any) => ({
            ...layer2,
            id,
        }))
    }

    getChainOfPage(): InternalChain | null {
        const id = getChainPath()
        const chain = this.getChain(id)
        return chain ? chain : null
    }

    getLayer2OfPage(): InternalLayer2 | null {
        const id = getLayer2Path()
        const layer2 = this.getLayer2(id, 'doNotParseProjects')
        return layer2 ? layer2 : null
    }
    getLayer2OfPageWithProjects(): InternalLayer2 | null {
        const id = getLayer2Path()
        const layer2 = this.getLayer2(id, 'parseProjects')
        return layer2 ? layer2 : null
    }

    getNewsletter(): InternalNewsletter {
        return {
            author: this.data.latest_newsletter.username,
            blocks: JSON.parse(this.data.latest_newsletter.newsletter) as Block[],
        }
    }



    getStats(): [FeesTableData,TPSTableData] {
        const fees: FeesTableData = []
        const tpss: TPSTableData = []

        for (const l2 of Object.values(this.data.layer2s)) {
            const tps = parseFloat((l2 as APIGetLayer2).tps)
            tpss.push({
                name: (l2 as APIGetLayer2).name,
                icon: (l2 as APIGetLayer2).icon,
                tps: Number.isNaN(tps) ? 0 : tps,
            })

            fees.push({
                name: (l2 as APIGetLayer2).name,
                send: 0,
                swap: 0,
                icon: (l2 as APIGetLayer2).icon,
            })
        }

        return [fees, tpss]
    }
}
