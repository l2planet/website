import type { NextPage } from 'next'
import { ProjectForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendProject } from '../../../functions/api'
import { useAllLayer2s } from '../../../hooks/useAllLayer2s'
import { useAllProjects } from '../../../hooks/useAllProjects'

const NewProject: NextPage = () => {
    const { layer2s } = useAllLayer2s()
    const { projects } = useAllProjects()

    return (
        <>
            <SEO title='L2 Planet | New Projext' description='L2 Planet' favicon='/favicon.ico' />
            <H1>New Project</H1>
            <ProjectForm
                onSubmit={async (projectFormData) => {
                    try {
                        if (!layer2s || !projects) throw new Error(`Try again!`)
                        await sendProject(projectFormData, 'POST', layer2s, projects)
                        alert('Succesfully added!')
                    } catch (err: any) {
                        alert(err.message)
                    }
                }}
            />
        </>
    )
}

export default NewProject
