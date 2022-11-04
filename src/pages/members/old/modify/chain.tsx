import type { NextPage } from 'next'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { sendChain } from '../../../../functions/api'
import { useAllChains } from '../../../../hooks/useAllChains'
import { useChainOfPage } from '../../../../hooks/useChainOfPage'

const OldChains: NextPage = () => {
    const { chain } = useChainOfPage()
    const { chains } = useAllChains()

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

                    <ChainForm
                        chain={chain}
                        onSubmit={async (formData) => {
                            try {
                                if (!chains) throw new Error(`Try again!`)
                                await sendChain(formData, 'PATCH', chains)
                                alert('Successfully modified!')
                            } catch (error: any) {
                                alert(error.message)
                            }
                        }}
                    />
                </>
            )}
        </>
    )
}

export default OldChains
