/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { CardIndex, CardNewsletter } from '../components/Card'
import { H1, H2 } from '../components/H'
import { SubscribeForm } from '../components/SubscribeForm'
import { P1 } from '../components/P'
import {
    SectionIndexCards,
    SectionIndexIntro,
    SectionIndexSubscribe,
    SectionPartners,
} from '../components/Section'
import { SEO } from '../components/SEO'
import { useAllChains } from '../hooks/useAllChains'
import { wrapn } from 'wrapn'
import { Partners } from '../components/Partners'
import { useRawNewsletters } from '../hooks/useRawNewsletters'
import { Grid4Newsletters } from '../components/Div'

const Home: NextPage = () => {
    const newsletters = useRawNewsletters()

    return (
        <>
            <SEO title='L2 Planet | Old Newsletters' description='L2 Planet' favicon='/favicon.ico' />

            <SectionIndexSubscribe>
                <H1>All Newsletters</H1>
                <P1>
                    We have been running the first and the best Layer-2 Newsletter in the world for over 1
                    year. Join +1000 people and get biweekly Layer-2 news by subscribing.
                </P1>
                <SubscribeForm />
            </SectionIndexSubscribe>

            <Grid4Newsletters>
                {newsletters
                    ?.sort((a, b) => b.ID - a.ID)
                    .map((ns) => (
                        <CardNewsletter key={`ns${ns.ID}`} id={ns.ID} newsletter={ns.newsletter} />
                    ))}
            </Grid4Newsletters>
        </>
    )
}

export default Home
