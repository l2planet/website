import { wrapn } from 'wrapn'
import { Image } from './Image'
import { Link } from './Link'
import logo from '../../public/l2planet.webp'
import { IconSun } from './icons/IconSun'
import { ButtonMenu, ButtonTheme } from './Button'
import { IconMoon } from './icons/IconMoon'
import { useTheme } from '../contexts/ThemeContext'
import { ALogo, ANav } from './A'
import { IconMenu } from './icons/IconMenu'
import { useEffect, useState } from 'react'
import { useBoolean } from '../hooks/useBoolean'
import { Menu } from './Menu'
import { IconHome } from './icons/IconHome'
import { IconNewsletter } from './icons/IconNewsletter'
import { IconStats } from './icons/IconStats'
import { IconAbout } from './icons/IconAbout'

/** The component on the top of every page. */
export const TopBar = () => {
    const { toggleTheme } = useTheme()
    const [isMenuOpen, toggleMenuOpen] = useBoolean(false)

    return (
        <>
            <Header>
                <Link a={ALogo} href='/'>
                    <Image alt='L2 Planet Logo' size='h-8 w-8' src={logo} />
                    L2 Planet
                </Link>
                <Nav>
                    <Link a={ANav} href='/'>
                        <IconHome />
                        Home
                    </Link>
                    <Link a={ANav} href='/newsletter'>
                        <IconNewsletter />
                        Newsletter
                    </Link>
                    <Link a={ANav} href='/stats'>
                        <IconStats />
                        Stats
                    </Link>
                    <Link a={ANav} href='/about'>
                        <IconAbout />
                        About
                    </Link>
                </Nav>
                <BoxButtons>
                    <ButtonTheme onClick={toggleTheme}>
                        <IconSun />
                        <IconMoon />
                    </ButtonTheme>
                    <ButtonMenu onClick={toggleMenuOpen}>
                        <IconMenu />
                    </ButtonMenu>
                </BoxButtons>
            </Header>

            {isMenuOpen && <Menu onClick={toggleMenuOpen} />}
        </>
    )
}

const Header = wrapn('header')`
    sticky
    top-0
    z-30

    flex
    items-center
    justify-between

    h-16
    px-8

    border-b
    border-gris-2
    dark:border-gris-8

    bg-gris-0/50
    dark:bg-gris-9/50
    
    backdrop-blur-lg
`

const Nav = wrapn('nav')`
    hidden
    lg:flex
    space-x-12
`

const BoxButtons = wrapn('div')`
    flex
    justify-end

    w-37
`
