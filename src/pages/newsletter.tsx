/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { Suspense } from 'react'
import { Blocker } from '../components/Blocker'
import { SEO } from '../components/SEO'
import { useApi } from '../contexts/ApiContext'
import { useLatestNewsletter } from '../hooks/useLatestNewsletter'

const Newsletter: NextPage = () => {
    const { latestNewsletter: newsletter } = useLatestNewsletter()

    return (
        <>
            <SEO
                title='L2 Planet | Newsletter'
                description='L2 Planet'
                favicon='/favicon.ico'
            />
            {newsletter && <Blocker blocks={newsletter.blocks} author={newsletter.author} />}
        </>
    )
}

export default Newsletter
