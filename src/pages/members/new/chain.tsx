import type { NextPage } from 'next'
import { ChainFormatter } from '../../../classes/Formatters'
import { ChainForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendChain } from '../../../functions/auth'
import { getCookie } from '../../../functions/cookie'

const NewChain: NextPage = () => {
    return(
        <>
            <SEO
                title='L2 Planet | New Chain'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>New Chain</H1>
            
            <ChainForm onSubmit={async (e) => {
                const jwt = getCookie('jwt');
                if (jwt === null) {
                    alert('Please login!');
                    return
                }
                const chainData = new ChainFormatter(e).format()
                if (chainData !== null) {
                    const res = await sendChain(chainData, jwt)
                    if(res !==null) {
                        alert('Published')
                    }
                }
            }}/>
        </>
    )
}
            
export default NewChain
            