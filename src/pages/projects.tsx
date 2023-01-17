/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useMemo, useState } from 'react';
import { wrapn } from 'wrapn';
import { CardProject } from '../components/Card';
import { Col4Select, Flex4ProjectsGrid4Projects, Grid4ProjectsProjects } from '../components/Div';
import { GoBackButton } from '../components/GoBackButton';
import { HProjects, HProjectsL2, HSelect } from '../components/H';
import { Img } from '../components/Image';
import { SectionProjectsIntro, SectionProjectsProjects } from '../components/Section';
import { Select } from '../components/Select';
import { Seo } from '../components/Seo';
import { useLayer2AndProjectsOfPage } from '../hooks/useLayer2AndProjectOfPage';

const Layer2: NextPage = () => {
    const [filter, setFilter] = useState('');

    const { layer2 } = useLayer2AndProjectsOfPage();

    const projects = useMemo(
        () =>
            filter
                ? layer2?.projects.filter((project) => project.categories.includes(filter))
                : layer2?.projects,
        [layer2, filter]
    );

    return (
        <>
            <Seo title={`L2 Planet | Projects on ${layer2?.name || 'Layer 2'}`} />

            {layer2 && (
                <>
                    <SectionProjectsIntro>
                        <FlexCol>
                            <GoBackButton />
                            <DivGoBackButton>
                                <HProjects>Projects on</HProjects>
                                <DivMeta>
                                    <HProjectsL2>{layer2.name}</HProjectsL2>
                                    <Img alt={`${layer2.name} Logo`} img={ImgL2} src={layer2.icon} />
                                </DivMeta>
                            </DivGoBackButton>
                        </FlexCol>
                    </SectionProjectsIntro>

                    <SectionProjectsProjects>
                        <Col4Select>
                            <HSelect>Categories:</HSelect>
                            <Select
                                onSelect={(category) => setFilter(category)}
                                options={layer2.projectCategories}
                            />
                        </Col4Select>
                        <Flex4ProjectsGrid4Projects>
                            {projects?.at(0) ? (
                                <>
                                    <Grid4ProjectsProjects>
                                        {projects.slice(projects.length / 2).map((project) => (
                                            <CardProject key={project.name} {...project} />
                                        ))}
                                    </Grid4ProjectsProjects>
                                    <Grid4ProjectsProjects>
                                        {projects?.slice(0, projects.length / 2).map((project) => (
                                            <CardProject key={project.name} {...project} />
                                        ))}
                                    </Grid4ProjectsProjects>
                                </>
                            ) : (
                                <Text>We can't find any project on {layer2.name}. 🙁</Text>
                            )}
                        </Flex4ProjectsGrid4Projects>
                    </SectionProjectsProjects>
                </>
            )}
        </>
    );
};

export default Layer2;

const DivGoBackButton = wrapn('div')`
    flex
    flex-col
    md:flex-row
    items-center
    md:justify-center

    space-y-4
    sm:space-y-6
    md:space-y-0
    md:space-x-3
    lg:space-x-3.5
`;

const FlexCol = wrapn('div')`
    w-full
    flex flex-col
    gap-y-2
`;

const DivMeta = wrapn('div')`
    flex
    items-center
`;

const ImgL2 = wrapn('img')`
    h-9
    sm:h-11
    md:h-14
    lg:h-16

    ml-4
    md:ml-6
    lg:ml-8
`;

const Text = wrapn('p')`
    font-semibold
    text-lg
    sm:text-xl
    md:text-2xl
    lg:text-3xl

    text-gris-8
    dark:text-gris-2
`;
