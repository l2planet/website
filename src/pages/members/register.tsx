/* eslint-disable react/no-unescaped-entities */
import { wrap } from 'module'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { wrapn } from 'wrapn'
import { ButtonForm } from '../../components/Button'
import { LoginForm } from '../../components/Form'
import { H1 } from '../../components/H'
import { Link } from '../../components/Link'
import { SEO } from '../../components/SEO'
import { authRegister } from '../../functions/auth'
import { getFormData } from '../../functions/getFormData'
import { makePostRequest } from '../../functions/makeRequest'

const Members: NextPage = () => {
    const router = useRouter()

    return(
        <>
            <SEO
                title='L2 Planet | Members'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>Register</H1>
            
            <Div>
                <LoginForm onSubmit={async (data) => {
                    

                    const res = await authRegister(data)
                    console.log(res)
                    if(res === null) {
                        alert('An error occured.')
                    } else {
                        alert('Succesfully registered!')
                        setTimeout(() => router.push('/members/login'), 2000)
                    }
                    
                }}/>

                <Link a={A} href='/members/login'>Already have an account? Login.</Link>
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