import NextLink from 'next/link'
import { ReactNode } from 'react'
import { Wrapn } from 'wrapn'

interface LinkProps {
    href: string
    a: Wrapn<'a'>
    newTab?: boolean | undefined
    children: ReactNode
    disabled?: boolean | undefined
}

/**
 * ## Link
 * A custom component based on Next.js's Link.
 *
 * ### Usage
 * ```jsx
 * // Use like this
 * <Link href='/' a={A}>Home</Link>
 *
 * // Wrapn<'a'> component
 * const A = wrapn('a')`
 *     font-bold
 *     text-2xk
 * `
 * ```
 */
export const Link = ({ a: A, children, href, disabled, newTab }: LinkProps) => {
    return (
        <NextLink href={disabled ? '#' : href} passHref>
            <A target={newTab ? '_blank' : '_self'}>{children}</A>
        </NextLink>
    )
}
