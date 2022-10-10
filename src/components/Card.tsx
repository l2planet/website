import { wrap } from 'module'
import { wrapn } from 'wrapn'
import { APIGetChain, InternalChain, InternalLayer2, InternalProject } from '../types/Api'
import { StatusProps } from '../types/globals'
import { AProjects } from './A'
import { Img } from './Image'
import { Link } from './Link'

const Card = wrapn('div')`

`

// Card for `about` page
interface CardAboutProps {
    icon: () => JSX.Element
    title: string
    text: string
}

export const CardAbout = (props: CardAboutProps) => (
    <WCardAbout>
        <AboutIcon>
            <props.icon />
        </AboutIcon>
        <AboutTitle>{props.title}</AboutTitle>
        <AboutText>{props.text}</AboutText>
    </WCardAbout>
)

const WCardAbout = wrapn('div')`
    flex
    flex-col

    rounded-2xl

    p-5
    sm:p-6
    lg:p-7

    space-y-3
    sm:space-y-4
    lg:space-y-5

    border
    border-gris-3
    dark:border-gris-6

    bg-gris-2
    dark:bg-gris-8
`

const AboutIcon = wrapn('div')`
    w-14
    lg:w-16
    
    p-2.5
    lg:p-3

    rounded-full

    bg-gris-3
    dark:bg-gris-7
`

const AboutTitle = wrapn('h2')`
    font-bold
    text-2xl
    sm:text-3xl
`

const AboutText = wrapn('p')`
    font-semibold
    sm:text-lg

    text-gris-7
    dark:text-gris-3
`

// Card for `index` page
export const CardIndex = (props: InternalChain) => (
    <Link a={AIndex} href={`/chains?id=${props.id}`}>
        <Img img={ImgIndex} alt={`${props.name} logo`} src={props.icon} />
        <IndexName>{props.name}</IndexName>
    </Link>
)

const AIndex = wrapn('a')`
    aspect-square

    flex
    flex-col
    items-center
    justify-center

    space-y-2

    rounded-2xl

    border
    border-pri-3
    dark:border-pri-7

    bg-pri-3/50
    dark:bg-pri-7/50

    hover:bg-pri-4/50
    hover:dark:bg-pri-6/50

    hover:scale-95
    active:scale-105

    duration-200
`

const ImgIndex = wrapn('img')`
    h-[50%] w-[50%]
`

const IndexName = wrapn('h2')`
    font-semibold
    text-[4vw]
    sm:text-[3vw]
    lg:text-[min(2vw,1.38rem)]
`

// Card for [chain] pages
export const CardLayer2 = (props: InternalLayer2) => (
    <Link a={ALayer2} href={`/layer2s?id=${props.id}`}>
        <Img img={ImgLayer2} src={props.icon} alt={`${props.name} logo`} />
        <NameLayer2>{props.name}</NameLayer2>
        <Liveness status={props.status} />
    </Link>
)

const ALayer2 = wrapn('a')`
    relative
    flex
    items-center

    space-x-2.5
    

    h-12
    sm:h-13
    md:h-14

    p-2.5
    sm:p-3

    rounded-xl

    border
    border-pri-3
    dark:border-pri-7

    bg-pri-3/50
    dark:bg-pri-7/50

    hover:bg-pri-4/50
    hover:dark:bg-pri-6/50

    hover:scale-95
    active:scale-105

    duration-200
`

const Liveness = ({ status }: StatusProps) => {
    return (
        <DivLiveness>
            {status == 'live' ? (
                <>
                    <DotGreen />
                    <TextGreen>live</TextGreen>
                </>
            ) : status == 'close' ? (
                <>
                    <DotRed />
                    <TextRed>close</TextRed>
                </>
            ) : (
                <>
                    <DotYellow />
                    <TextYellow>testnet</TextYellow>
                </>
            )}
        </DivLiveness>
    )
}

const DivLiveness = wrapn('div')`
    flex
    items-center
    space-x-1.5
    absolute
    top-2.5 right-2.5
`

const Dot = wrapn('div')`
    h-2
    w-2
    rounded-full
`

const Text = wrapn('span')`
    font-semibold
    text-xs
`

const TextGreen = wrapn(Text)`
    text-green-500
`
const TextYellow = wrapn(Text)`
    text-amber-500
`
const TextRed = wrapn(Text)`
    text-red-500
`

const DotGreen = wrapn(Dot)`
    bg-green-500
`

const DotYellow = wrapn(Dot)`
    bg-amber-500
`

const DotRed = wrapn(Dot)`
    bg-red-500
`

const NameLayer2 = wrapn('h2')`
    font-semibold
    text-lg
    md:text-xl
    lg:text-lg
    xl:text-xl
`

const ImgLayer2 = wrapn('img')`
    h-full
`

// Card for projects pages
export const CardProject = (props: InternalProject) => (
    <WCardProject tabIndex={-1}>
        <DivProjectMeta>
            <Img alt={`${props.name} logo`} img={ImgProject} src={props.icon} />
            <NameProject>{props.name}</NameProject>
        </DivProjectMeta>
        <DivProjectsFocusable>
            <Flex4ProjectCategories>
                {props.categories.map((cat) => (
                    <CategoryProject key={`${props.name}${cat}`}>{cat}</CategoryProject>
                ))}
            </Flex4ProjectCategories>
            <Flex4ProjectLinks>
                {props.website && (
                    <Link a={AProjects} href={props.website} newTab>
                        Website
                    </Link>
                )}
                {props.twitter && (
                    <Link a={AProjects} href={`https://twitter.com/${props.twitter}`} newTab>
                        Twitter
                    </Link>
                )}
            </Flex4ProjectLinks>
            <DescriptionProject>{props.description}</DescriptionProject>
        </DivProjectsFocusable>
    </WCardProject>
)

const WCardProject = wrapn('div')`
    flex
    flex-col


    p-4
    sm:p-5

    space-y-4
    sm:space-y-5

    rounded-xl

    border
    border-gris-3
    dark:border-gris-6

    bg-gris-2
    dark:bg-gris-7


    cursor-pointer
    focus-within:cursor-default

    outline-none

    group
`

const DivProjectMeta = wrapn('div')`
    flex
    items-center

    h-8
    sm:h-11
    md:h-12
    lg:h-10
    
    space-x-4
`

const ImgProject = wrapn('img')`
    h-full
`

const NameProject = wrapn('h2')`
    font-bold
    text-xl
    sm:text-xl2
    md:text-2xl
    lg:text-xl2
`

const DivProjectsFocusable = wrapn('div')`
    hidden
    group-focus-within:flex
    flex-col

    space-y-4
    sm:space-y-5
`

const DescriptionProject = wrapn('p')`
    font-semibold
    sm:text-lg

    text-gris-7
    dark:text-gris-3
`

const Flex4ProjectLinks = wrapn('div')`
    flex
    space-x-4
`

const Flex4ProjectCategories = wrapn('div')`
    flex
    space-x-3
    sm:space-x-4
`
const CategoryProject = wrapn('p')`
    font-semibold
    text-sm
    sm:text-base

    py-0.5
    sm:py-[.1875rem]
    px-1.5
    sm:px-2

    rounded-md

    text-gris-6
    dark:text-gris-3

    bg-gris-3
    dark:bg-gris-6
`
