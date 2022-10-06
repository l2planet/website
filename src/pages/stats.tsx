/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Flex4StatsTables } from '../components/Div'
import { SEO } from '../components/SEO'
import { TableTPS, TableTVL } from '../components/Table'
import { useApi } from '../contexts/ApiContext'

const Stats: NextPage = () => {
    const { useTVLs } = useApi()
    const tvls = useTVLs()

    return (
        <>
            <SEO
                title='L2 Planet | Stats'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            {tvls && (
                <Flex4StatsTables>
                    <TableTVL data={tvls} />
                    <TableTPS data={[]} />
                </Flex4StatsTables>
            )}
        </>
    )
}

export default Stats
