import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { CardOldData } from '../../../components/Card';
import { Grid4OldDatas } from '../../../components/Div';
import { H1 } from '../../../components/H';
import { Seo } from '../../../components/Seo';
import { useAllChains } from '../../../hooks/useAllChains';

const OldChains: NextPage = () => {
    const { chains } = useAllChains();

    return (
        <>
            <Seo title='L2 Planet | Modify Chains' />

            <H1>Modify Chains</H1>

            <Grid4OldDatas>
                {chains?.map((chain) => (
                    <CardOldData {...chain} type='chain' key={chain.id} />
                ))}
            </Grid4OldDatas>
        </>
    );
};

export default OldChains;
