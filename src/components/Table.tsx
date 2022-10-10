import { wrapn } from 'wrapn'
import { TPSTableData, FeesTableData } from '../types/globals'
import { Img } from './Image'

// Fees table
export const TableFees = ({ data }: { data: FeesTableData }) => {
    return (
        <Div>
            <Table>
                <TrFeesMain>
                    <Th className='col-span-2 text-left'>Layer 2</Th>
                    <Th className='text-right'>Send</Th>
                    <Th className='text-right'>Swap</Th>
                </TrFeesMain>
                {data.map((l2) => (
                    <TrFeesCommon key={`${l2.name} row`}>
                        <Td className='col-span-2'>
                            <DivRow >
                                <Img img={ImgIcon} alt={`${l2.name} logo`} src={l2.icon} />
                                {l2.name}
                            </DivRow>
                        </Td>
                        <Td className='text-center'>$ {l2.send}</Td>
                        
                        <Td className='min-w-fit'>$ {l2.swap}</Td>
                    </TrFeesCommon>
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
    

    gap-x-1.5

    
`

const Table = wrapn('table')`
    flex
    flex-col

    p-4
    space-y-2
    rounded-xl

    bg-gris-2/50
	dark:bg-[#0b1221]
`

const TrFees = wrapn('tr')`
    h-full    
    grid
    grid-cols-4
    items-center
`

const TrFeesMain = wrapn(TrFees)`
    
`

const TrFeesCommon = wrapn(TrFees)`
    h-9
    px-2.5

    font-semibold
    text-xs
    sm:text-sm

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
    text-lg
    font-bold
`

const Td = wrapn('td')`
    text-right
`

const ImgIcon = wrapn('img')`
    aspect-square
    h-5
`


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
                                <Img img={ImgIcon} alt={`${l2.name} logo`} src={l2.icon} />
                                {l2.name}
                            </DivRow>
                        </Td>
                        <Td className='min-w-fit'>{l2.tps} tx/s</Td>
                    </TrCommon>
                ))}
            </Table>
        </Div>
    )
}


const Tr = wrapn('tr')`
    flex
    justify-between
    items-center
`

const TrMain = wrapn(Tr)`
    
`

const TrCommon = wrapn(Tr)`
    h-9
    px-2.5

    font-semibold
    text-xs
    sm:text-sm

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
