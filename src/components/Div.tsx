import { wrapn } from 'wrapn';

// Divs for [chain] pages
export const Col4Select = wrapn('div')`
    flex
    flex-col
    items-start

    space-y-2
`;

export const Grid4ChainPage = wrapn('div')`
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3

    gap-3
    sm:gap-3.5
`;

// Divs for [layer2] pages
export const Row4Layer2Links = wrapn('div')`
    relative
    flex
    flex-wrap
    lg:flex-nowrap

    min-w-fit
    
    gap-x-2
    sm:gap-x-4
    gap-y-3
    sm:gap-y-4
`;

export const Grid4Layer2Investors = wrapn('div')`
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4

    gap-6
    md:gap-8
`;

// Divs for projects
export const Flex4ProjectsGrid4Projects = wrapn('div')`
    flex
    flex-col
    lg:flex-row
    lg:items-start

    space-y-5
    lg:space-y-0
    lg:space-x-5
`;

export const Grid4ProjectsProjects = wrapn('div')`
    grid
    grid-cols-1

    w-full

    gap-y-5
`;

// Divs for `stats` page
export const Flex4StatsTables = wrapn('div')`
    flex
    flex-col
    lg:flex-row

    space-y-8
    lg:space-y-0
    lg:space-x-8

`;

// Divs for `members/old/...` pages
export const Grid4OldDatas = wrapn('div')`
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3

    gap-5
`;

export const Grid4Newsletters = wrapn('div')`
    grid
    grid-cols-1
    lg:grid-cols-2

    w-full

    gap-y-5
    gap-x-6
`;
