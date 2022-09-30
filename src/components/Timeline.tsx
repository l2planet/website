import { useState } from 'react'
import { Timeline as TimelineWidget } from 'react-twitter-widgets'
import { wrapn } from 'wrapn'
import { useTheme } from '../contexts/ThemeContext'

export const Timeline = ({ account }: { account?: string }) => {
    const { theme } = useTheme()
    const [isLoading, setLoading] = useState(true)

    return (
        <Div>
            {account ? (
                <>
                    <TimelineWidget
                        dataSource={{
                            sourceType: 'profile',
                            screenName: account,
                        }}
                        options={{
                            theme,
                            height: 500,
                        }}
                        onLoad={() => setLoading(false)}
                    />
                    {isLoading && <Text>Tweets are loading...</Text>}
                </>
            ) : (
                <Text>No Twitter Account</Text>
            )}
        </Div>
    )
}

const Div = wrapn('div')`
    flex
    flex-col

    w-full
    md:max-w-xs
    lg:max-w-[406px]
    h-[500px]

    rounded-xl

    bg-gris-1
    dark:bg-gris-8
`

const Text = wrapn('p')`
    flex
    items-center
    justify-center

    flex-1

    text-lg

    text-gris-6
    dark:text-gris-4
`
