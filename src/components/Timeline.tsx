import { useState } from 'react';
import { Timeline as TimelineWidget } from 'react-twitter-widgets';
import { wrapn } from 'wrapn';
import { useTheme } from '../contexts/ThemeContext';

export const Timeline = ({ account }: { account?: string }) => {
    const { isDark } = useTheme();
    const [isLoading, setLoading] = useState(true);

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
                            theme: isDark ? 'dark' : 'light',
                            height: 420,
                        }}
                        onLoad={() => setLoading(false)}
                    />
                    {isLoading && <Text>Tweets are loading...</Text>}
                </>
            ) : (
                <Text>No Twitter Account</Text>
            )}
        </Div>
    );
};

const Div = wrapn('div')`
    flex
    flex-col

    h-[420px]
    w-full
    md:max-w-xs
    lg:max-w-[406px]
    bg-gris-1
	dark:bg-[#0b1221]

    rounded-xl
`;

const Text = wrapn('p')`
    flex
    items-center
    justify-center

    flex-1

    text-lg

    text-gris-6
    dark:text-gris-4
`;
