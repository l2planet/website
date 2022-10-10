import { wrapn } from 'wrapn'

export const Section = wrapn('section')`
    flex
    flex-col
`

// Index Page

export const SectionIndexIntro = wrapn(Section)`
    space-y-3
    sm:space-y-4
    md:space-y-5
    lg:space-y-6
`

export const SectionIndexCards = wrapn(Section)`
    grid
    grid-cols-3
    sm:grid-cols-4
    lg:grid-cols-6
    
    gap-4
    sm:gap-5
`

// About page

export const SectionAboutIntro = wrapn(Section)`
    space-y-3
    sm:space-y-4
    md:space-y-5
    lg:space-y-6
`

export const SectionAboutCards = wrapn('section')`
    grid
    grid-cols-1
    lg:grid-cols-2
    
    gap-5
`

// [chains] pages

export const SectionChainIntro = wrapn(Section)`
    md:flex-row-reverse
    items-center
    justify-center
`

export const SectionChainL2s = wrapn('section')`
    flex
    flex-col

    space-y-5
`

// [layer2] pages

export const SectionLayer2Intro = wrapn(Section)`
    flex
    flex-col
    lg:flex-row
    lg:items-top

    space-y-4
    sm:space-y-14
    md:space-y-20
    lg:space-y-6
    lg:space-x-10
    xl:space-x-14
`

export const SectionLayer2Charts = wrapn('section')`
    flex
    flex-col
    md:flex-row
    space-y-3
`

export const SectionLayer2Social = wrapn('section')`
    flex
    flex-col

    space-y-3
`

export const SectionLayer2Investors = wrapn('section')`
    flex
    flex-col

    space-y-4
    sm:space-y-5
    lg:space-y-6
`

// projects pages
export const SectionProjectsIntro = wrapn('section')`
    flex
    flex-col
    md:flex-row
    items-center
    md:justify-center

    space-y-4
    sm:space-y-6
    md:space-y-0
    md:space-x-3
    lg:space-x-3.5
`

export const SectionProjectsProjects = wrapn('section')`
    flex
    flex-col

    space-y-6
`

// Members/panel page

export const SectionPanel = wrapn('section')`
    grid
    grid-cols-2

    gap-5
`
