import { wrapn } from 'wrapn'
import { ChartDataItem } from '../types/globals'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { InternalLayer2 } from '../types/Api'
import { useLocalStorage } from '../hooks/useLocalStorage'
import {
    BarPrice,
    BusinessDay,
    createChart,
    CrosshairMode,
    Time,
    UTCTimestamp,
} from 'lightweight-charts'
import { useTheme } from '../contexts/ThemeContext'
import { AxisOptions, Chart as ReactChart } from 'react-charts'

const Chart = ({ data }: { data: ChartDataItem[] }) => {
    const { isDark } = useTheme()

    const updateChart = useCallback(() => {
        const htmlChart = document.getElementById('chart') as HTMLElement
        const htmlTooltip = document.createElement('div')
        htmlChart.innerHTML = ''
        htmlTooltip.className = `
			absolute
			hidden
			p-2
            sm:p-2.5
			backdrop-blur-lg
			text-left
			z-20
			top-3
			left-3

			border
			border-pri-4
			dark:border-pri-6

			bg-pri-4/30
			dark:bg-pri-6/50

			text-indigo-800
			dark:text-blue-100

            font-semibold
            sm:text-xl

			rounded-lg2
            sm:rounded-xl
		`

        const chart = createChart(htmlChart, {
            rightPriceScale: {
                scaleMargins: {
                    top: 0.2,
                    bottom: 0.2,
                },
                borderVisible: false,
            },
            crosshair: {
                horzLine: {
                    color: isDark ? 'rgb(96 165 250)' : 'rgb(99 102 241)',
                },
                vertLine: {
                    color: isDark ? 'rgb(96 165 250)' : 'rgb(99 102 241)',
                },
            },

            timeScale: {
                borderColor: isDark ? 'rgba(37,99,235,0.6)' : 'rgba(99,102,241,0.5)',
                fixLeftEdge: true,
                fixRightEdge: true,
            },
            layout: {
                backgroundColor: 'transparent',
                textColor: isDark ? 'rgb(37 99 235)' : 'rgb(99 102 241)',
            },
            grid: {
                horzLines: {
                    visible: false,
                },
                vertLines: {
                    visible: false,
                },
            },
        })

        const areaSeries = chart.addAreaSeries({
            topColor: isDark ? 'rgba(29,78,216,0.7)' : 'rgba(165,180,252,0.7)',
            bottomColor: isDark ? 'rgba(29,78,216,0.1)' : 'rgba(165,180,252,0.1)',
            lineColor: isDark ? 'rgba(29,78,216,0.5)' : 'rgba(165,180,252,0.5)',
            priceLineVisible: false,
            crosshairMarkerBackgroundColor: isDark ? 'rgb(147 197 253)' : 'rgb(99 102 241)',
            lineWidth: 2,
        })

        areaSeries.setData(data.map(d => ({time: parseInt(d.t as any) as any, value: d.v})))

        // update tooltip
        chart.subscribeCrosshairMove((param) => {
            const width = htmlChart.clientWidth
            const height = htmlChart.clientHeight
            if (
                !param.time ||
                !param.point ||
                param.point?.x < 0 ||
                param.point?.x > width ||
                param.point?.y < 0 ||
                param.point?.y > height
            ) {
                htmlTooltip.style.display = 'none'
                return
            }

            var dateStr = businessDayToString(param.time as BusinessDay)

            htmlTooltip.style.display = 'block'
            const price = param.seriesPrices.get(areaSeries) as BarPrice
            htmlTooltip.innerHTML = `${Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                notation: 'compact',
                minimumFractionDigits: 2,

            }).format(price)}`

            var y = param.point.y

            var left = param.point.x + toolTipMargin
            if (left > width - htmlTooltip.clientWidth) {
                left = param.point.x - toolTipMargin - htmlTooltip.clientWidth
            }

            var top = y + toolTipMargin
            if (top > height - htmlTooltip.clientHeight) {
                top = y - htmlTooltip.clientHeight - toolTipMargin
            }

            htmlTooltip.style.left = left + 'px'
            htmlTooltip.style.top = top + 'px'
        })

        htmlChart.appendChild(htmlTooltip)
    }, [isDark])

    useEffect(() => {
        updateChart()

        addEventListener('resize', updateChart)
        return () => removeEventListener('resize', updateChart)
    }, [isDark, updateChart])

    return <Div id='chart' />
}

const Div = wrapn('div')`
	relative

    flex
    flex-col

    h-56
    sm:h-72
	md:h-80

    w-full
    rounded-xl




	bg-gris-1
	dark:bg-[#0b1221]

`

export default Chart

function businessDayToString(businessDay: BusinessDay) {
    return businessDay.year + '-' + businessDay.month + '-' + businessDay.day
}

const toolTipMargin = 15
