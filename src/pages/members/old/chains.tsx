import type { NextPage } from 'next'
import { CardOldData } from '../../../components/Card'
import { Grid4OldDatas } from '../../../components/Div'
import { ChainForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { useApi } from '../../../contexts/ApiContext'
import { sendChain } from '../../../functions/api'

const OldChains: NextPage = () => {

    const { useChains } = useApi()

    const chains = useChains()

    return (
        <>
            <SEO title='L2 Planet | Modify Chains' description='L2 Planet' favicon='/favicon.ico' />

            <H1>Modify Chains</H1>

            <Grid4OldDatas>
                {chains.map(chain => <CardOldData {...chain} type='chain' key={chain.id} />)}
            </Grid4OldDatas>

        </>
    )
}

export default OldChains
