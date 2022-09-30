import { useEffect, useState } from 'react'
import { wrapn } from 'wrapn'
import { useBoolean } from '../hooks/useBoolean'

interface SelectProps {
    options: string[]
    onSelect: (selectedOption: string) => void
}

export const Select = (props: SelectProps) => (
    <>
        <SelectionMobile {...props} />
        <SelectionDesktop {...props} />
    </>
)

export const SelectionMobile = (props: SelectProps) => (
    <MobileSelection onChange={(e) => props.onSelect(e.target.value)}>
        <MobileOption value="">All</MobileOption>
        {props.options.map((option) => (
            <MobileOption key={option}>{option}</MobileOption>
        ))}
    </MobileSelection>
)

const MobileSelection = wrapn('select')`
    lg:hidden

    h-14
    w-60
    
    px-6

    appearance-none

    rounded-lg2

    font-semibold

    outline-none

    border
    border-gris-3
    dark:border-gris-6


    bg-gris-1
    dark:bg-gris-8
`

const MobileOption = wrapn('option')`

`

export const SelectionDesktop = (props: SelectProps) => {
    const [isOptionsOpen, toggleOptionsOpen] = useBoolean(false)
    const [selectedOption, setSelectedOption] = useState('')

    return (
        <DesktopSelection onClick={toggleOptionsOpen}>
            {selectedOption || 'Filter by category'}
            {isOptionsOpen && (
                <DivDesktopOption>
                    <DesktopOption
                        onClick={() => {
                            props.onSelect('')
                            setSelectedOption('All')
                        }}
                    >
                        All
                    </DesktopOption>
                    {props.options.map((option) => (
                        <DesktopOption
                            onClick={() => {
                                props.onSelect(option)
                                setSelectedOption(option)
                            }}
                            key={option}
                        >
                            {option}
                        </DesktopOption>
                    ))}
                </DivDesktopOption>
            )}
        </DesktopSelection>
    )
}

const DesktopSelection = wrapn('div')`
    hidden
    lg:flex

    relative

    items-center

    h-12
    w-60
    
    px-5

    rounded-lg2

    font-semibold

    outline-none

    border
    border-gris-3
    dark:border-gris-6

    bg-gris-1
    dark:bg-gris-8

    active:bg-gris-2
    active:dark:bg-gris-7

    text-gris-5
    dark:text-gris-4

    duration-100

    select-none

    cursor-pointer
`

const DivDesktopOption = wrapn('div')`
    absolute
    top-14
    left-0
    z-20


    rounded-lg2

    flex
    flex-col

    w-full

    border
    border-gris-3
    dark:border-gris-6

    bg-gris-1
    dark:bg-gris-8

    shadow-lg
    shadow-gris-9/20
    dark:shadow-none

    text-gris-6
    dark:text-gris-3
`

const DesktopOption = wrapn('div')`
    flex
    items-center

    h-12


    px-5

    rounded-lg2

    bg-gris-1
    dark:bg-gris-8

    hover:bg-gris-2
    hover:dark:bg-gris-7


    duration-200
    cursor-pointer
`
