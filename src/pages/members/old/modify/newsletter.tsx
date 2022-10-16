import type { NextPage } from 'next'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { useApi } from '../../../../contexts/ApiContext'
import { sendChain } from '../../../../functions/api'

const OldChains: NextPage = () => {
    return (
        <>
            <SEO
                title={`L2 Planet | Modify Newsletters`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            {<H1>Modify Newsletters</H1>}
        </>
    )
}

export default OldChains
