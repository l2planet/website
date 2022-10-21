import { useMemo } from 'react'
import { useInfoEndpoint } from '../contexts/InfoEndpointContext'
import { APIGetLayer2 } from '../types/Api'
import { FeesTableData, TPSTableData } from '../types/globals'

/**
 * The hook that enables getting the stats of layer 2 solutions.
 *
 * # Usage
 * ```tsx
 * export const Comp = () => {
 *     const { feeStats, tpsStats } = useStats()
 *     return </>
 * }
 * ```
 */
export function useStats(): Stats {
    // Extract `endpointInfo` and `navigateToNotFound`.
    const { endpointInfo } = useInfoEndpoint()

    // Declare `latestNewsletter` memoized value.
    const stats: Stats = useMemo(() => {
        const feeStats: FeesTableData = []
        const tpsStats: TPSTableData = []

        if (!endpointInfo) return {}

        for (const layer2 of Object.values(endpointInfo.layer2s)) {
            const tps = parseFloat((layer2 as APIGetLayer2).tps)

            tpsStats.push({
                name: (layer2 as APIGetLayer2).name,
                icon: (layer2 as APIGetLayer2).icon,
                tps: Number.isNaN(tps) ? 0 : tps,
            })

            const send = parseFloat((layer2 as APIGetLayer2).send)

            const swap = parseFloat((layer2 as APIGetLayer2).swap)

            feeStats.push({
                name: (layer2 as APIGetLayer2).name,
                send: Number.isNaN(send) ? 0 : send,
                swap: Number.isNaN(swap) ? 0 : swap,
                icon: (layer2 as APIGetLayer2).icon,
            })
        }

        return {
            feeStats: feeStats.sort((a, b) => a.swap - b.swap),
            tpsStats: tpsStats.sort((a, b) => b.tps - a.tps),
        }
    }, [endpointInfo])

    // Return `stats`.
    return stats
}

/** The interface for the return value of `useStats`. */
interface Stats {
    feeStats?: FeesTableData
    tpsStats?: TPSTableData
}
