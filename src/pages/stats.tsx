/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SEO } from '../components/SEO'

const Stats: NextPage = () => {
    return (
        <>
            <SEO
                title="L2 Planet | Stats"
                description="L2 Planet"
                favicon="/favicon.ico"
            />
        </>
    )
}

export default Stats
