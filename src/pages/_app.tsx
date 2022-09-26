import '../styles/globals.css'
import '../styles/font.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../contexts/ThemeContext'
import { TopBar } from '../components/TopBar'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { ApiProvider } from '../contexts/ApiContext'
        
// This component is shared by every page.
// The data on it is stored across different pages.
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <ApiProvider>
                <TopBar/>
                <Main>
                    <Component {...pageProps} />
                </Main>
                <Footer/>
            </ApiProvider>
        </ThemeProvider>
    )
}
        
export default MyApp
        