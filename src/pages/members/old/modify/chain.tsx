import type { NextPage } from 'next'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { sendChain } from '../../../../functions/api'
import { useChainOfPage } from '../../../../hooks/useChainOfPage'

const OldChains: NextPage = () => {
    const { chain } = useChainOfPage()

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

                    <ChainForm chain={chain} onSubmit={(formData) => { }} />
                </>
            )}
        </>
    )
}

export default OldChains
