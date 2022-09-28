import { useState } from "react";
import { wrapn } from "wrapn";
import { getFormData } from "../functions/getFormData";
import { RawFormChain, RawFormLayer2, RawFormAuth, RawFormProject } from "../types/Api";
import { FormProps, LabeledInputProps } from "../types/globals";
import { ButtonForm } from "./Button";

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
    return <DivLabeledInput>
        <Label>{props.label}</Label>
        <ToolTipText>{props.tip}</ToolTipText>
        <Input name={props.name} type={props.isPassword ? 'password' : 'text'}/>
    </DivLabeledInput>
}


const LabeledTextArea = (props: LabeledInputProps) => {
    const [val, setVal] = useState('')
    return <DivLabeledInput>
        <Label>{props.label}</Label>
        <ToolTipText>{props.tip}</ToolTipText>
        <input readOnly hidden name={props.name} type='text' value={val}/>
        <TextArea onChange={(e) => setVal(e.target.value)}/>
    </DivLabeledInput>
}



/** Login Form */
export const LoginForm = ({ onSubmit }: FormProps<RawFormAuth>) => {
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            onSubmit(getFormData(e))
        }} className='self-center w-full max-w-2xl'>
            <DivForm>
                <LabeledInput name='username' label='User Name' tip='Your user name.'/>
                <LabeledInput name='password' label='Password' tip='Your password.' isPassword/>
            </DivForm>
            <ButtonForm type='submit'>Login</ButtonForm>
        </Form>
    )
}




/** Register Form */
export const RegisterForm = ({ onSubmit }: FormProps<RawFormAuth>) => {
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            onSubmit(getFormData(e))
        }} className='self-center w-full max-w-2xl'>
            <DivForm>
                <LabeledInput name='username' label='User Name' tip='Your user name.'/>
                <LabeledInput name='password' label='Password' tip='Your password.' isPassword/>
            </DivForm>
            <ButtonForm type='submit'>Register</ButtonForm>
        </Form>
    )
}







/** Chain Form */
export const ChainForm = ({ onSubmit }: FormProps<RawFormChain>) => {
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            onSubmit(getFormData(e))
        }} className='self-center w-full max-w-3xl'>
            <DivForm>
                <LabeledInput name='name' label='Chain Name' tip='The name of the chain.'/>
                <LabeledInput name='icon' label='Icon URL' tip='URL of the chain icon as SVG.'/>
                <LabeledTextArea name='description' label='Description' tip='A short description about the chain.'/>
            </DivForm>
            <ButtonForm type='submit'>Add a New Chain</ButtonForm>
        </Form>
    )
}






/** Layer2 Form */
export const Layer2Form = ({ onSubmit }: FormProps<RawFormLayer2>) => {
    return (
        <Form  onSubmit={(e) => {
            e.preventDefault()
            onSubmit(getFormData(e))
        }}>
            <DivForm>
                <LabeledInput name='name' label='Layer 2 Name' tip='The name of the layer 2.'/>
                <LabeledInput name='icon' label='Icon URL' tip='URL of the layer 2 icon as SVG.'/>
                <LabeledTextArea name='description' label='Description' tip='A long description about the layer 2.'/>
                <LabeledInput name='categories' label='Categories' tip='For example: SNARKs, STARKs, ZK, etc. (COMMA SEPERATED)'/>
                <LabeledInput name='website' label='Website URL' tip='URL of the official website.'/>
                <LabeledInput name='evmId' label='EVM ID' tip='EVM ID of the layer 2.'/>
                <LabeledInput name='bridges' label='Bridge Contracts' tip='Contract adresses of the bridges. (COMMA SEPERATED)'/>
                <LabeledInput name='tokens' label='Token Tickers' tip='Tickers of the bridge supported assets. (COMMA SEPERATED)'/>
                <LabeledInput name='twitter' label='Twitter URL' tip='URL of the official Twitter account. (OPTIONAL)'/>
                <LabeledInput name='videos' label='Video URLs' tip='URLs of YouTube videos. (COMMA SEPERATED)'/>
                <LabeledInput name='gecko' label='Coin Gecko URL' tip='Coin Gecko URL of the native coin of the layer 2. (OPTIONAL)'/>
                <LabeledInput name='investors' label='Investor Icons' tip='URL of the icons of the investors. (COMMA SEPERATED)'/>
            </DivForm>
            <ButtonForm type='submit'>Add a New Layer 2</ButtonForm>
        </Form>
    )
}






/** Project Form */
export const ProjectForm = ({ onSubmit }: FormProps<RawFormProject>) => {
    return (
        <Form  onSubmit={(e) => {
            e.preventDefault()
            onSubmit(getFormData(e))
        }}>
            <DivForm>
                <LabeledInput name='name' label='Project Name' tip='The name of the project.'/>
                <LabeledInput name='icon' label='Icon URL' tip='URL of the project icon as SVG.'/>
                <LabeledTextArea name='description' label='Description' tip='Description about the project.'/>
                <LabeledInput name='categories' label='Categories' tip='For example: DEX, NFT Marketplace, AMM, etc. (COMMA SEPERATED)'/>
                <LabeledInput name='website' label='Website' tip='URL of the official website. (OPTIONAL)'/>
                <LabeledInput name='twitter' label='Twitter URL' tip='URL of the official Twitter account. (OPTIONAL)'/>
            </DivForm>
            <ButtonForm type='submit'>Add a New Project</ButtonForm>
        </Form>
    )
}