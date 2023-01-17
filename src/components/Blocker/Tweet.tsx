import { wrapn } from 'wrapn';
import { Tweet as T } from 'react-twitter-widgets';
import { Block } from '../Editor/types';

export const Tweet = ({ block }: { block: Block }) => {
    return (
        <Div>
            <T tweetId={block.content} options={{ theme: 'dark' }} />
        </Div>
    );
};

const Div = wrapn('div')`
    self-center
    w-full max-w-[550px]
    -my-[10px]
`;
