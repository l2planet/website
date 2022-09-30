import { wrapn } from 'wrapn'
import { Block } from '../Editor/types'
import { Links } from './Links'

export const List = ({ block }: { block: Block }) => (
    <L>
        <Bullet /> {block.links ? <Links block={block} /> : block.content}
    </L>
)

const L = wrapn('p')`
    pl-10 relative
    font-[550]
    text-[1rem] sm:text-[1.125rem] md:text-[1.25rem]
    leading-normal sm:leading-normal md:leading-normal
    text-slate-800
    dark:text-slate-100
`

const Bullet = () => (
    <svg
        className="absolute left-4 top-[8px] sm:top-[9.5px] md:top-[11px] dark:fill-white"
        viewBox="0 0 100 100"
        height="8"
        width="8"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="50" cy="50" r="50" />
    </svg>
)
