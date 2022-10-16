import type { NextPage } from 'next'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm, Layer2Form } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { useApi } from '../../../../contexts/ApiContext'
import { sendChain } from '../../../../functions/api'

const OldChains: NextPage = () => {
    const { useLayer2, useChains } = useApi()

    const layer2 = useLayer2()
    const chains = useChains()

    return (
        <>
            <SEO
                title={`L2 Planet | Modify ${layer2?.name ?? 'Layer 2'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            {layer2 && (
                <>
                    <H1>Modify {layer2.name}</H1>

                    <Layer2Form layer2={layer2} chains={chains} onSubmit={(formData) => {}} />
                </>
            )}
        </>
    )
}

export default OldChains
