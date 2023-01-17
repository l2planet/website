import { useEffect } from 'react';
import { wrapn } from 'wrapn';
import { useTheme } from '../contexts/ThemeContext';
import { AMenu } from './A';
import { ButtonMenuTheme } from './Button';
import { IconAbout } from './icons/IconAbout';
import { IconHome } from './icons/IconHome';
import { IconMoon } from './icons/IconMoon';
import { IconNewsletter } from './icons/IconNewsletter';
import { IconStats } from './icons/IconStats';
import { IconSun } from './icons/IconSun';
import { Link } from './Link';

/** Menu component which is only available on mobile devices. */
export const Menu = (props: { onClick: () => void }) => {
    const { toggleTheme } = useTheme();

    return (
        <WMenu onClick={props.onClick}>
            <Nav>
                <Link a={AMenu} href='/'>
                    <Icon icon={IconHome} />
                    Home
                </Link>
                <Link a={AMenu} href='/newsletter'>
                    <Icon icon={IconNewsletter} />
                    Newsletter
                </Link>
                <Link a={AMenu} href='/stats'>
                    <Icon icon={IconStats} />
                    Stats
                </Link>
                <Link a={AMenu} href='/about'>
                    <Icon icon={IconAbout} />
                    About
                </Link>
            </Nav>
            <ButtonMenuTheme onClick={toggleTheme}>
                <Icon
                    icon={() => (
                        <>
                            <IconSun />
                            <IconMoon />
                        </>
                    )}
                />
                Theme
            </ButtonMenuTheme>
        </WMenu>
    );
};

const WMenu = wrapn('div')`
    lg:hidden

    fixed
    top-16
    z-20

    flex
    flex-col
    items-center

    min-h-[26rem]
    h-[calc(100vh-4rem)]
    w-full

    py-8

    space-y-16

    bg-gris-0/50
    dark:bg-gris-9/50

    backdrop-blur-lg

    overflow-y-auto
`;

const Nav = wrapn('nav')`
    flex
    flex-col
    items-center

    space-y-8
    
    px-6
`;

const Icon = ({ icon: I }: { icon: () => JSX.Element }) => {
    return (
        <div className='h-full aspect-square'>
            <I />
        </div>
    );
};
