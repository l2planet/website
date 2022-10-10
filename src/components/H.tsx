import { wrapn } from 'wrapn'

export const H1 = wrapn('h1')`
    text-center

    font-bold
    
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
`

// [chain] pages

export const HChain = wrapn('h1')`
    font-bold
    
    text-5xl
    sm:text-6xl
    lg:text-7xl
`

export const HSelect = wrapn('h2')`
    font-semibold
    
    text-lg

    pl-2

    text-gris-6
    dark:text-gris-3
`

// [layer2] pages

export const HLayer2 = wrapn('h1')`
    font-bold
    break-all

    text-3xl
    sm:text-6xl
    lg:text-5xl
`

export const HLayer2Common = wrapn('h1')`
    font-bold
    
    text-xl
    sm:text-2xl
`

// projects pages

export const HProjects = wrapn('h1')`
    font-bold
    text-5xl
    sm:text-6xl
    md:text-5xl
    lg:text-6xl
`

export const HProjectsL2 = wrapn('h1')`
    font-semibold
    md:font-bold
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
`
