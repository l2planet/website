import type { NextPage } from 'next'
import { Layer2Form } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendLayer2 } from '../../../functions/api'

const NewLayer2: NextPage = () => {
    return (
        <>
            <SEO
                title="L2 Planet | New Layer 2"
                description="L2 Planet"
                favicon="/favicon.ico"
            />

            <H1>New Layer 2</H1>

            <Layer2Form
                onSubmit={async (l2FormData) => {
                    try {
                        await sendLayer2(l2FormData)
                        alert('Succesfully added!')
                    } catch (err: any) {
                        alert(err.message)
                    }
                }}
            />
        </>
    )
}

export default NewLayer2
