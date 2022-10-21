/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useMemo } from 'react'
import { CardIndex } from '../components/Card'
import { H1 } from '../components/H'
import { P1 } from '../components/P'
import { Section, SectionIndexCards, SectionIndexIntro } from '../components/Section'
import { SEO } from '../components/SEO'
import { useApi } from '../contexts/ApiContext'
import { useAllChains } from '../hooks/useAllChains'

const Home: NextPage = () => {
    const { chains } = useAllChains()

    return (
        <>
            <SEO title='L2 Planet | Home' description='L2 Planet' favicon='/favicon.ico' />

            <SectionIndexIntro>
                <H1>Welcome to Layer 2 Planet</H1>
                <P1>Choose your path on the discovery of planets.</P1>
            </SectionIndexIntro>

            <SectionIndexCards>
                {chains?.map((chain) => (
                    <CardIndex key={chain.name} {...chain} />
                ))}
            </SectionIndexCards>
        </>
    )
}

export default Home
