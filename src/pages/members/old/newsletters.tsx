import type { NextPage } from 'next'
import { ChainForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendChain } from '../../../functions/api'

const NewChain: NextPage = () => {
    return (
        <>
            <SEO
                title='L2 Planet | Modify Chains'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>Modify Chains</H1>
        </>
    )
}

export default NewChain
