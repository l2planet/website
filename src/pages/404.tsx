import { wrapn } from 'wrapn'
import { H1 } from '../components/H'
import { Link } from '../components/Link'

function Page404() {
    return (
        <>
            <H1>404 Not Found</H1>
            <Link a={A} href='/'>
                Go back home
            </Link>
        </>
    )
}

export default Page404

const A = wrapn('a')`
    text-center

    font-semibold
    text-xl md:text-2xl

    text-gris-8
    dark:text-gris-2
`
