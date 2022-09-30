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
    const go404 = useCallback(() => router.push('/404'), [router])

    const useChains = useCallback(() => {
        if (manager === null) return []
        return manager.getAllChains()
    }, [manager])

    const useChain = useCallback(() => {
        if (manager === null) return
        const currentChain = manager.getChainOfPage()
        if (currentChain === null) {
            go404()
        } else {
            return currentChain
        }
    }, [manager, go404])

    const useLayer2s = useCallback(() => {
        if (manager === null) return []
        return manager.getAllLayer2s()
    }, [manager])

    const useLayer2 = useCallback(() => {
        if (manager == null) return
        const currentLayer2 = manager.getLayer2OfPage()
        if (currentLayer2 === null) {
            go404()
        } else {
            return currentLayer2
        }
    }, [manager, go404])

    const useLayer2WithProjects = useCallback(() => {
        if (manager == null) return
        const currentLayer2 = manager.getLayer2OfPageWithProjects()
        if (currentLayer2 === null) {
            go404()
        } else {
            return currentLayer2
        }
    }, [manager, go404])

    useEffect(() => {
        (async () => {
            try {
                setManager(new ApiManager(await getApiData()))
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
