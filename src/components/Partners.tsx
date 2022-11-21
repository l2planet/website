import { wrapn } from 'wrapn'
import PARTNERS from '../../PARTNERS.json'
import { Img } from './Image'

export const Partners = () => {
    return (
        <DivPartners>
            {(PARTNERS as string[]).map((logoSrc) => (
                <PartnerLogo src={logoSrc} key={logoSrc} />
            ))}
        </DivPartners>
    )
}

const DivPartners = wrapn('div')`
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4

    gap-6
    md:gap-8
`

const PartnerLogo = ({ src }: { src: string }) => {
    return <Img alt={src} img={ImgPartner} src={src} />
}

const ImgPartner = wrapn('img')`
    h-full
    w-full
    p-5
    rounded-xl
    bg-gris-2
    dark:bg-gris-4
`
