/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Flex4StatsTables } from '../components/Div'
import { HStats } from '../components/H'
import { Seo } from '../components/Seo'
import { TableTPS, TableFees } from '../components/Table'
import { useStats } from '../hooks/useStats'

const Stats: NextPage = () => {
    const { feeStats, tpsStats } = useStats()

    return (
        <>
            <Seo title='L2 Planet | Stats' />

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
