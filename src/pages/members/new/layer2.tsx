import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layer2Form, LoginForm } from '../../../components/Form'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { getFormData } from '../../../functions/getFormData'

const NewLayer2: NextPage = () => {
    return(
        <>
            <SEO
                title='L2 Planet | New Layer 2'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>New Layer 2</H1>
            
            <Layer2Form onSubmit={(e) => {
                // Uploading layer2 to the backend server!!!!
                // TODO
            }}/>
        </>
    )
}
            
export default NewLayer2
            