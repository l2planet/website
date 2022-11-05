import { wrapn } from 'wrapn'
import { IconSubscribe } from './icons/IconSubscribe'

export const SubscribeForm = () => {
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Logic will be added soon.')
            }}
        >
            <Input name='email' placeholder='elon@musk.com' />
            <Button type='submit'>
                <IconSubscribe />
            </Button>
        </Form>
    )
}

const Form = wrapn('form')`
    flex
    bg-gris-2
    dark:bg-gris-7
    border
    border-gris-3
    dark:border-gris-6
    mx-4
    sm:mx-8
    rounded-lg
`

const Input = wrapn('input')`
    outline-none
    bg-transparent
    py-2
    px-3
    w-full
    h-full
`

const Button = wrapn('button')`
    bg-gris-3
    dark:bg-gris-6
    border-l
    border-gris-4/30
    dark:border-gris-5/40
    h-10
    py-1
    px-2.5
    rounded-r-lg
`
