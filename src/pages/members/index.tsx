import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LoginForm } from '../../components/Form'
import { SEO } from '../../components/SEO'
import { getFormData } from '../../functions/getFormData'

const Members: NextPage = () => {
    return(
        <>
            <SEO
                title='L2 Planet | Members'
                description='L2 Planet'
                favicon='/favicon.ico'
            />
            
            <LoginForm onSubmit={(e) => {
                // Authentication comes here!!!!
                e.password
                e.username
            }}/>
        </>
    )
}
            
export default Members
            