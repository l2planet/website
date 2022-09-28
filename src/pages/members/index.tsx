import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LoginForm } from '../../components/Form'
import { SEO } from '../../components/SEO'
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
            
            <LoginForm onSubmit={async (e) => {
                // Authentication comes here!!!!
                let res = await makePostRequest('http://34.159.140.212/register', {
                    Username: e.username,
                    Password: e.password,

                })
                console.log(`
                    status: ${res?.status}\n
                    json: ${res?.json}
                    text: ${res?.text}
                `)
            }}/>
        </>
    )
}
            
export default Members
            