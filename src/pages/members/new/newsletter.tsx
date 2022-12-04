import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Editor } from '../../../components/Editor'
import { H1 } from '../../../components/H'
import { sendNewsletter } from '../../../functions/api'

const NewNewsletter: NextPage = () => {
    return (
        <>
            <NextSeo
                title='L2 Planet | New Newsletter'
            />

            <H1>New Newletter</H1>

            <Editor
                onSubmit={async (newsletterBlocks) => {
                    try {
                        await sendNewsletter(newsletterBlocks)
                        alert('Succesfully added!')
                    } catch (err: any) {
                        alert(err.message)
                    }
                }}
            />
        </>
    )
}

export default NewNewsletter
