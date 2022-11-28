/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { wrapn } from 'wrapn'
import { ALayer2, AL2Projects } from '../components/A'
const Chart = dynamic(() => import('../components/Chart'), { ssr: false })
import { Grid4Layer2Investors, Row4Layer2Links } from '../components/Div'
import { HLayer2, HLayer2Common } from '../components/H'
import {
    IconCoinGecko,
    IconDiscord,
    IconGithub,
    IconTwitter,
    IconWebsite,
} from '../components/icons/IconBrands'
import { Img } from '../components/Image'
import { Link } from '../components/Link'
import { PLayer2Description } from '../components/P'
import {
    SectionLayer2Charts,
    SectionLayer2Intro,
    SectionLayer2Investors,
    SectionLayer2Social,
} from '../components/Section'
import { SEO } from '../components/SEO'
import { Timeline } from '../components/Timeline'
import { Videos } from '../components/Videos'
import { useLayer2OfPage } from '../hooks/useLayer2OfPage'

const Layer2: NextPage = () => {
    const { layer2 } = useLayer2OfPage()

    return (
        <>
            <SEO
                title={`L2 Planet | ${layer2?.name || 'Layer 2'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            {layer2 && (
                <>
                    <SectionLayer2Intro>
                        <DivMeta>
                            <DivName>
                                <Img alt={`${layer2.name} Logo`} img={ImgLayer2} src={layer2.icon} />
                                <HLayer2>{layer2.name}</HLayer2>
                            </DivName>
                            <DivLinks>
                                <Row4Layer2Links>
                                    {layer2.website && (
                                        <Link a={ALayer2} href={layer2.website} newTab>
                                            <IconWebsite />
                                        </Link>
                                    )}
                                    {layer2.twitter && (
                                        <Link
                                            a={ALayer2}
                                            href={`https://twitter.com/${layer2.twitter}`}
                                            newTab
                                        >
                                            <IconTwitter />
                                        </Link>
                                    )}
                                    {layer2.gecko && (
                                        <Link
                                            a={ALayer2}
                                            href={`https://www.coingecko.com/coins/${layer2.gecko}`}
                                            newTab
                                        >
                                            <IconCoinGecko />
                                        </Link>
                                    )}
                                    {layer2.discord && (
                                        <Link a={ALayer2} href={layer2.discord} newTab>
                                            <IconDiscord />
                                        </Link>
                                    )}
                                    {layer2.github && (
                                        <Link a={ALayer2} href={`https://github.com/${layer2.github}`} newTab>
                                            <IconGithub />
                                        </Link>
                                    )}
                                </Row4Layer2Links>
                                <Link a={AL2Projects} href={`/projects?id=${layer2?.id}`}>
                                    Projects on {layer2?.name || 'Layer 2'}
                                </Link>
                            </DivLinks>
                        </DivMeta>

                        <DivDescription>
                            <DivCategory>
                                {layer2.categories.map((category) => (
                                    <Category key={category}>{category}</Category>
                                ))}
                            </DivCategory>
                            <PLayer2Description>{layer2.description}</PLayer2Description>
                        </DivDescription>
                    </SectionLayer2Intro>

                    <SectionLayer2Charts>
                        <DivTVL>
                            <HLayer2Common>TVL - Total Value Locked:</HLayer2Common>
                            {layer2.tvls && <Chart data={layer2.tvls} />}
                        </DivTVL>
                    </SectionLayer2Charts>

                    <SectionLayer2Social>
                        <HLayer2Common>Social:</HLayer2Common>
                        <DivSocial>
                            <Timeline account={layer2.twitter} />
                            <Videos videoIds={layer2.videos || []} />
                        </DivSocial>
                    </SectionLayer2Social>

                    <SectionLayer2Investors>
                        <HLayer2Common>Investors:</HLayer2Common>
                        <Grid4Layer2Investors>
                            {layer2?.investors.map((investor) => (
                                <Img alt='Investor Logo' img={ImgInvestor} src={investor} key={investor} />
                            ))}
                        </Grid4Layer2Investors>
                    </SectionLayer2Investors>
                </>
            )}
        </>
    )
}

export default Layer2

const DivMeta = wrapn('div')`
    space-y-5
    min-w-fit
`

const DivName = wrapn('div')`
    flex
    items-center
    justify-start
    
    space-x-4
    sm:space-x-6
    md:space-x-8
    lg:space-x-10
`

const ImgLayer2 = wrapn('img')`
    aspect-square
    h-18
    sm:h-22
    md:h-28
    lg:h-24
`

const DivLinks = wrapn('div')`
    flex
    flex-col
    w-full
    
    space-y-4
`

const DivDescription = wrapn('div')`
    flex flex-col

    w-full

    space-y-2
`

const DivCategory = wrapn('p')`
    flex
    space-x-4
`

const Category = wrapn('p')`
    font-semibold

    py-1
    px-2

    rounded-md

    text-gris-6
    dark:text-gris-4

    bg-gris-2
    dark:bg-gris-8
`

const ImgInvestor = wrapn('img')`
    h-full
    w-full
    p-5
    rounded-xl
    bg-gris-2
    dark:bg-gris-4
`

const DivTVL = wrapn('div')`
    flex
    flex-col

    w-full

    space-y-3
`

const DivSocial = wrapn('div')`
    flex
    flex-col
    md:flex-row

    space-y-8
    sm:space-y-10
    md:space-y-0
    md:space-x-8
`
