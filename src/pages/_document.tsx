import { NextSeo } from 'next-seo'
import { Head, Html, Main, NextScript } from 'next/document'
import { Body } from '../components/Body'

export default function Document() {
    return (
        <Html>
            <Head />
            <Body>
                <NextSeo
                    description='L2 Planet is a project which works for public goods. The main goal is to accelerate Layer-2 adaptation and educate the community about it.'
                    twitter={{
                        cardType: 'summary_large_image',
                        handle: 'twitter:layer2planet',
                        site: 'twitter:layer2planet',

                    }}
                    openGraph={{
                        type: 'website',
                        locale: 'en_US',
                        siteName: 'Layer 2 Planet'
                    }}
                />
                <Main />
                <NextScript />
            </Body>
        </Html>
    )
}
