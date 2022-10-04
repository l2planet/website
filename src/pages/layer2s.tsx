/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { wrapn } from 'wrapn'
import { ALayer2, AL2Projects } from '../components/A'
const Chart = dynamic(() => import('../components/Chart'), {ssr: false})
import { Grid4Layer2Investors, Row4Layer2Links } from '../components/Div'
import { HLayer2, HLayer2Common } from '../components/H'
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
import { useApi } from '../contexts/ApiContext'
import { parsePrice } from '../functions/parsePrice'

const SPARE_ICON =
    'https://raw.githubusercontent.com/l2planet/images/6c2f47bea857e600a66ce688b9e94887cd7ba41a/chains/ethereum.svg'

const Layer2: NextPage = () => {
    const { useLayer2 } = useApi()

    const l2 = useLayer2()

    return (
        <>
            <SEO
                title={`L2 Planet | ${l2?.name || 'Layer 2'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <SectionLayer2Intro>
                <DivMeta>
                    <DivName>
                        <Img
                            alt={`${l2?.name || 'Layer 2'} Logo`}
                            img={ImgLayer2}
                            src={l2?.icon || SPARE_ICON}
                        />
                        <HLayer2>{l2?.name || 'Layer 2'}</HLayer2>
                    </DivName>
                    <DivLinks>
                        <Row4Layer2Links>
                            {l2?.website && (
                                <Link a={ALayer2} href={l2.website} newTab>
                                    Website
                                </Link>
                            )}
                            {l2?.twitter ? (
                                <Link
                                    a={ALayer2}
                                    href={`https://twitter.com/${l2.twitter}`}
                                    newTab
                                >
                                    Twitter
                                </Link>
                            ) : (
                                <Link a={ALayer2} href='#'>
                                    Twitter
                                </Link>
                            )}
                            {l2?.gecko && l2?.price ? (
                                <Link
                                    a={ALayer2}
                                    href={`https://coingecko.com/en/coins/${l2.gecko}`}
                                    newTab
                                >
                                    ${parsePrice(l2.price)}
                                </Link>
                            ) : (
                                <Link a={ALayer2} href='#'>
                                    No Token
                                </Link>
                            )}
                        </Row4Layer2Links>
                        <Link a={AL2Projects} href={`/projects?id=${l2?.id}`}>
                            Projects on {l2?.name || 'Layer 2'}
                        </Link>
                    </DivLinks>
                </DivMeta>
                <DivDescription>
                    <DivCategory>
                        {l2?.categories.map((category) => (
                            <Category key={category}>{category}</Category>
                        ))}
                    </DivCategory>
                    <HLayer2Common>Description:</HLayer2Common>
                    <PLayer2Description>{l2?.description}</PLayer2Description>
                </DivDescription>
            </SectionLayer2Intro>

            <SectionLayer2Charts>
                <DivTVL>
                    <HLayer2Common>TVL - Total Value Locked</HLayer2Common>
                    {l2?.tvls && <Chart data={l2.tvls} />}
                </DivTVL>
            </SectionLayer2Charts>

            <SectionLayer2Social>
                <HLayer2Common>Social:</HLayer2Common>
                <DivSocial>
                    <Timeline account={l2?.twitter} />
                    <Videos videoIds={l2?.videos || []} />
                </DivSocial>
            </SectionLayer2Social>

            <SectionLayer2Investors>
                <HLayer2Common>Investors:</HLayer2Common>
                <Grid4Layer2Investors>
                    {l2?.investors.map((investor) => (
                        <Img
                            alt='Investor Logo'
                            img={ImgInvestor}
                            src={investor}
                            key={investor}
                        />
                    ))}
                </Grid4Layer2Investors>
            </SectionLayer2Investors>
        </>
    )
}

export default Layer2

const DivMeta = wrapn('div')`
    space-y-6
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
    h-18
    sm:h-22
    md:h-28
    lg:h-24
`

const DivLinks = wrapn('div')`
    flex
    flex-col
    w-fit
    
    space-y-6
`

const DivDescription = wrapn('div')`
    flex flex-col

    w-full

    space-y-4
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

    space-y-16
    sm:space-y-20
    md:space-y-0
    md:space-x-8
    lg:space-x-10
    xl:space-x-14
`
