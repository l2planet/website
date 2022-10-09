import { wrapn } from 'wrapn'
import { Block } from '../Editor/types'

export const Heading1 = ({ block }: { block: Block }) => <H1>{block.content}</H1>

const H1 = wrapn('h2')`
    font-extrabold
    text-[1.75rem] sm:text-[2rem] md:text-[2.5rem]
    leading-tight sm:leading-tight md:leading-tight
`
