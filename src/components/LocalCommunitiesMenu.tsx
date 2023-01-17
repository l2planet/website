import { wrapn } from 'wrapn'
import { L2Locale } from '../types/Api'
import { Link } from './Link'

export const LocalCommunitiesMenu = ({ locales }: { locales: Array<L2Locale> }) => {
    return (
        <LocalCommunitiesMenuDiv id='local-communities-menu'>
            {locales.map(({ href, title }) => (
                <Link a={LocalCommunityLink} href={href} newTab key={title}>
                    {title}
                </Link>
            ))}
        </LocalCommunitiesMenuDiv>
    )
}

const LocalCommunitiesMenuDiv = wrapn('div')`
    hidden
    absolute z-20
    left-8
    md:left-12
    top-14
    md:top-[3.75rem]
    flex
    flex-col
    space-y-2
    max-w-[20rem]
    w-[calc(100%-4rem)]
    md:w-[calc(100%-6rem)]
    rounded-xl
    py-4
    px-3
    bg-gris-1
    dark:bg-gris-7
    border
    border-gris-3
    dark:border-gris-5
    dark:shadow-none
    shadow-sm
`

const LocalCommunityLink = wrapn('a')`
    hover:bg-gris-2
    dark:hover:bg-gris-6
    border
    border-transparent
    hover:border-gris-3
    dark:hover:border-gris-5
    py-2.5
    px-5
    rounded-full
    duration-100
    box-border
`
