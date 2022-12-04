/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { wrapn } from 'wrapn'
import { CardLayer2 } from '../components/Card'
import { Col4Select, Grid4ChainPage } from '../components/Div'
import { HChain, HSelect } from '../components/H'
import { Img } from '../components/Image'
import { PChainDescription } from '../components/P'
import { SectionChainIntro, SectionChainL2s } from '../components/Section'
import { Select } from '../components/Select'
import { Seo } from '../components/Seo'
import { useChainOfPage } from '../hooks/useChainOfPage'

const Chain: NextPage = () => {
    const { chain } = useChainOfPage()
    const [category, setCategory] = useState('')

    return (
        <>


            <Seo
                title={`L2 Planet | ${chain?.name || 'Chain'}`}
            />
            {chain && (
                <>
                    <SectionChainIntro>
                        <Img src={chain.icon} img={ImgChain} alt={`${chain.name} Logo`} />
                        <DivMeta>
                            <HChain>{chain.name}</HChain>
                            <PChainDescription>{chain.description}</PChainDescription>
                        </DivMeta>
                    </SectionChainIntro>
                    <SectionChainL2s>
                        <Col4Select>
                            <HSelect>Layer 2 Category:</HSelect>
                            <Select
                                onSelect={(category) => setCategory(category)}
                                options={chain.l2Categories}
                            />
                        </Col4Select>
                        <Grid4ChainPage>
                            {chain.layer2s.at(0) ? (
                                <>
                                    {category
                                        ? chain.layer2s
                                            .filter((l2) => l2.categories.includes(category))
                                            .map((l2) => <CardLayer2 key={l2.id} {...l2} />)
                                        : chain.layer2s.map((l2) => <CardLayer2 key={l2.id} {...l2} />)}
                                </>
                            ) : (
                                <Text>We can't find any layer 2 for {chain.name}. 🙁</Text>
                            )}
                        </Grid4ChainPage>
                    </SectionChainL2s>
                </>
            )}
        </>
    )
}

export default Chain

const DivMeta = wrapn('div')`
    flex
    flex-col
    text-center
    md:text-left

    space-y-4
    lg:space-y-6
`

const ImgChain = wrapn('img')`
    w-16
    sm:w-18
    md:w-26
    lg:w-34
    md:ml-12
    lg:ml-20
`

const Text = wrapn('p')`
    font-semibold
    text-lg
    sm:text-xl
    md:text-2xl
    lg:text-3xl

    text-gris-8
    dark:text-gris-2
`
