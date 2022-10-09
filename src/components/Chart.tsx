import { wrapn } from 'wrapn'
import { ChartDataItem } from '../types/globals'
import { useCallback, useEffect, useState } from 'react'
import { InternalLayer2 } from '../types/Api'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { createChart, CrosshairMode } from 'lightweight-charts'
import { useTheme } from '../contexts/ThemeContext'
import dynamic from 'next/dynamic'

const datda: { name: string; m$: number }[] = [
    {
        name: 'Page A',
        m$: 35.4,
    },
    {
        name: 'Page B',
        m$: 45.3,
    },
    {
        name: 'Page C',
        m$: 57.2,
    },
    {
        name: 'Page D',
        m$: 53.7,
    },
    {
        name: 'Page E',
        m$: 48.2,
    },
    {
        name: 'Page F',
        m$: 63.8,
    },
    {
        name: 'Page G',
        m$: 43.7,
    },
]

const Chart = ({ data }: { data: InternalLayer2['tvls'] }) => {
    const { isDark } = useTheme()

    const updateChart = useCallback(() => {
        ;(document.getElementById('chart') as HTMLDivElement).innerHTML = ''
        const chart = createChart('chart', {
            layout: {
                background: {
                    color: 'transparent',
                },
                textColor: isDark ? 'white' : 'rgb(15,23,42)',
            },
            grid: {
                horzLines: {
                    color: isDark ? 'rgba(51,65,85,.5)' : 'rgba(203,213,225,.5)',
                },
                vertLines: {
                    color: isDark ? 'rgba(51,65,85,.5)' : 'rgba(203,213,225,.5)',
                },
            },
            crosshair: {
                horzLine: {
                    color: 'rgb(100,116,139)',
                },
                vertLine: {
                    color: 'rgb(100,116,139)',
                },
            },
        })
        chart
            .addAreaSeries({
                priceLineColor: isDark ? 'rgb(59,130,246)' : 'rgb(129,140,248)',
                lineColor: isDark ? 'rgba(59,130,246,.7)' : 'rgba(129,140,248, .5)',
                topColor: isDark ? 'rgba(59,130,246,.4)' : 'rgba(129,140,248, .3)',
                bottomColor: isDark ? 'rgba(59,130,246,.15)' : 'rgba(129,140,248,.1)',
            })
            .setData([
                { time: '2023-10-22', value: 210000 },
                { time: '2023-10-23', value: 182000 },
                { time: '2023-10-24', value: 137000 },
                { time: '2023-10-25', value: 160000 },
                { time: '2023-10-26', value: 153000 },
                { time: '2023-10-27', value: 145000 },
                { time: '2023-10-28', value: 150000 },
            ])
        chart.timeScale().fitContent()
    }, [isDark])

    useEffect(() => {
        updateChart()
    }, [updateChart])

    useEffect(() => {
        addEventListener('resize', updateChart)
        return () => removeEventListener('resize', updateChart)
    }, [updateChart])

    return <Div id='chart' />
}

const Div = wrapn('div')`
    flex
    flex-col

    h-60
    sm:h-72

    w-full
    rounded-xl
`

export default Chart
