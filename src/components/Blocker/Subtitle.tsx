import { wrapn } from 'wrapn';
import { Block } from '../Editor/types';

export const Subtitle = ({ block }: { block: Block }) => <S>{block.content}</S>;

const S = wrapn('h1')`
    font-semibold
    text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem]
    leading-tight sm:leading-tight md:leading-tight
    text-gris-6
    dark:text-gris-4
`;
