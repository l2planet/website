/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { wrapn } from 'wrapn'
import { Blocker } from '../components/Blocker'
import { Link } from '../components/Link'
import { Seo } from '../components/Seo'
import { useLatestNewsletter } from '../hooks/useLatestNewsletter'

const Newsletter: NextPage = () => {
    const { latestNewsletter: newsletter } = useLatestNewsletter()

    return (
        <>
            <Seo title='L2 Planet | Newsletter' />

            <Div>
                <Link a={A} href='/all_newsletters'>
                    All Newsletters
                </Link>
            </Div>
            {newsletter && <Blocker blocks={newsletter.blocks} author={newsletter.author} />}
        </>
    )
}

export default Newsletter

const Div = wrapn('div')`
    flex
    justify-end
    self-center
    w-full
    max-w-3xl
    -mb-4
    sm:-mb-7
`

const A = wrapn('a')`
    flex
    items-center

    h-12
    sm:h-14
    p-2
    sm:p-3

    rounded-lg2

    font-bold

    text-lg
    sm:text-xl

    border
    border-sec-3
    dark:border-sec-7

    bg-sec-3/50
    dark:bg-sec-7/50

    hover:bg-sec-4/50
    hover:dark:bg-sec-6/50

    hover:scale-95
    active:scale-105

    duration-200
`
