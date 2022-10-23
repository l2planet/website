import type { NextPage } from 'next'
import { useEffect } from 'react'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm, Layer2Form } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { sendLayer2 } from '../../../../functions/api'
import { useRawLayer2OfPage } from '../../../../hooks/useRawLayer2OfPage'

const OldChains: NextPage = () => {
    const { rawLayer2 } = useRawLayer2OfPage()

    return (
        <>
            <SEO
                title={`L2 Planet | Modify ${rawLayer2?.name ?? 'Layer 2'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            {rawLayer2 && (
                <>
                    <H1>Modify {rawLayer2.name}</H1>

                    <Layer2Form
                        layer2={rawLayer2}
                        onSubmit={async (formData) => {
                            try {
                                await sendLayer2(formData, 'PATCH')
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
