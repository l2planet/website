import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { InternalChain, InternalLayer2, InternalNewsletter, InternalProject } from '../types/Api'
import { ChildrenProp, FeesTableData, TPSTableData } from '../types/globals'
import API from '../api.json'
import { ApiManager } from '../classes/ApiManager'
import { useRouter } from 'next/router'
import { getApiData } from '../functions/api'

/** The Interface for `ApiContext`. */
interface ApiContextState {
    useChain: () => InternalChain | undefined
    useLayer2: () => InternalLayer2 | undefined
    useProject: () => InternalProject | undefined
    useLayer2WithProjects: () => InternalLayer2 | undefined
    useChains: () => InternalChain[]
    useLayer2s: () => InternalLayer2[]
    useProjects: () => InternalProject[]
    useNewsletter: () => InternalNewsletter | undefined
    useStats: () => [FeesTableData, TPSTableData] | undefined
}

/** The context that stores `ApiContextState`. */
const ApiContext = createContext({} as ApiContextState)

/** The hook to use `ApiContext`. */
export const useApi = () => useContext(ApiContext)

/** The provider component for `ApiContext`. */
export const ApiProvider = ({ children }: ChildrenProp) => {
    const [manager, setManager] = useState<ApiManager | null>(null)

    const router = useRouter()
    const go404 = useCallback(() => { }, [])

    const useChains = useCallback(() => {
        if (manager === null) return []
        return manager.getAllChains()
    }, [manager])

    const useChain = useCallback(() => {
        if (manager === null) return
        const id = router.query.id
        if (id === undefined) {
            go404()
            return
        }
        const currentChain = manager.getChain(id.toString())
        if (currentChain === null) {
            go404()
        } else {
            return currentChain
        }
    }, [manager, go404, router])

    const useLayer2s = useCallback(() => {
        if (manager === null) return []
        return manager.getAllLayer2s()
    }, [manager])

    const useProjects = useCallback(() => {
        if (manager === null) return []
        return manager.getAllProjects()
    }, [manager])

    const useLayer2 = useCallback(() => {
        if (manager == null) return
        const id = router.query.id
        if (id === undefined) {
            go404()
            return
        }
        const currentLayer2 = manager.getLayer2(id.toString(), 'doNotParseProjects')
        if (currentLayer2 === null) {
            go404()
        } else {
            return currentLayer2
        }
    }, [manager, go404, router])

    const useLayer2WithProjects = useCallback(() => {
        if (manager == null) return
        const id = router.query.id
        if (id === undefined) {
            go404()
            return
        }
        const currentLayer2 = manager.getLayer2(id.toString(), 'parseProjects')
        if (currentLayer2 === null) {
            go404()
        } else {
            return currentLayer2
        }
    }, [manager, go404, router])

    const useNewsletter = useCallback(() => {
        return manager?.getNewsletter()
    }, [manager])

    const useStats = useCallback(() => {
        return manager?.getStats()
    }, [manager])

    const useProject = useCallback(() => {
        if (manager === null) return
        const id = router.query.id
        if (id === undefined) {
            go404()
            return
        }
        const currentProject = manager.getProject(id.toString())
        if (currentProject === null) {
            go404()
        } else {
            return currentProject
        }
    }, [manager, go404, router])


    useEffect(() => {
        (async () => {
            try {
                const apiData = await getApiData()
                if (apiData?.chains !== undefined) {
                    setManager(new ApiManager(apiData))
                }
            } catch (e: any) {
                alert(e.message)
            }
        })()
    }, [])

    return (
        <ApiContext.Provider
            value={{
                useChains,
                useLayer2s,
                useChain,
                useLayer2,
                useProject,
                useLayer2WithProjects,
                useNewsletter,
                useStats,
                useProjects,
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}
