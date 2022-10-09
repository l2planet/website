import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { APanel } from '../../components/A'
import { H1 } from '../../components/H'
import { Link } from '../../components/Link'
import { SectionPanel } from '../../components/Section'
import { SEO } from '../../components/SEO'

const Panel: NextPage = () => {
    return (
        <>
            <SEO title='L2 Planet | Panel' description='L2 Planet' favicon='/favicon.ico' />

            <H1>Admin Panel</H1>

            <SectionPanel>
                <Link a={APanel} href='/members/new/chain'>
                    Chain
                </Link>
                <Link a={APanel} href='/members/new/layer2'>
                    Layer2
                </Link>
                <Link a={APanel} href='/members/new/project'>
                    Project
                </Link>
                <Link a={APanel} href='/members/new/newsletter'>
                    Newsletter
                </Link>
            </SectionPanel>
        </>
    )
}

export default Panel
