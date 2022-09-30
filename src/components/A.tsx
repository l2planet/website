import { wrapn } from 'wrapn'

const APrimary = wrapn('a')`
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
`

export const ANav = wrapn(APrimary)`
    text-none

    h-11

    py-1
    px-4

    rounded-lg2
`

export const AMenu = wrapn(APrimary)`
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
`

export const ALogo = wrapn('a')`
    flex
    items-center
    justify-between

    w-37

    font-extrabold
    text-2xl
`

export const ALayer2 = wrapn('a')`
    flex
    items-center

    h-12
    px-4
    sm:px-5

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
`

export const AL2Projects = wrapn('a')`
    flex
    items-center
    justify-center

    h-12
    px-5
    

    rounded-lg2

    font-bold
    text-lg

    border
    border-pri-2
    dark:border-pri-7

    hover:border-pri-3
    hover:dark:border-pri-6


    bg-pri-2/50
    dark:bg-pri-7/50

    hover:bg-pri-3/50
    hover:dark:bg-pri-6/50

    hover:scale-95
    active:scale-105

    duration-200
`

export const AProjects = wrapn('a')`
    flex
    items-center

    h-10
    px-4
    

    rounded-lg2

    font-semibold
    text-lg

    border
    border-gris-3
    dark:border-gris-6


    bg-gris-1
    dark:bg-gris-8

    hover:bg-gris-0
    hover:dark:bg-gris-9

    hover:scale-95
    active:scale-105

    duration-200
`

export const APanel = wrapn('a')`
    flex
    items-center
    justify-center

    h-44
    px-5
    

    rounded-lg2

    font-semibold
    text-3xl

    border
    border-pri-2
    dark:border-pri-7

    hover:border-pri-3
    hover:dark:border-pri-6


    bg-pri-2/50
    dark:bg-pri-7/50

    hover:bg-pri-3/50
    hover:dark:bg-pri-6/50

    hover:scale-95
    active:scale-105

    duration-200
`
