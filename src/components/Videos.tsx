import { useState } from "react"
import { wrapn } from "wrapn"

export const Videos = ({ videoIds }: { videoIds: string[] }) => {
    return (
            <Div>
                {
                    videoIds[0] ? 
                        <>
                            {videoIds.map(id => 
                                <IFrame
                                    title="YouTube video player"
                                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    key={id}
                                />
                            ) }
                        </>

                    :
                        <Text>There is no video</Text>
                }   
            </Div>
    )
}

const Div = wrapn('div')`
    flex
    flex-col


    h-[500px]
    w-full


    space-y-4
    sm:space-y-5

    rounded-xl


    overflow-y-auto
    
    videos-container
`

const Text = wrapn('p')`
    flex
    items-center
    justify-center

    flex-1

    text-lg

    bg-gris-1
    dark:bg-gris-8

    text-gris-6
    dark:text-gris-4
`

const IFrame = wrapn('iframe')`
    aspect-video
    rounded-xl
`