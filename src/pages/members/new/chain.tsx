import type { NextPage } from 'next'
import { ChainForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendChain } from '../../../functions/api'

const NewChain: NextPage = () => {
    return (
        <>
            <SEO title='L2 Planet | New Chain' description='L2 Planet' favicon='/favicon.ico' />

            <H1>New Chain</H1>

            <ChainForm
                onSubmit={async (formData) => {
                    try {
                        await sendChain(formData, 'POST')
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
