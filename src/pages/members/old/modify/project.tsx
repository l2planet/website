import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { ProjectForm } from '../../../../components/Form'
import { H1 } from '../../../../components/H'
import { sendProject } from '../../../../functions/api'
import { useAllLayer2s } from '../../../../hooks/useAllLayer2s'
import { useAllProjects } from '../../../../hooks/useAllProjects'
import { useRawProjectOfPage } from '../../../../hooks/useRawProjectOfPage'

const OldChains: NextPage = () => {
    const { rawProject } = useRawProjectOfPage()
    const { layer2s } = useAllLayer2s()
    const { projects } = useAllProjects()

    return (
        <>
            <NextSeo
                title={`L2 Planet | Modify ${rawProject?.name ?? 'Project'}`}
            />



            {rawProject && (
                <>
                    <H1>Modify {rawProject.name}</H1>

                    <ProjectForm
                        project={rawProject}
                        onSubmit={async (formData) => {
                            try {
                                if (!layer2s || !projects) throw new Error(`Try again!`)
                                await sendProject(formData, 'PATCH', layer2s, projects)
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
