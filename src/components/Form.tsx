import { useState } from 'react'
import { wrapn } from 'wrapn'
import { getFormData } from '../functions/getFormData'
import {
    RawFormChain,
    RawFormLayer2,
    RawFormAuth,
    RawFormProject,
    RawBridge,
} from '../types/Api'
import { FormProps, LabeledInputProps } from '../types/globals'
import { Bridger } from './Bridger'
import { ButtonForm } from './Button'

const Form = wrapn('form')`
    flex
    flex-col

    p-6

    space-y-10

    rounded-2xl

    border
    border-gris-3
    dark:border-gris-7

    bg-gris-2
    dark:bg-gris-8
`

const DivForm = wrapn('div')`
    flex
    flex-col

    space-y-6
`

const Label = wrapn('label')`
    font-bold
    text-lg
`

const ToolTipText = wrapn('p')`
    font-normal

    text-gris-6
    dark:text-gris-3
`

const Input = wrapn('input')`
    outline-none

    font-semibold
    placeholder:font-medium

    h-10

    px-3

    rounded-lg2

    border
    border-gris-3
    dark:border-gris-6

    bg-gris-1
    dark:bg-gris-7

    focus:bg-gris-0
    focus:dark:bg-gris-6
`

const TextArea = wrapn('textarea')`
    outline-none

    font-semibold
    placeholder:font-medium

    h-40

    px-3
    py-2

    rounded-lg2

    border
    border-gris-3
    dark:border-gris-6

    bg-gris-1
    dark:bg-gris-7

    focus:bg-gris-0
    focus:dark:bg-gris-6
`

const DivLabeledInput = wrapn('div')`
    flex
    flex-col

    space-y-2
`

const LabeledInput = (props: LabeledInputProps) => {
    return (
        <DivLabeledInput>
            <Label>{props.label}</Label>
            <ToolTipText>{props.tip}</ToolTipText>
            <Input
                placeholder={props.placeHolder}
                name={props.name}
                type={props.isPassword ? 'password' : 'text'}
            />
        </DivLabeledInput>
    )
}

const LabeledTextArea = (props: LabeledInputProps) => {
    const [val, setVal] = useState('')
    return (
        <DivLabeledInput>
            <Label>{props.label}</Label>
            <ToolTipText>{props.tip}</ToolTipText>
            <input readOnly hidden name={props.name} type='text' value={val} />
            <TextArea
                placeholder={props.placeHolder}
                onChange={(e) => setVal(e.target.value)}
            />
        </DivLabeledInput>
    )
}

/** Login Form */
export const LoginForm = ({ onSubmit }: FormProps<RawFormAuth>) => {
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(getFormData(e))
            }}
            className='self-center w-full max-w-2xl'
        >
            <DivForm>
                <LabeledInput
                    name='username'
                    label='User Name'
                    tip='Your user name.'
                    placeHolder='elon'
                />
                <LabeledInput
                    name='password'
                    label='Password'
                    tip='Your password.'
                    placeHolder='••••••••'
                    isPassword
                />
            </DivForm>
            <ButtonForm type='submit'>Login</ButtonForm>
        </Form>
    )
}

/** Register Form */
export const RegisterForm = ({ onSubmit }: FormProps<RawFormAuth>) => {
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(getFormData(e))
            }}
            className='self-center w-full max-w-2xl'
        >
            <DivForm>
                <LabeledInput
                    name='username'
                    label='User Name'
                    tip='Your user name.'
                    placeHolder='elon'
                />
                <LabeledInput
                    name='password'
                    label='Password'
                    tip='Your password.'
                    placeHolder='••••••••'
                    isPassword
                />
            </DivForm>
            <ButtonForm type='submit'>Register</ButtonForm>
        </Form>
    )
}

/** Chain Form */
export const ChainForm = ({ onSubmit }: FormProps<RawFormChain>) => {
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(getFormData(e))
            }}
            className='self-center w-full max-w-3xl'
        >
            <DivForm>
                <LabeledInput
                    name='name'
                    label='Chain Name'
                    tip='The name of the chain.'
                    placeHolder='Ethereum'
                />
                <LabeledInput
                    name='icon'
                    label='Icon URL'
                    tip='URL of the chain icon as SVG.'
                    placeHolder='https://raw.githubusercontent.com/l2planet/images/main/chains/ethereum.svg'
                />
                <LabeledTextArea
                    name='description'
                    label='Description'
                    tip='A short description about the chain.'
                    placeHolder='Ethereum is...'
                />
            </DivForm>
            <ButtonForm type='submit'>Add a New Chain</ButtonForm>
        </Form>
    )
}

