import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import { wrapn } from 'wrapn';
import { AModifyOld, APanel } from '../../components/A';
import { H1 } from '../../components/H';
import { Link } from '../../components/Link';
import { SectionPanel } from '../../components/Section';
import { Seo } from '../../components/Seo';

const Panel: NextPage = () => {
    return (
        <>
            <Seo title='L2 Planet | Admin Panel' />

            <H1>Admin Panel</H1>

            <SectionPanel>
                <Link a={APanel} href='/members/new/chain'>
                    Chain
                </Link>
                <Link a={APanel} href='/members/new/layer2'>
                    Layer 2
                </Link>
                <Link a={APanel} href='/members/new/project'>
                    Project
                </Link>
                <Link a={APanel} href='/members/new/newsletter'>
                    Newsletter
                </Link>
            </SectionPanel>

            <Link a={AModifyOld} href='/members/old'>
                Modify Olds
            </Link>
        </>
    );
};

export default Panel;
