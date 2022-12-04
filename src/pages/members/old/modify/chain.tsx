import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { Seo } from '../../../../components/Seo'
import { sendChain } from '../../../../functions/api'
import { useAllChains } from '../../../../hooks/useAllChains'
import { useChainOfPage } from '../../../../hooks/useChainOfPage'

const OldChains: NextPage = () => {
    const { chain } = useChainOfPage()
    const { chains } = useAllChains()

    return (
        <>

            <Seo
                title={`L2 Planet | Modify ${chain?.name ?? 'Chain'}`}
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
