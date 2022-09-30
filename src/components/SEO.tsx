import Head from 'next/head'

type SEOComponent = (props: SEOProps) => JSX.Element

interface SEOProps {
    title: string
    description: string
    favicon: string
}

export const SEO: SEOComponent = (props: SEOProps) => (
    <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
        <link rel='icon' href={props.favicon} />
    </Head>
)
