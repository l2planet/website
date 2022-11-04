import type { NextPage } from 'next'
import { ChainForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendChain } from '../../../functions/api'
import { useAllChains } from '../../../hooks/useAllChains'

const NewChain: NextPage = () => {
    const { chains } = useAllChains()
    return (
        <>
            <SEO title='L2 Planet | New Chain' description='L2 Planet' favicon='/favicon.ico' />

            <H1>New Chain</H1>

            <ChainForm
                onSubmit={async (formData) => {
                    try {
                        if (!chains) throw new Error(`Try again!`)
                        await sendChain(formData, 'POST', chains)
                        alert('Succesfully added!')
                    } catch (err: any) {
                        alert(err.message)
                    }
                }}
            />
        </>
    )
}

export default NewChain
