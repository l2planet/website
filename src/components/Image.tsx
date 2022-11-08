import { wrapn, Wrapn } from 'wrapn'
import NextImage, { StaticImageData } from 'next/image'

/**
 * ## Image
 * A custom component based on Next.js's Image component.
 *
 * ### Usage
 * ```jsx
 * // Import the image
 * import logo from '../public/logo.png'
 *
 * // Use like this
 * <Image alt='logo' src={logo} size='h-10 w-10'/>
 * ```
 *
 */
export const Image = ({ size, src, alt }: ImageProps) => {
    return (
        <div className={size}>
            <NextImage alt={alt} src={src} layout='responsive' className='select-none' draggable='false' />
        </div>
    )
}

interface ImageProps {
    alt: string
    src: StaticImageData
    size: string
}

/**
 * ## Img
 * A custom component based on <img/> HTML element.
 *
 * ### Usage
 * ```jsx
 * // Use like this
 * <Img alt='logo' src={logo} size='h-10 w-10'/>
 * ```
 *
 */
export const Img = ({ img: Img, src, alt }: ImgProps) => {
    return <Img alt={alt} src={src} className={'select-none'} draggable='false' />
}

interface ImgProps {
    alt: string
    src: string
    img: Wrapn<'img'>
}
