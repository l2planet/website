import { wrapn } from 'wrapn'
import { Block } from '../Editor/types'

export const Title = ({ block }: { block: Block }) => <T>{block.content}</T>

const T = wrapn('h1')`
    font-extrabold
    text-[2rem] sm:text-[2.5rem] md:text-[3rem]
    leading-tight sm:leading-tight md:leading-tight
`
