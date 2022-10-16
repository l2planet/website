import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { wrapn } from 'wrapn'
import { AModifyOld, APanel } from '../../../components/A'
import { H1 } from '../../../components/H'
import { Link } from '../../../components/Link'
import { SectionPanel } from '../../../components/Section'
import { SEO } from '../../../components/SEO'

const Panel: NextPage = () => {
    return (
        <>
            <SEO
                title='L2 Planet | Modify Olds'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>Modify Olds</H1>

            <SectionPanel>
                <Link a={APanel} href='/members/old/chains'>
                    Chains
                </Link>
                <Link a={APanel} href='/members/old/layer2s'>
                    Layer 2s
                </Link>
                <Link a={APanel} href='/members/old/projects'>
                    Projects
                </Link>
                <Link a={APanel} href='/members/old/newsletters'>
                    Newsletters
                </Link>
            </SectionPanel>
        </>
    )
}

export default Panel