/** Layer2 Form */
export const Layer2Form = ({ onSubmit }: FormProps<RawFormLayer2>) => {
    const [bridges, setBridges] = useState<RawBridge[]>([
        {
            address: '',
            tokens: '',
        },
    ])

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit({ ...getFormData(e), bridges })
            }}
        >
            <DivForm>
                <LabeledInput
                    name='chain_id'
                    label='Chain of the Layer 2'
                    tip='The ID of the chain this L2 is for.'
                    placeHolder='ethereum'
                />
                <LabeledInput
                    name='name'
                    label='Layer 2 Name'
                    tip='The name of the layer 2.'
                    placeHolder='Arbitrum'
                />
                <LabeledInput
                    name='icon'
                    label='Icon URL'
                    tip='URL of the layer 2 icon as SVG.'
                    placeHolder='https://example.com/atbitrum.svg'
                />
                <LabeledTextArea
                    name='description'
                    label='Description'
                    tip='A long description about the layer 2.'
                    placeHolder='Arbitrum is...'
                />
                <LabeledInput
                    name='categories'
                    label='Categories'
                    tip='For example: SNARKs, STARKs, ZK, etc. (COMMA SEPERATED)'
                    placeHolder='SNARKs, ZK'
                />
                <LabeledInput
                    name='website'
                    label='Website URL'
                    tip='URL of the official website.'
                    placeHolder='https://arbitrum.io'
                />
                <LabeledInput
                    name='evm_id'
                    label='EVM ID'
                    tip='EVM ID of the layer 2.'
                    placeHolder='35'
                />
                <Bridger bridges={bridges} setBridges={setBridges} />
                <LabeledInput
                    name='twitter'
                    label='Twitter URL'
                    tip='URL of the official Twitter account. (OPTIONAL)'
                    placeHolder='https://twitter.com/arbitrum'
                />
                <LabeledInput
                    name='videos'
                    label='Video URLs'
                    tip='URLs of YouTube videos. (COMMA SEPERATED)'
                    placeHolder='https://youtu.be/ufKxCczY7-c , https://youtu.be/usDxRtl35-c'
                />
                <LabeledInput
                    name='gecko'
                    label='Coin Gecko URL'
                    tip='Coin Gecko URL of the native coin of the layer 2. (OPTIONAL)'
                    placeHolder='https://www.coingecko.com/en/coins/arbitrum'
                />
                <LabeledInput
                    name='investors'
                    label='Investor Icons'
                    tip='URL of the icons of the investors. (COMMA SEPERATED)'
                    placeHolder='https://example.com/venture-capital-1.svg , https://example.com/venture-capital-2.svg'
                />
            </DivForm>
            <ButtonForm type='submit'>Add a New Layer 2</ButtonForm>
        </Form>
    )
}

/** Project Form */
export const ProjectForm = ({ onSubmit }: FormProps<RawFormProject>) => {
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(getFormData(e))
            }}
        >
            <DivForm>
                <LabeledInput
                    name='name'
                    label='Project Name'
                    tip='The name of the project.'
                    placeHolder='Uniswap'
                />
                <LabeledInput
                    name='icon'
                    label='Icon URL'
                    tip='URL of the project icon as SVG.'
                    placeHolder='https://example.com/uniswap.svg'
                />
                <LabeledTextArea
                    name='description'
                    label='Description'
                    tip='Description about the project.'
                    placeHolder='Uniswap is...'
                />
                <LabeledInput
                    name='categories'
                    label='Categories'
                    tip='For example: DEX, NFT Marketplace, AMM, etc. (COMMA SEPERATED)'
                    placeHolder='DEX, AMM'
                />
                <LabeledInput
                    name='website'
                    label='Website'
                    tip='URL of the official website. (OPTIONAL)'
                    placeHolder='https://uniswap.org'
                />
                <LabeledInput
                    name='twitter'
                    label='Twitter URL'
                    tip='URL of the official Twitter account. (OPTIONAL)'
                    placeHolder='https://twitter.com/uniswap'
                />
            </DivForm>
            <ButtonForm type='submit'>Add a New Project</ButtonForm>
        </Form>
    )
}
