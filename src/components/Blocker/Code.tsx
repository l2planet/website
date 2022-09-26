import { wrapn } from "wrapn"
import { Block } from "../Editor/types";

export const Code = ({ block }: { block: Block }) => (
    <C>
        {block.content}
    </C>
)

const C = wrapn('code')`
    p-4 rounded-xl
    font-mono
    text-[1rem] sm:text-[1.125rem] md:text-[1.25rem]
    leading-normal sm:leading-normal md:leading-normal
    border
    border-slate-200
    dark:border-slate-700
    bg-slate-50
    dark:bg-slate-800
    text-slate-600 
    dark:text-slate-300
`