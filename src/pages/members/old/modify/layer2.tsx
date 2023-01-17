import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { CardOldData } from '../../../../components/Card';
import { Grid4OldDatas } from '../../../../components/Div';
import { ChainForm, Layer2Form } from '../../../../components/Form';
import { H1 } from '../../../../components/H';
import { Seo } from '../../../../components/Seo';
import { sendLayer2 } from '../../../../functions/api';
import { useAllChains } from '../../../../hooks/useAllChains';
import { useAllLayer2s } from '../../../../hooks/useAllLayer2s';
import { useAllProjects } from '../../../../hooks/useAllProjects';
import { useRawLayer2OfPage } from '../../../../hooks/useRawLayer2OfPage';

const OldChains: NextPage = () => {
    const { rawLayer2 } = useRawLayer2OfPage();
    const { chains } = useAllChains();
    const { layer2s } = useAllLayer2s();

    return (
        <>
            <Seo title={`L2 Planet | Modify ${rawLayer2?.name ?? 'Layer 2'}`} />

            {rawLayer2 && (
                <>
                    <H1>Modify {rawLayer2.name}</H1>

                    <Layer2Form
                        layer2={rawLayer2}
                        onSubmit={async (formData) => {
                            try {
                                if (!layer2s || !chains) throw new Error(`Try again!`);
                                await sendLayer2(formData, 'PATCH', chains, layer2s);
                                alert('Successfully modified!');
                            } catch (error: any) {
                                alert(error.message);
                            }
                        }}
                    />
                </>
            )}
        </>
    );
};

export default OldChains;
