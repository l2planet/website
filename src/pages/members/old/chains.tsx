import type { NextPage } from 'next'
import { CardOldData } from '../../../components/Card'
import { Grid4OldDatas } from '../../../components/Div'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { useAllChains } from '../../../hooks/useAllChains'

const OldChains: NextPage = () => {
    const { chains } = useAllChains()

    return (
        <>
            <SEO
                title='L2 Planet | Modify Chains'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>Modify Chains</H1>

            <Grid4OldDatas>
                {chains?.map((chain) => (
                    <CardOldData {...chain} type='chain' key={chain.id} />
                ))}
            </Grid4OldDatas>
        </>
    )
}

export default OldChains
