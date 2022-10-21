import { ChangeEventHandler, Dispatch, SetStateAction, useCallback, useState } from 'react'
import { wrapn } from 'wrapn'
import { RawBridge } from '../types/Api'
import { ButtonBridge, ButtonForm } from './Button'
import { IconPlus } from './icons/IconPlus'

export const Bridger = ({
    bridges,
    setBridges,
}: {
    bridges: RawBridge[]
    setBridges: Dispatch<SetStateAction<RawBridge[]>>
}) => {
    const setContractOf = useCallback(
        (index: number, val: string) => {
            setBridges((bridges) => [
                ...bridges.slice(0, index),
                { contract_address: val, tokens: bridges[index].tokens },
                ...bridges.slice(index + 1),
            ])
        },
        [setBridges]
    )

    const setTokensOf = useCallback(
        (index: number, val: string) => {
            setBridges((bridges) => [
                ...bridges.slice(0, index),
                { contract_address: bridges[index].contract_address, tokens: val },
                ...bridges.slice(index + 1),
            ])
        },
        [setBridges]
    )

    const addBridges = useCallback(() => {
        setBridges((bridges) => [...bridges, { contract_address: '', tokens: '' }])
    }, [setBridges])

    return (
        <Div>
            <Label>Bridges and Supported Tokens</Label>
            <DivBridgeArea>
                {bridges.map((bridge, i) => (
                    <Bridge
                        key={`bridge${i}`}
                        label={`Bridge ${i + 1}`}
                        contract={bridge.contract_address}
                        tokens={bridge.tokens}
                        setContract={(val) => setContractOf(i, val)}
                        setTokens={(val) => setTokensOf(i, val)}
                    />
                ))}

                <ButtonBridge
                    onClick={(e) => {
                        e.preventDefault()
                        addBridges()
                    }}
                >
                    Add New Bridge
                    <IconPlus />
                </ButtonBridge>
            </DivBridgeArea>
        </Div>
    )
}

const Div = wrapn('div')`
    flex
    flex-col
    space-y-5
`

const DivBridgeArea = wrapn('div')`
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

const Label = wrapn('label')`
    font-bold
    text-lg
`
const Button = wrapn('button')`
    flex
    items-center

    h-10

    rounded-lg2

    bg-pri-3
`

const Bridge = (props: {
    label: string
    contract: string
    tokens: string
    setContract(val: string): void
    setTokens(val: string): void
}) => {
    return (
        <BDiv>
            <BLabel>{props.label}</BLabel>
            <Input
                placeholder='Bridge contract address: 0x123456789...'
                value={props.contract}
                onChange={(e) => props.setContract(e.target.value)}
            />
            <TextArea
                rows={3}
                placeholder={`LEAVE EMPTY, if the bridge supports any asset. Else, type supported assets' tickers. For example: ETH, USDC, UNI...`}
                value={props.tokens}
                onChange={(e) => props.setTokens(e.target.value)}
            />
        </BDiv>
    )
}

const BDiv = wrapn('div')`
    flex
    flex-col


    space-y-2
`

const BLabel = wrapn('label')`
    font-semibold
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
const TextArea = wrapn('textarea')`
    outline-none

    font-semibold
    placeholder:font-medium

    px-3
    py-2

    rounded-lg2

    border
    border-gris-3
    dark:border-gris-6

    bg-white
    dark:bg-gris-7
`
