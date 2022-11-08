/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { Blocker } from '../components/Blocker'
import { SEO } from '../components/SEO'
import { useLatestNewsletter } from '../hooks/useLatestNewsletter'

const Newsletter: NextPage = () => {
    const { latestNewsletter: newsletter } = useLatestNewsletter()

    return (
        <>
            <SEO title='L2 Planet | Newsletter' description='L2 Planet' favicon='/favicon.ico' />
            {newsletter && <Blocker blocks={newsletter.blocks} author={newsletter.author} />}
        </>
    )
}

export default Newsletter
