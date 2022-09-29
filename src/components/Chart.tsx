import { wrapn } from "wrapn"
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { ChartDataItem } from "../types/globals"
import { useEffect, useState } from "react"
import { InternalLayer2 } from "../types/Api"
import { useLocalStorage } from "../hooks/useLocalStorage"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
ChartJS.defaults.color = '#838893'
ChartJS.defaults.borderColor = '#83889360'


export const Chart = ({ data, l2 }: { data: InternalLayer2['tvls'], l2: string }) => {
    const [time, setTime] = useLocalStorage<keyof typeof data>(`tvl${l2}`,'daily');
    const [aspectRatio, setRatio] = useState<number>(2)

    useEffect(() => {
        const handler = () => {
            const w = window.outerWidth
            if(w < 512) {
                setRatio(1.5)
            } else if(w < 660) {
                setRatio(1.75)
            } else if(w < 850) {
                setRatio(2)
            } else if(w < 1000) {
                setRatio(2.5)
            } else {
                setRatio(3)
            }
        }
        handler()

        addEventListener('resize', handler)
        return () => removeEventListener('resize', handler)
    }, [])


    return (
        <Div>
            <RowButton>
                <Button onClick={() => setTime('daily')}>1D</Button>
                <Button onClick={() => setTime('weekly')}>1W</Button>
                <Button onClick={() => setTime('monthly')}>1M</Button>
                <Button onClick={() => setTime('quarterly')}>3M</Button>
                <Button onClick={() => setTime('yearly')}>1Y</Button>
            </RowButton>
            <Line
                options={{
                    responsive: true,
                    color: '#838893',
                    aspectRatio: aspectRatio,
                }}

                data={{
                    labels: data[time].map(o => o.t),
                    datasets: [
                        {
                            label: 'TVL',
                            data: data[time].map(o => o.v),
                            borderColor: 'rgb(129 140 248)',
                            backgroundColor: 'rgb(129 140 248)',
                            hoverBorderColor: 'rgb(129 140 248)',
                            borderWidth: 3,
                            hoverBorderWidth: 9,
                            pointBorderWidth: 6,
                        }
                    ]
                }}
            />
        </Div>
    )
}

const Div = wrapn('div')`
    flex
    flex-col

    rounded-xl
`
const RowButton = wrapn('div')`
    flex
    space-x-4
`
const Button = wrapn('button')`
    font-semibold

    sm:text-lg

    flex
    items-center

    h-9
    sm:h-10
    px-4
    sm:px-5

    rounded-lg

    border
    border-pri-2
    dark:border-pri-7

    hover:border-pri-3
    hover:dark:border-pri-6


    bg-pri-2/50
    dark:bg-pri-7/50

    hover:bg-pri-3/50
    hover:dark:bg-pri-6/50

    hover:scale-95
    active:scale-105

    duration-200
`