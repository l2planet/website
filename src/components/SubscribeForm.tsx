import { wrapn } from 'wrapn'
import { IconSubscribe } from './icons/IconSubscribe'
import { getFormData } from '../functions/getFormData'
import { sendEmailToSubscribe } from '../functions/api'
import { useRef } from 'react'

export const SubscribeForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <Form
            onSubmit={async (e) => {
                e.preventDefault()
                const { email } = getFormData<{ email: string }>(e)
                const isEmailOk = email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
                const input = inputRef.current
                if (!isEmailOk) {
                    alert('Your email address is invalid.')
                    if (input) input.value = ''
                    return
                }

                try {
                    await sendEmailToSubscribe(email)
                    alert(`You've subscribed to our biweekly newsletter.`)

                    if (input) input.value = ''
                } catch {
                    alert('Subscription is not currently working.')
                }
            }}
        >
            <Input name='email' placeholder='elon@musk.com' ref={inputRef} />
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
