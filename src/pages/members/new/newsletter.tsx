import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Editor } from '../../../components/Editor'
import { LoginForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { getFormData } from '../../../functions/getFormData'

const NewNewsletter: NextPage = () => {
    return(
        <>
            <SEO
                title='L2 Planet | New Newsletter'
                description='L2 Planet'
                favicon='/favicon.ico'
            />
            
            <H1>New Newletter</H1>

            <Editor onSubmit={blocks => {
                console.log(blocks)
            }}/>
        </>
    )
}
            
export default NewNewsletter
            