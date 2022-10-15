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
                        <Span key={`link ${i}`} href={link.url}>
                            {block.content.slice(link.start, link.end)}
                        </Span>{' '}
                        {block.content.slice(
                            link.end,
                            block.links?.at(i + 1)?.start || undefined
                        )}
                    </>
                ))}
            </>
        )}
    </>
)

const Span = ({ children, href }: { children: string; href: string }) => (
    <Link href={href} passHref>
        <A target='_blank'>{children}</A>
    </Link>
)

const A = wrapn('a')`
    underline
    text-sky-600
    dark:text-sky-300
`
