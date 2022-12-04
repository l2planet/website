/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { wrapn } from 'wrapn'
import { RegisterForm } from '../../components/Form'
import { H1 } from '../../components/H'
import { Link } from '../../components/Link'
import { authRegister } from '../../functions/api'

const Members: NextPage = () => {
    const router = useRouter()

    return (
        <>
            <NextSeo
                title='L2 Planet | Register'
            />

            <H1>Register</H1>

            <Div>
                <RegisterForm
                    onSubmit={async (formData) => {
                        try {
                            await authRegister(formData)
                            alert('Succesfully registered!')
                            alert(`Let's log in!`)
                            router.push('/members/login')
                        } catch (e: any) {
                            alert(e.message)
                        }
                    }}
                />

                <Link a={A} href='/members/login'>
                    Already have an account? Login.
                </Link>
            </Div>
        </>
    )
}

export default Members

const Div = wrapn('div')`
    flex
    flex-col
    
    space-y-6
`

const A = wrapn('a')`
    text-center

    font-semibold

    active:text-slate-500

    duration-200
`
