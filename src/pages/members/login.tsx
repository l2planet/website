/* eslint-disable react/no-unescaped-entities */
import { wrap } from 'module'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { wrapn } from 'wrapn'
import { ButtonForm } from '../../components/Button'
import { LoginForm } from '../../components/Form'
import { H1 } from '../../components/H'
import { Link } from '../../components/Link'
import { SEO } from '../../components/SEO'
import { authLogin } from '../../functions/auth'
import { getCookie, setCookie } from '../../functions/cookie'
import { getFormData } from '../../functions/getFormData'
import { makePostRequest } from '../../functions/makeRequest'

const Members: NextPage = () => {

    return(
        <>
            <SEO
                title='L2 Planet | Members'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>Login</H1>
            
            <Div>
                <LoginForm onSubmit={async (data) => {
                    const res = await authLogin(data);
                    
                    if(res === null) {
                        alert('Wrong password or username.')
                    } else {
                        alert('Succesfully logged in!')
                        console.log(res)
                        setCookie('jwt', res.token, res.expire)
                    }

                }}/>

                <Link a={A} href='/members/register'>Don't have an account? Register</Link>
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