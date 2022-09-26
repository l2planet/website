import { wrapn } from "wrapn"
import { Block } from "../Editor/types";


export const Heading2 = ({ block }: { block: Block }) => (
    <H2>
        {block.content}
    </H2>
)

const H2 = wrapn('h3')`
    font-extrabold
    text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem]
    leading-tight sm:leading-tight md:leading-tight
`