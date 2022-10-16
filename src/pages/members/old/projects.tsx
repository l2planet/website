import type { NextPage } from 'next'
import { CardOldData } from '../../../components/Card'
import { Grid4OldDatas } from '../../../components/Div'
import { ChainForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { useApi } from '../../../contexts/ApiContext'
import { sendChain } from '../../../functions/api'

const NewChain: NextPage = () => {
    const { useProjects } = useApi()
    const projects = useProjects()

    return (
        <>
            <SEO
                title='L2 Planet | Modify Layer 2s'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>Modify Projects</H1>

            <Grid4OldDatas>
                {projects.map((project) => (
                    <CardOldData {...project} type='project' key={project.id} />
                ))}
            </Grid4OldDatas>
        </>
    )
}

export default NewChain
