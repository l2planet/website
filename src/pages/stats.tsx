/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Flex4StatsTables } from '../components/Div'
import { SEO } from '../components/SEO'
import { TableTPS, TableFees } from '../components/Table'
import { useApi } from '../contexts/ApiContext'

const Stats: NextPage = () => {
    const { useTVLs } = useApi()
    const tvls = useTVLs()

    return (
        <>
            <SEO title='L2 Planet | Stats' description='L2 Planet' favicon='/favicon.ico' />

            {tvls && (
                <Flex4StatsTables>
                    <TableFees data={tvls} />
                    <TableTPS
                        data={tvls.map((tvl) => ({ name: tvl.name, icon: tvl.icon, tps: '0' }))}
                    />
                </Flex4StatsTables>
            )}
        </>
    )
}

export default Stats
