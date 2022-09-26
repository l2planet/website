import { wrapn } from "wrapn"
import { Block } from '../Editor/types'
import { Links } from "./Links"

export const Paragraph = ({ block }: { block: Block }) => (
    <P>
        {block.links ? <Links block={block}/> : block.content}
    </P>
)

const P = wrapn('p')`
    font-[550]
    text-[1rem] sm:text-[1.125rem] md:text-[1.25rem]
    leading-normal sm:leading-normal md:leading-normal
    text-slate-800
    dark:text-slate-100
`

