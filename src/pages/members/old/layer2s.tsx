import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { CardOldData } from '../../../components/Card';
import { Grid4OldDatas } from '../../../components/Div';
import { H1 } from '../../../components/H';
import { Seo } from '../../../components/Seo';
import { useAllLayer2s } from '../../../hooks/useAllLayer2s';

const NewChain: NextPage = () => {
    const { layer2s } = useAllLayer2s();

    return (
        <>
            <Seo title='L2 Planet | Modify Layer 2s' />

            <H1>Modify Layer 2s</H1>

            <Grid4OldDatas>
                {layer2s?.map((l2) => (
                    <CardOldData {...l2} type='layer2' key={l2.id} />
                ))}
            </Grid4OldDatas>
        </>
    );
};

export default NewChain;
