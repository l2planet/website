import { wrapn } from "wrapn"
import { Block } from "../Editor/types";
import { Links } from "./Links"

export const Quote = ({ block }: { block: Block }) => (
    <Q>
        {block.links ? <Links block={block}/> : block.content}
    </Q>
)

const Q = wrapn('p')`
    font-[550] italic
    text-[1rem] sm:text-[1.125rem] md:text-[1.25rem]
    leading-normal sm:leading-normal md:leading-normal
    text-slate-600
    dark:text-slate-200
`