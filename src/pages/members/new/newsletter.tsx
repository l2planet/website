import type { NextPage } from 'next'
import { Editor } from '../../../components/Editor'
import { H1 } from '../../../components/H'
import { SEO } from '../../../components/SEO'
import { sendNewsletter } from '../../../functions/api'

const NewNewsletter: NextPage = () => {
    return (
        <>
            <SEO
                title='L2 Planet | New Newsletter'
                description='L2 Planet'
                favicon='/favicon.ico'
            />

            <H1>New Newletter</H1>

            <Editor onSubmit={async (newsletterBlocks) => {
                try {
                    await sendNewsletter(newsletterBlocks)
                    alert('Succesfully added!')
                } catch (err: any) {
                    alert(err.message)
                }
            }} />
        </>
    )
}

export default NewNewsletter
