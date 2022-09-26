import { wrapn } from "wrapn";
import { Block } from "../Editor/types";
import { PolymorphicBlock } from "./PolymorphicBlock";

export const Blocker = ({ blocks }: { blocks: Block[] }) => (
    <B>
        {blocks.map((block, i) =>
            <PolymorphicBlock
                key={`poly_${i}`}
                block={block}
            />    
        )}
    </B>
)

const B = wrapn('div')`
    flex flex-col
    text-left
    
    rounded-xl
    gap-y-5 sm:gap-y-6 md:gap-y-7
    self-center w-full max-w-3xl
`