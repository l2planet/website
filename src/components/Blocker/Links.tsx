import Link from 'next/link'
import { wrapn } from 'wrapn'
import { Block } from '../Editor/types'

export const Links = ({ block }: { block: Block }) => (
    <>
        {block.links && (
            <>
                {block.content.slice(0, block.links[0].start)}
                {block.links.map((link, i) => (
                    <>
                        {link.url ? (
                            <>
                                <Href key={`link ${i}`} href={link.url}>
                                    {block.content.slice(link.start, link.end)}
                                </Href>{' '}
                            </>
                        ) : (
                            <>
                                <Bold key={`bold ${i}`}>{block.content.slice(link.start, link.end)}</Bold>{' '}
                            </>
                        )}
                        {block.content.slice(link.end, block.links?.at(i + 1)?.start || undefined)}
                    </>
                ))}
            </>
        )}
    </>
)

const Href = ({ children, href }: { children: string; href: string }) => (
    <Link href={href} passHref>
        <A target='_blank'>{children}</A>
    </Link>
)

const A = wrapn('a')`
    underline
    text-sky-600
    dark:text-sky-300
`
const Bold = wrapn('span')`
    font-extrabold
    text-gris-9
    dark:text-white
`
