import { wrapn } from 'wrapn'
import { TPSTableData, TVLTableData } from '../types/globals'
import { Img } from './Image'

// TVL table
export const TableTVL = ({ data }: { data: TVLTableData }) => {
    return (
        <Div>
            <Table>
                <TrMain>
                    <Th>Layer 2</Th>
                    <Th>TVL</Th>
                </TrMain>
                {data.map((l2) => (
                    <TrCommon key={`${l2.name} row`}>
                        <Td className='w-full'>
                            <DivRow>
                                <Img
                                    img={ImgIcon}
                                    alt={`${l2.name} logo`}
                                    src={l2.icon}
                                />
                                {l2.name}
                            </DivRow>
                        </Td>
                        <Td className='min-w-fit'>$ {l2.tvl}</Td>
                    </TrCommon>
                ))}
            </Table>
        </Div>
    )
}

// TPS table
export const TableTPS = ({ data }: { data: TPSTableData }) => {
    return (
        <Div>
            <Table>
                <TrMain>
                    <Th>Layer 2</Th>
                    <Th>TPS</Th>
                </TrMain>
                {data.map((l2) => (
                    <TrCommon key={`${l2.name} row`}>
                        <Td className='w-full'>
                            <DivRow>
                                <Img
                                    img={ImgIcon}
                                    alt={`${l2.name} logo`}
                                    src={l2.icon}
                                />
                                {l2.name}
                            </DivRow>
                        </Td>
                        <Td className='min-w-fit'>$ {l2.tps}</Td>
                    </TrCommon>
                ))}
            </Table>
        </Div>
    )
}

const Div = wrapn('div')`
    w-full
`

const H = wrapn('h1')`
    TODO
`
const DivRow = wrapn('div')`
    flex

    w-full
    h-full

    items-center

    gap-x-1.5

`

const Table = wrapn('table')`
    flex
    flex-col

    p-4
    space-y-3.5
    rounded-xl

    bg-gris-2/50
    dark:bg-gris-8
`

const Tr = wrapn('tr')`
    flex
    justify-between
`

const TrMain = wrapn(Tr)`
    
`

const TrCommon = wrapn(Tr)`
    h-10
    p-1.5

    rounded-lg

    border
    border-pri-2
    dark:border-pri-9

    bg-pri-2/50
    dark:bg-pri-9/50

    hover:bg-pri-3/50
    hover:dark:bg-pri-8/50

    duration-200
    cursor-pointer
`

const Th = wrapn('th')`

`

const Td = wrapn('td')`
    flex
    items-center
`

const ImgIcon = wrapn('img')`
    aspect-square
    h-full
`
