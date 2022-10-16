import type { NextPage } from 'next'
import { CardOldData } from '../../../components/Card'
import { Grid4OldDatas } from '../../../components/Div'
import { ChainForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { useApi } from '../../../contexts/ApiContext'
import { sendChain } from '../../../functions/api'

const NewChain: NextPage = () => {
    const { useLayer2s } = useApi()
    const layer2s = useLayer2s()

    return (
        <>
            <SEO title='L2 Planet | Modify Layer 2s' description='L2 Planet' favicon='/favicon.ico' />

            <H1>Modify Layer 2s</H1>

            <Grid4OldDatas>
                {layer2s.map(l2 => <CardOldData {...l2} type='layer2' key={l2.id} />)}
            </Grid4OldDatas>

        </>
    )
}

export default NewChain
