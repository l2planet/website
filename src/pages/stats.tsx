/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Flex4StatsTables } from '../components/Div'
import { HStats } from '../components/H'
import { SEO } from '../components/SEO'
import { TableTPS, TableFees } from '../components/Table'
import { useApi } from '../contexts/ApiContext'

const Stats: NextPage = () => {
    const { useStats } = useApi()
    const [fees, tpss] = useStats() ?? []

    return (
        <>
            <SEO title='L2 Planet | Stats' description='L2 Planet' favicon='/favicon.ico' />

            <HStats>Stats</HStats>

            {fees && tpss && (
                <Flex4StatsTables>
                    <TableFees data={fees} />
                    <TableTPS data={tpss} />
                </Flex4StatsTables>
            )}
        </>
    )
}

export default Stats
