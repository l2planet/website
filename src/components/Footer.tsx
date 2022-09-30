import { wrapn } from 'wrapn'
import { Link } from './Link'
/** The component on the bottom of every page. */
export const Footer = () => {
    return (
        <WFooter>
            <Box>
                <PrimaryBox>
                    <PrimaryTitle>L2 Planet</PrimaryTitle>
                    <PrimarySubtitle>© L2 Planet, DAO</PrimarySubtitle>
                </PrimaryBox>
                <SecondaryBox>
                    <QuarterBox>
                        <SecondaryTitle>Social Media</SecondaryTitle>
                        <SecondarySubBox>
                            <Link
                                a={A}
                                href="https://twitter.com/layer2planet"
                                newTab
                            >
                                Twitter
                            </Link>
                            <Link
                                a={A}
                                href="https://www.youtube.com/c/L2Planet"
                                newTab
                            >
                                YouTube
                            </Link>
                            <Link
                                a={A}
                                href="https://discord.com/layer2planet"
                                newTab
                            >
                                Discord
                            </Link>
                        </SecondarySubBox>
                    </QuarterBox>
                    <QuarterBox>
                        <SecondaryTitle>DAO</SecondaryTitle>
                        <SecondarySubBox>
                            <Link a={A} href="/about">
                                About
                            </Link>
                            <Link a={A} href="/donate">
                                Donate
                            </Link>
                            <Link a={A} href="/members/login">
                                Members
                            </Link>
                        </SecondarySubBox>
                    </QuarterBox>
                </SecondaryBox>
            </Box>
        </WFooter>
    )
}

const WFooter = wrapn('footer')`
    flex
    justify-center
    text-center md:text-left

    py-20
    px-12
    lg:px-16

    border-t
    border-t-gris-2
    dark:border-t-gris-8

    bg-gris-0
    dark:bg-gris-9
`

const Box = wrapn('div')`
    flex
    flex-col
    md:flex-row
    md:justify-between

    w-full
    max-w-6xl

    space-y-16
    md:space-y-0
`

const PrimaryBox = wrapn('div')`
    flex
    flex-col

    w-full

    space-y-4
`

const SecondaryBox = wrapn('div')`
    flex
    flex-col
    md:flex-row
    md:justify-between

    w-full

    space-y-16
    md:space-y-0
`

const QuarterBox = wrapn('div')`
    flex
    flex-col

    space-y-4
`

const PrimaryTitle = wrapn('h3')`
    font-bold
    text-2xl
    xl:text-3xl
`

const PrimarySubtitle = wrapn('p')`
    font-semibold
    xl:text-lg
`

const SecondaryTitle = wrapn('h3')`
    font-bold
    text-xl
    xl:text-2xl
`

const SecondarySubBox = wrapn('p')`
    flex
    flex-col

    space-y-2
`

const A = wrapn('a')`
    font-semibold
    
    text-gris-6
    dark:text-gris-3

    hover:text-pri-5
    hover:dark:text-pri-4
`
