/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { CardAbout } from '../components/Card'
import { H1 } from '../components/H'
import { IconCommunity } from '../components/icons/IconCommunity'
import { IconEvent } from '../components/icons/IconEvent'
import { IconHub } from '../components/icons/IconHub'
import { IconNewsletter } from '../components/icons/IconNewsletter'
import { P1 } from '../components/P'
import { SectionAboutCards, SectionAboutIntro } from '../components/Section'

const About: NextPage = () => {
    return (
        <>
            <NextSeo
                title='L2 Planet | About'
            />

            <SectionAboutIntro>
                <H1>About</H1>
                <P1>
                    L2 Planet is a project which works for public goods. The main goal is to accelerate
                    Layer-2 adaptation and educate the community about it. Wanna help us? Join our Discord
                    channel now and be an L2 alien!
                </P1>
            </SectionAboutIntro>

            <SectionAboutCards>
                <CardAbout
                    icon={IconHub}
                    title='L2 Hub'
                    text='It is your new home for L2s. Learn and track your favorite L2s on all networks.'
                />
                <CardAbout
                    icon={IconNewsletter}
                    title='Newsletter'
                    text='Join +1000 people and get biweekly L2 updates by subscribing.'
                />
                <CardAbout
                    icon={IconCommunity}
                    title='Local Communities'
                    text='L2 Planet supports local communities such as OptimismTR, StarkNetTR, etc.'
                />
                <CardAbout
                    icon={IconEvent}
                    title='Events'
                    text='Get ready for local and global L2 community events.'
                />
            </SectionAboutCards>
        </>
    )
}

export default About
