import { wrapn } from 'wrapn';
import { Block } from '../Editor/types';

export const Links = ({ block }: { block: Block }) => (
    <>
        {block.links && (
            <>
                {block.content.slice(0, block.links[0].start)}
                {block.links.map((link, i) => (
                    <>
                        <Span key={`link ${i}`}>{block.content.slice(link.start, link.end)}</Span>{' '}
                        {block.content.slice(link.end, block.links?.at(i + 1)?.start || undefined)}
                    </>
                ))}
            </>
        )}
    </>
);

const Span = wrapn('span')`
    underline
    text-sky-600
    dark:text-sky-300
`;
