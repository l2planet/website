/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { CardIndex } from '../components/Card'
import { H1, H2 } from '../components/H'
import { SubscribeForm } from '../components/SubscribeForm'
import { P1 } from '../components/P'
import { SectionIndexCards, SectionIndexIntro, SectionIndexSubscribe, SectionPartners } from '../components/Section'
import { SEO } from '../components/SEO'
import { useAllChains } from '../hooks/useAllChains'
import { wrapn } from 'wrapn'
import { Partners } from '../components/Partners'

const Home: NextPage = () => {
    const { chains } = useAllChains()

    return (
        <>
            <SEO title='L2 Planet | Home' description='L2 Planet' favicon='/favicon.ico' />

            <SectionIndexIntro>
                <H1>Welcome to Layer-2 Planet</H1>
                <P1>
                    Chains that have a Layer-2 solution are like countries on L2 Planet. Choose a country you
                    want to visit. We recommend visiting Ethereum, especially. It is one of the popular
                    destinations for travelers these days :)
                </P1>
            </SectionIndexIntro>

            <SectionIndexCards>
                {chains?.map((chain) => (
                    <CardIndex key={chain.name} {...chain} />
                ))}
            </SectionIndexCards>

            <SectionIndexSubscribe>
                <H2>Email Newsletter</H2>
                <P1>
                    We have been running the first and the best Layer-2 Newsletter in the world for over 1
                    year. Join +1000 people and get biweekly Layer-2 news by subscribing.
                </P1>
                <SubscribeForm />
            </SectionIndexSubscribe>

            <SectionPartners>
                <H2>Partners</H2>
                <Partners />
            </SectionPartners>

        </>
    )
}

export default Home

