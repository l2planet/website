import { Dispatch, SetStateAction } from 'react'
import { wrapn } from 'wrapn'
import { cleanWords } from '../functions/cleanWords'
import { L2Locale } from '../types/Api'
import { ButtonLocale } from './Button'
import { IconPlus } from './icons/IconPlus'

export const LocalCommunitiesInput = ({
    locales,
    setLocales,
}: {
    locales: L2Locale[]
    setLocales: Dispatch<SetStateAction<L2Locale[]>>
}) => {
    return (
        <Div>
            <Label>Local Communnities</Label>
            <DivLocaleArea>
                {locales.map(({ href, title }, index) => (
                    <Input
                        key={`${index}_locale`}
                        placeholder='Turkish Twitter Account  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; https://twitter.com/'
                        onChange={(e) => {
                            const parts = cleanWords(e.target.value).split('https://')

                            if (parts.length === 2) {
                                console.log(locales)
                                setLocales((locales) => [
                                    ...locales.slice(0, index),
                                    { href: 'https://' + parts[1], title: parts[0] },
                                ])
                            }
                        }}
                    />
                ))}
                <ButtonLocale
                    onClick={() => {
                        setLocales((locales) => [...locales, { href: '', title: '' }])
                    }}
                >
                    Add New Local Community
                    <IconPlus />
                </ButtonLocale>
            </DivLocaleArea>
        </Div>
    )
}

const Div = wrapn('div')`
    flex
    flex-col
    space-y-5
`

const Label = wrapn('label')`
    font-bold
    text-lg
`

const DivLocaleArea = wrapn('div')`
    flex
    flex-col

    space-y-5

    p-5

    rounded-lg2

    border
    border-gris-3
    dark:border-gris-7

    bg-gris-1
    dark:bg-gris-9
`

const Input = wrapn('input')`
    outline-none

    font-semibold
    placeholder:font-medium

    h-10
    w-full

    px-3

    rounded-lg

    border
    border-gris-3
    dark:border-gris-6

    bg-white
    dark:bg-gris-7
`
