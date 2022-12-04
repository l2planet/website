import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { CardOldData } from '../../../components/Card'
import { Grid4OldDatas } from '../../../components/Div'
import { H1 } from '../../../components/H'
import { Seo } from '../../../components/Seo'
import { useAllProjects } from '../../../hooks/useAllProjects'

const NewChain: NextPage = () => {
    const { projects } = useAllProjects()

    return (
        <>

            <Seo
                title='L2 Planet | Modify Projects'
            />

            <H1>Modify Projects</H1>

            <Grid4OldDatas>
                {projects?.map((project) => (
                    <CardOldData {...project} type='project' key={project.id} />
                ))}
            </Grid4OldDatas>
        </>
    )
}

export default NewChain
