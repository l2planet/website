import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LoginForm, ProjectForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { getFormData } from '../../../functions/getFormData'

const NewProject: NextPage = () => {
    return(
        <>
            <SEO
                title='L2 Planet | New Projext'
                description='L2 Planet'
                favicon='/favicon.ico'
            />
            <H1>New Project</H1>
            <ProjectForm onSubmit={(e) => {
                console.log(e)
                // Uploading project to the backend server!!!!
                // TODO
            }}/>
        </>
    )
}
            
export default NewProject
            