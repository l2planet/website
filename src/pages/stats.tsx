/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { Flex4StatsTables } from '../components/Div'
import { HStats } from '../components/H'
import { SEO } from '../components/SEO'
import { TableTPS, TableFees } from '../components/Table'
import { useStats } from '../hooks/useStats'

const Stats: NextPage = () => {
    const { feeStats, tpsStats } = useStats()

    return (
        <>
            <SEO title='L2 Planet | Stats' description='L2 Planet' favicon='/favicon.ico' />

            <HStats>Stats</HStats>

            {feeStats && tpsStats && (
                <Flex4StatsTables>
                    <TableFees data={feeStats} />
                    <TableTPS data={tpsStats} />
                </Flex4StatsTables>
            )}
        </>
    )
}

export default Stats
