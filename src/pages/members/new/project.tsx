import type { NextPage } from 'next'
import { ProjectForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendProject } from '../../../functions/api'

const NewProject: NextPage = () => {
    return (
        <>
            <SEO
                title='L2 Planet | New Projext'
                description='L2 Planet'
                favicon='/favicon.ico'
            />
            <H1>New Project</H1>
            <ProjectForm onSubmit={async (projectFormData) => {
                try {
                    await sendProject(projectFormData)
                    alert('Succesfully added!')
                } catch (err: any) {
                    alert(err.message)
                }
            }} />
        </>
    )
}

export default NewProject
