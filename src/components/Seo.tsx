import { NextSeo } from 'next-seo'

/** The component that manages SEO. */
export const Seo = ({ title }: { title: string }) => (
    <NextSeo
        title={title}
        description='L2 Planet is a project which works for public goods. The main goal is to accelerate Layer-2 adaptation and educate the community about it.'
        twitter={{
            cardType: 'summary_large_image',
            handle: 'twitter:layer2planet',
            site: 'twitter:layer2planet',
        }}
        openGraph={{
            type: 'website',
            locale: 'en_US',
            siteName: 'Layer 2 Planet',
        }}
    />
)
