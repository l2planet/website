import { useState } from 'react'
import { wrapn } from 'wrapn'
import { getFormData } from '../functions/getFormData'
import {
    InternalChain,
    InternalRawLayer2,
    InternalRawProject,
    L2Locale,
    RawBridge,
    RawFormAuth,
    RawFormChain,
    RawFormLayer2,
    RawFormProject,
} from '../types/Api'
import { FormProps, LabeledInputProps } from '../types/globals'
import { Bridger } from './Bridger'
import { ButtonForm } from './Button'
import { LocalCommunitiesInput } from './LocalCommunitiesInput'

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

    leading-relaxed

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
                defaultValue={props.default ?? ''}
                placeholder={props.placeHolder}
                name={props.name}
                type={props.isPassword ? 'password' : 'text'}
            />
        </DivLabeledInput>
    )
}

const LabeledTextArea = (props: LabeledInputProps) => {
    const [val, setVal] = useState(props.default ?? '')
    return (
        <DivLabeledInput>
            <Label>{props.label}</Label>
            <ToolTipText>{props.tip}</ToolTipText>
            <input
                readOnly
                hidden
                name={props.name}
                defaultValue={props.default ?? ''}
                type='text'
                value={val}
            />
            <TextArea
                defaultValue={props.default ?? ''}
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
                <LabeledInput name='username' label='User Name' tip='Your user name.' placeHolder='elon' />
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
                <LabeledInput name='username' label='User Name' tip='Your user name.' placeHolder='elon' />
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
export const ChainForm = ({ onSubmit, chain }: FormProps<RawFormChain> & { chain?: InternalChain }) => {
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
                    default={chain?.name}
                />
                <LabeledInput
                    name='icon'
                    label='Icon URL'
                    tip='URL of the chain icon as SVG.'
                    placeHolder='https://raw.githubusercontent.com/l2planet/images/main/chains/ethereum.svg'
                    default={chain?.icon}
                />
                <LabeledTextArea
                    name='description'
                    label='Description'
                    tip='A short description about the chain.'
                    placeHolder='Ethereum is...'
                    default={chain?.description}
                />
            </DivForm>
            <ButtonForm type='submit'>{chain ? 'Modify Old Chain' : 'Add a New Chain'}</ButtonForm>
        </Form>
    )
}

/** Layer2 Form */
export const Layer2Form = ({
    onSubmit,
    layer2,
}: FormProps<RawFormLayer2> & { layer2?: InternalRawLayer2 }) => {
    const [bridges, setBridges] = useState<RawBridge[]>(
        layer2?.bridges?.map((bridge) => ({
            ...bridge,
            tokens: bridge.tokens.join(', '),
        })) ?? [
            {
                contract_address: '',
                tokens: '',
            },
        ]
    )

    const [locales, setLocales] = useState<L2Locale[]>(layer2?.locales ?? [{ href: '', title: '' }])

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit({ ...getFormData(e), bridges, locales })
            }}
        >
            <DivForm>
                <LabeledInput
                    name='chain_id'
                    label='Chain of the Layer 2'
                    tip='The ID of the chain this L2 is for.'
                    placeHolder='ethereum'
                    default={layer2?.chain_id}
                />
                <LabeledInput
                    name='name'
                    label='Layer 2 Name'
                    tip='The name of the layer 2.'
                    placeHolder='Arbitrum'
                    default={layer2?.name}
                />
                <LabeledInput
                    name='status'
                    label='Layer 2 Status'
                    tip='The status of the layer 2. (live or testnet or close)'
                    placeHolder='testnet'
                    default={layer2?.status}
                />
                <LabeledInput
                    name='icon'
                    label='Icon URL'
                    tip='URL of the layer 2 icon as SVG.'
                    placeHolder='https://example.com/atbitrum.svg'
                    default={layer2?.icon}
                />
                <LabeledTextArea
                    name='description'
                    label='Description'
                    tip='A long description about the layer 2.'
                    placeHolder='Arbitrum is...'
                    default={layer2?.description}
                />
                <LabeledInput
                    name='categories'
                    label='Categories'
                    tip='For example: SNARKs, STARKs, ZK, etc. (COMMA SEPERATED)'
                    placeHolder='SNARKs, ZK'
                    default={layer2?.categories.join(', ')}
                />
                <LabeledInput
                    name='website'
                    label='Website URL'
                    tip='URL of the official website.'
                    placeHolder='https://arbitrum.io'
                    default={layer2?.website}
                />
                <LabeledInput
                    name='evm_id'
                    label='EVM ID'
                    tip='EVM ID of the layer 2.'
                    placeHolder='35'
                    default={layer2?.evm_id}
                />
                <Bridger bridges={bridges} setBridges={setBridges} />
                <LabeledInput
                    name='twitter'
                    label='Twitter URL'
                    tip='URL of the official Twitter account. (OPTIONAL)'
                    placeHolder='https://twitter.com/arbitrum'
                    default={layer2?.twitter ? 'https://twitter.com/' + layer2.twitter : undefined}
                />
                <LabeledInput
                    name='gecko'
                    label='Coin Gecko URL'
                    tip='Coin Gecko URL of the native coin of the layer 2. (OPTIONAL)'
                    placeHolder='https://www.coingecko.com/en/coins/arbitrum'
                    default={layer2?.gecko ? 'https://www.coingecko.com/en/coins/' + layer2.gecko : undefined}
                />
                <LabeledInput
                    name='github'
                    label='Github Profile URL'
                    tip='URL of the official Github profile of the layer 2. (OPTIONAL)'
                    placeHolder='https://github.com/l2planet'
                    default={layer2?.github ? 'https://github.com/' + layer2.github : undefined}
                />
                <LabeledInput
                    name='discord'
                    label='Discord Invite Link'
                    tip='Invite link for the Dicord server of the layer 2. (OPTIONAL)'
                    placeHolder='https://discord.gg/l2planet'
                    default={layer2?.discord ? layer2.discord : undefined}
                />
                <LocalCommunitiesInput locales={locales} setLocales={setLocales} />
                <LabeledTextArea
                    name='videos'
                    label='Video URLs'
                    tip='URLs of YouTube videos. (COMMA SEPERATED)'
                    placeHolder='https://youtu.be/ufKxCczY7-c, https://youtu.be/usDxRtl35-c'
                    default={layer2?.videos.map((vid) => 'https://www.youtube.com/watch?v=' + vid).join(', ')}
                />
                <LabeledTextArea
                    name='investors'
                    label='Investor Icons'
                    tip='URL of the icons of the investors. (COMMA SEPERATED)'
                    placeHolder='https://example.com/venture-capital-1.svg , https://example.com/venture-capital-2.svg'
                    default={layer2?.investors.join(', ')}
                />
            </DivForm>
            <ButtonForm type='submit'>Add a New Layer 2</ButtonForm>
        </Form>
    )
}

