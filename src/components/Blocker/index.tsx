import { wrapn } from 'wrapn'
import { InternalNewsletter } from '../../types/Api'
import { Block } from '../Editor/types'
import { PolymorphicBlock } from './PolymorphicBlock'

export const Blocker = ({ blocks, author }: InternalNewsletter) => (
    <B>
        {blocks.map((block, i) => (
            <PolymorphicBlock key={`poly_${i}`} block={block} />
        ))}
    </B>
)

const B = wrapn('div')`
    flex flex-col
    text-left
    
    rounded-xl
    gap-y-3 sm:gap-y-4 md:gap-y-5
    self-center w-full max-w-3xl
`
