import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import {
    InternalChain,
    InternalLayer2,
} from '../types/Api'
import { ChildrenProp } from '../types/globals'
import API from '../api.json'
import { ApiManager } from '../classes/ApiManager'
import { useRouter } from 'next/router'
import { getApiData } from '../functions/api'

/** The Interface for `ApiContext`. */
interface ApiContextState {
    useChain: () => InternalChain | undefined
    useLayer2: () => InternalLayer2 | undefined
    useLayer2WithProjects: () => InternalLayer2 | undefined
    useChains: () => InternalChain[]
    useLayer2s: () => InternalLayer2[]
}

/** The context that stores `ApiContextState`. */
const ApiContext = createContext({} as ApiContextState)

/** The hook to use `ApiContext`. */
export const useApi = () => useContext(ApiContext)

/** The provider component for `ApiContext`. */
export const ApiProvider = ({ children }: ChildrenProp) => {
    const [manager, setManager] = useState<ApiManager | null>(null)

    const router = useRouter()
    const go404 = useCallback(() => {}, [])

    const useChains = useCallback(() => {
        if (manager === null) return []
        return manager.getAllChains()
    }, [manager])

    const useChain = useCallback(() => {
        if (manager === null) return
        const chain = router.query.chain
        if (chain === undefined) {
            go404()
            return
        }
        const currentChain = manager.getChain(chain.toString())
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

    const useLayer2 = useCallback(() => {
        if (manager == null) return
        const layer2 = router.query.layer2
        if (layer2 === undefined) {
            go404()
            return
        }
        const currentLayer2 = manager.getLayer2(layer2.toString(), 'doNotParseProjects')
        if (currentLayer2 === null) {
            go404()
        } else {
            return currentLayer2
        }
    }, [manager, go404, router])

    const useLayer2WithProjects = useCallback(() => {
        if (manager == null) return
        const layer2 = router.query.layer2
        if (layer2 === undefined) {
            go404()
            return
        }
        const currentLayer2 = manager.getLayer2(layer2.toString(), 'parseProjects')
        if (currentLayer2 === null) {
            go404()
        } else {
            return currentLayer2
        }
    }, [manager, go404,router])

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
                useLayer2WithProjects,
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}
