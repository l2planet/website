import type { NextPage } from 'next'
import { CardOldData } from '../../../../components/Card'
import { Grid4OldDatas } from '../../../../components/Div'
import { ChainForm, ProjectForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { useApi } from '../../../../contexts/ApiContext'
import { sendChain } from '../../../../functions/api'

const OldChains: NextPage = () => {

    const { useProject, useLayer2s } = useApi()

    const project = useProject()
    const layer2s = useLayer2s()

    return (
        <>
            <SEO title={`L2 Planet | Modify ${project?.name ?? 'Project'}`} description='L2 Planet' favicon='/favicon.ico' />

            {project && (
                <>
                    <H1>Modify {project.name}</H1>

                    <ProjectForm
                        project={project}
                        layer2s={layer2s}
                        onSubmit={(formData) => {

                        }}
                    />
                </>

            )}

        </>
    )
}

export default OldChains
