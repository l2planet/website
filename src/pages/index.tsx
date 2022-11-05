/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { CardIndex } from '../components/Card'
import { H1 } from '../components/H'
import { P1 } from '../components/P'
import { SectionIndexCards, SectionIndexIntro } from '../components/Section'
import { SEO } from '../components/SEO'
import { useAllChains } from '../hooks/useAllChains'

const Home: NextPage = () => {
    const { chains } = useAllChains()

    return (
        <>
            <SEO title='L2 Planet | Home' description='L2 Planet' favicon='/favicon.ico' />

            <SectionIndexIntro>
                <H1>Welcome to Layer-2 Planet</H1>
                <P1>Chains that have a Layer-2 solution are like countries on L2 Planet. Choose a country you want to visit. We recommend visiting Ethereum, especially. It is one of the popular destinations for travelers these days :)</P1>
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
