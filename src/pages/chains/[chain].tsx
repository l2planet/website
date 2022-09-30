/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { useState } from 'react'
import { wrapn } from 'wrapn'
import { CardLayer2 } from '../../components/Card'
import { Col4Select, Grid4ChainPage } from '../../components/Div'
import { HChain, HSelect } from '../../components/H'
import { Img } from '../../components/Image'
import { PChainDescription } from '../../components/P'
import { SectionChainIntro, SectionChainL2s } from '../../components/Section'
import { Select } from '../../components/Select'
import { SEO } from '../../components/SEO'
import { useApi } from '../../contexts/ApiContext'

const SPARE_ICON =
    'https://raw.githubusercontent.com/l2planet/images/6c2f47bea857e600a66ce688b9e94887cd7ba41a/chains/ethereum.svg'

const Chain: NextPage = () => {

    return (
        <>
            <SEO
                title={`L2 Planet | ${'Chain'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

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
