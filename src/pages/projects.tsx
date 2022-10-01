/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { wrapn } from 'wrapn'
import { CardProject } from '../components/Card'
import {
    Col4Select,
    Flex4ProjectsGrid4Projects,
    Grid4ProjectsProjects,
} from '../components/Div'
import {
    HProjects,
    HProjectsL2,
    HSelect,
} from '../components/H'
import { Img } from '../components/Image'
import {
    SectionProjectsIntro,
    SectionProjectsProjects,
} from '../components/Section'
import { Select } from '../components/Select'
import { SEO } from '../components/SEO'
import { useApi } from '../contexts/ApiContext'

const SPARE_ICON =
    'https://raw.githubusercontent.com/l2planet/images/6c2f47bea857e600a66ce688b9e94887cd7ba41a/chains/ethereum.svg'

const Layer2: NextPage = () => {
    const [filter, setFilter] = useState('')
    const { useLayer2WithProjects } = useApi()

    const l2 = useLayer2WithProjects()

    const projects = useMemo(
        () =>
            filter
                ? l2?.projects.filter((project) =>
                      project.categories.includes(filter)
                  )
                : l2?.projects,
        [l2, filter]
    )

    return (
        <>
            <SEO
                title={`L2 Planet | Projects on ${l2?.name || 'Layer 2'}`}
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <SectionProjectsIntro>
                <HProjects>Projects on</HProjects>
                <DivMeta>
                    <HProjectsL2>{l2?.name || 'Layer 2'}</HProjectsL2>
                    <Img
                        alt={`${l2?.name} Logo`}
                        img={ImgL2}
                        src={l2?.icon || SPARE_ICON}
                    />
                </DivMeta>
            </SectionProjectsIntro>

            <SectionProjectsProjects>
                <Col4Select>
                    <HSelect>Categories:</HSelect>
                    <Select
                        onSelect={(category) => setFilter(category)}
                        options={l2?.projectCategories || []}
                    />
                </Col4Select>
                <Flex4ProjectsGrid4Projects>
                    {projects?.at(0) ? (
                        <>
                            <Grid4ProjectsProjects>
                                {projects
                                    ?.slice(projects.length / 2)
                                    .map((project) => (
                                        <CardProject
                                            key={project.name}
                                            {...project}
                                        />
                                    ))}
                            </Grid4ProjectsProjects>
                            <Grid4ProjectsProjects>
                                {projects
                                    ?.slice(0, projects.length / 2)
                                    .map((project) => (
                                        <CardProject
                                            key={project.name}
                                            {...project}
                                        />
                                    ))}
                            </Grid4ProjectsProjects>
                        </>
                    ) : (
                        <Text>We can't find any project on {l2?.name}. 🙁</Text>
                    )}
                </Flex4ProjectsGrid4Projects>
            </SectionProjectsProjects>
        </>
    )
}

export default Layer2

const DivMeta = wrapn('div')`
    flex
    items-center
`

const ImgL2 = wrapn('img')`
    h-9
    sm:h-11
    md:h-14
    lg:h-16

    ml-4
    md:ml-6
    lg:ml-8
`

const Text = wrapn('p')`
    font-semibold
    text-lg
    sm:text-xl
    md:text-2xl
    lg:text-3xl

    text-gris-8
    dark:text-gris-2
`
