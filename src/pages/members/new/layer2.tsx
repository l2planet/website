import type { NextPage } from 'next'
import { Layer2Form } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendLayer2 } from '../../../functions/api'
import { useAllChains } from '../../../hooks/useAllChains'
import { useAllLayer2s } from '../../../hooks/useAllLayer2s'

const NewLayer2: NextPage = () => {
    const { chains } = useAllChains()
    const { layer2s } = useAllLayer2s()

    return (
        <>
            <SEO title='L2 Planet | New Layer 2' description='L2 Planet' favicon='/favicon.ico' />

            <H1>New Layer 2</H1>

            <Layer2Form
                onSubmit={async (l2FormData) => {
                    try {
                        if (!layer2s || !chains) throw new Error(`Try again!`)
                        await sendLayer2(l2FormData, 'POST', chains, layer2s)
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
