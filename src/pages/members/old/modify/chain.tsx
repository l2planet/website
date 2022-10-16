import type { NextPage } from 'next'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { useApi } from '../../../../contexts/ApiContext'
import { sendChain } from '../../../../functions/api'

const OldChains: NextPage = () => {
    const { useChain } = useApi()

    const chain = useChain()

    return (
        <>
            <SEO
                title={`L2 Planet | Modify ${chain?.name ?? 'Chain'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            {chain && (
                <>
                    <H1>Modify {chain.name}</H1>

                    <ChainForm chain={chain} onSubmit={(formData) => {}} />
                </>
            )}
        </>
    )
}

export default OldChains