/** Project Form */
export const ProjectForm = ({
    onSubmit,
    project,
}: FormProps<RawFormProject> & { project?: InternalRawProject }) => {
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
                    default={project?.name}
                />
                <LabeledInput
                    name='l2_ids'
                    label='Layer 2 IDs'
                    tip={`The IDs of the layer 2s this project is on. (COMMA SEPERATED)`}
                    placeHolder='starknet, arbitrum_one'
                    default={project?.layer2_ids.join(', ')}
                />
                <LabeledInput
                    name='icon'
                    label='Icon URL'
                    tip='URL of the project icon as SVG.'
                    placeHolder='https://example.com/uniswap.svg'
                    default={project?.icon}
                />
                <LabeledTextArea
                    name='description'
                    label='Description'
                    tip='Description about the project.'
                    placeHolder='Uniswap is...'
                    default={project?.description}
                />
                <LabeledInput
                    name='categories'
                    label='Categories'
                    tip='For example: DEX, NFT Marketplace, AMM, etc. (COMMA SEPERATED)'
                    placeHolder='DEX, AMM'
                    default={project?.categories.join(', ')}
                />
                <LabeledInput
                    name='website'
                    label='Website'
                    tip='URL of the official website. (OPTIONAL)'
                    placeHolder='https://uniswap.org'
                    default={project?.website}
                />
                <LabeledInput
                    name='twitter'
                    label='Twitter URL'
                    tip='URL of the official Twitter account. (OPTIONAL)'
                    placeHolder='https://twitter.com/uniswap'
                    default={project?.twitter ? 'https://twitter.com/' + project?.twitter : undefined}
                />
                <LabeledInput
                    name='github'
                    label='Github Profile URL'
                    tip='URL of the official Github profile. (OPTIONAL)'
                    placeHolder='https://github.com/l2planet'
                    default={project?.github ? 'https://github.com/' + project.github : undefined}
                />
            </DivForm>
            <ButtonForm type='submit'>{project ? 'Modify Project' : 'Add a New Project'}</ButtonForm>
        </Form>
    )
}
