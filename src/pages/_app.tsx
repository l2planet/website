import '../styles/globals.css'
import '../styles/font.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../contexts/ThemeContext'
import { TopBar } from '../components/TopBar'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { ApiProvider } from '../contexts/ApiContext'
import { DefaultSeo, NextSeo } from 'next-seo'

// This component is shared by every page.
// The data on it is stored across different pages.
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title='L2 Planet | Home'
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
            <ThemeProvider>
                <ApiProvider>
                    <TopBar />
                    <Main>
                        <Component {...pageProps} />
                    </Main>
                    <Footer />
                </ApiProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp
