import { wrapn } from 'wrapn';

const ButtonPrimary = wrapn('button')`
    border
    border-pri-2
    dark:border-pri-7

    hover:border-pri-3
    hover:dark:border-pri-6


    bg-pri-2/50
    dark:bg-pri-7/50

    hover:bg-pri-3/50
    hover:dark:bg-pri-6/50

    hover:scale-110
    active:scale-95

    duration-200
`;

const ButtonSecondary = wrapn('button')`
    bg-pri-3
    dark:bg-pri-6

    hover:bg-pri-2
    hover:dark:bg-pri-7

    active:bg-pri-4
    active:dark:bg-pri-5

    hover:scale-[.975]
    active:scale-[1.025]

    duration-200
`;

const ButtonIcon = wrapn(ButtonPrimary)`
    h-12
    p-1.5

    rounded-full
`;

export const ButtonTheme = wrapn(ButtonIcon)`
    hidden lg:block
    w-12
`;

export const ButtonMenu = wrapn(ButtonIcon)`
    lg:hidden
    w-12
`;

export const ButtonMenuTheme = wrapn(ButtonPrimary)`
    flex
    justify-start
    items-center

    font-semibold
    text-2xl

    h-14

    py-1.5
    px-5

    space-x-4

    rounded-lg2
`;

export const ButtonForm = wrapn(ButtonSecondary)`
    flex
    items-center
    justify-center

    font-semibold
    text-lg

    h-13

    px-7


    rounded-xl
`;

export const ButtonBridge = wrapn(ButtonSecondary)`
    flex
    items-center
    justify-center

    font-semibold
    text-lg

    h-12

    px-7

    gap-x-1.5

    rounded-xl
`;

export const ButtonPanel = wrapn(ButtonSecondary)`
    flex
    items-center
    justify-center

    font-semibold
    text-lg

    h-13

    px-7


    rounded-xl
`;

export const ButtonLayer2 = wrapn('button')`
    flex
    items-center

    h-11
    sm:h-12
    p-1
    sm:p-2

    rounded-lg2

    font-bold

    sm:text-lg

    border
    border-sec-3
    dark:border-sec-7

    bg-sec-3/50
    dark:bg-sec-7/50

    hover:bg-sec-4/50
    hover:dark:bg-sec-6/50

    hover:scale-95
    active:scale-105

    duration-200
`;

export const ButtonLocale = wrapn(ButtonSecondary)`
    flex
    items-center
    justify-center

    font-semibold
    text-lg

    h-12

    px-7

    gap-x-1.5

    rounded-xl
`;
