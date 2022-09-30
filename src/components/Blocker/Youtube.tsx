import { wrapn } from 'wrapn'
import { Block } from '../Editor/types'
import { Tweet as T } from 'react-twitter-widgets'

export const Youtube = ({ block }: { block: Block }) => (
    <I
        title="YouTube video player"
        src={`https://www.youtube-nocookie.com/embed/${block.content}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
)

const I = wrapn('iframe')`
    aspect-video
    rounded-xl
`
