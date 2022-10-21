import type { NextPage } from 'next'
import { ProjectForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { SEO } from '../../../../components/SEO'
import { sendProject } from '../../../../functions/api'
import { useAllLayer2s } from '../../../../hooks/useAllLayer2s'
import { useRawProjectOfPage } from '../../../../hooks/useRawProjectOfPage'

const OldChains: NextPage = () => {
    const { rawProject } = useRawProjectOfPage()

    return (
        <>
            <SEO
                title={`L2 Planet | Modify ${rawProject?.name ?? 'Project'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            {rawProject && (
                <>
                    <H1>Modify {rawProject.name}</H1>

                    <ProjectForm
                        project={rawProject}
                        onSubmit={async (formData) => {
                            try {
                                await sendProject(formData, 'PATCH')
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
