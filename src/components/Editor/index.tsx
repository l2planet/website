import {
    ComponentProps,
    MouseEventHandler,
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { wrapn } from 'wrapn'
import { ImageURL, TwitterTweet, YoutubeVideo } from '../../classes/Parsers'
import { Blocker } from '../Blocker'
import { ButtonForm } from '../Button'
import { BlockClass } from './classes'
import { EditableBlock } from './components'
import {
    isReadyToBeDeletedAt,
    onKeyDownHandler,
    resizeTextareaHeight,
    getCaretPos,
    tool,
    directions,
    getValidImage,
} from './functions'
import { EditorBlockType, Block } from './types'

export const Editor = ({
    onSubmit,
}: {
    onSubmit: (blocks: Block[]) => void
}) => {
    const [blocks, setBlocks] = useState<BlockClass[]>([
        new BlockClass('T'),
        new BlockClass('S'),
        new BlockClass('BR'),
        new BlockClass('P'),
    ])

    const [isPreview, setPreview] = useState<boolean>(false)
    const [previewBlocks, setPreviewBlocks] = useState<Block[]>([])

    const [focusedBlock, setFocusedBlock] = useState<number>(0)
    const isDivisionKey = useRef<boolean>(false)

    useEffect(() => {
        const el = document.getElementById(
            `block_${focusedBlock}`
        ) as HTMLTextAreaElement
        el?.focus()
    }, [blocks, focusedBlock])

    const renderBlocks = useCallback(() => {
        setBlocks((blocks) => blocks.slice())
    }, [])

    const filterBlocks = useCallback(() => {
        const json: Block[] = blocks
            .filter(({ content }) => content)
            .map((block) => {
                if (block.links.length > 0) {
                    return {
                        type: block.type,
                        content: block.content,
                        links: block.links,
                    }
                } else {
                    switch (block.type) {
                        case 'W':
                            return {
                                type: 'W',
                                content:
                                    new TwitterTweet(block.content).getId() ||
                                    '',
                            }
                        case 'V':
                            return {
                                type: 'V',
                                content:
                                    new YoutubeVideo(block.content).getId() ||
                                    '',
                            }
                        case 'BR':
                            return {
                                type: 'BR',
                                content: '',
                            }
                        default:
                            return {
                                type: block.type,
                                content: block.content,
                            }
                    }
                }
            })
        return json
    }, [blocks])

    const removeAt = useCallback((i: number) => {
        setBlocks((blocks) => [...blocks.slice(0, i), ...blocks.slice(i + 1)])
    }, [])

    const addAfter = useCallback((i: number) => {
        setBlocks((blocks) => [
            ...blocks.slice(0, i),
            blocks[i],
            new BlockClass(),
            ...blocks.slice(i + 1),
        ])
    }, [])

    const moveUp = useCallback((i: number) => {
        if (i < 4) return
        setBlocks((blocks) => [
            ...blocks.slice(0, i - 1),
            blocks[i],
            blocks[i - 1],
            ...blocks.slice(i + 1),
        ])
        setFocusedBlock((focusedBlock) => focusedBlock - 1)
    }, [])

    const moveDown = useCallback(
        (i: number) => {
            if (i < 3 || i == blocks.length - 1) return
            setBlocks((blocks) => [
                ...blocks.slice(0, i),
                blocks[i + 1],
                blocks[i],
                ...blocks.slice(i + 2),
            ])
            setFocusedBlock((focusedBlock) => focusedBlock + 1)
        },
        [blocks.length]
    )

    const changeType = useCallback(
        (newType: EditorBlockType) => {
            blocks[focusedBlock] = blocks[focusedBlock].as(newType)
            if (newType == 'BR') blocks[focusedBlock].content = ''
            renderBlocks()
        },
        [blocks, focusedBlock, renderBlocks]
    )

    return (
        <>
            {isPreview ? (
                <>
                    <PreviewButton
                        onClick={() => {
                            setPreview(false)
                        }}
                    >
                        Show Editor
                    </PreviewButton>
                    <div className='flex flex-col w-full cursor-not-allowed select-none'>
                        <Blocker blocks={previewBlocks} author={localStorage.getItem('username') ?? ''}/>
                    </div>
                </>
            ) : (
                <>
                    <PreviewButton
                        onClick={() => {
                            setPreviewBlocks(filterBlocks())
                            setPreview(true)
                        }}
                    >
                        Show Preview
                    </PreviewButton>
                    <Tool changeType={changeType} isDivision={isDivisionKey} />
                    <Directions
                        onUp={() => moveUp(focusedBlock)}
                        onDown={() => moveDown(focusedBlock)}
                    />
                    <BlockHolder>
                        {blocks.map((block, i) => (
                            <EditableBlock
                                block={block}
                                key={`block_${i}`}
                                id={`block_${i}`}
                                plusId={`plus${i}`}
                                directionsId={`directions${i}`}
                                placeholder={block.placeholder()}
                                className={block.className()}
                                rows={1}
                                value={block.content}
                                onPlus={(e) => {
                                    tool.setPos(i)
                                    setFocusedBlock(i)
                                }}
                                onUpDown={(e) => {
                                    directions.setPos(i)
                                    setFocusedBlock(i)
                                }}
                                onPlaceClick={() => {
                                    document
                                        .getElementById(`block_${i}`)
                                        ?.focus()
                                    setFocusedBlock(i)
                                }}
                                onFocus={(e) => {
                                    resizeTextareaHeight(e.currentTarget)
                                    setFocusedBlock(i)
                                }}
                                onChange={(e) => {
                                    // Replace all new lines with space character
                                    blocks[i].content = e.target.value.replace(
                                        /\n/g,
                                        ' '
                                    )
                                    renderBlocks()

                                    resizeTextareaHeight(e.currentTarget)

                                    if (
                                        block.is('P') ||
                                        block.is('I') ||
                                        block.is('W') ||
                                        block.is('V')
                                    ) {
                                        switch (true) {
                                            case new TwitterTweet(
                                                e.target.value
                                            ).getId() !== null:
                                                blocks[i] = block.as('W')
                                                break
                                            case new YoutubeVideo(
                                                e.target.value
                                            ).getId() !== null:
                                                blocks[i] = block.as('V')
                                                break
                                            case new ImageURL(
                                                e.target.value
                                            ).getURL() !== null:
                                                blocks[i] = block.as('I')
                                                break
                                            default:
                                                blocks[i] = block.as('P')
                                        }
                                        renderBlocks()
                                    }
                                }}
                                onKeyDown={(e) =>
                                    onKeyDownHandler(e, {
                                        onAll() {
                                            if (e.key == '/') {
                                                if (
                                                    !isDivisionKey.current &&
                                                    i > 1
                                                ) {
                                                    tool.setPos(i)
                                                    isDivisionKey.current = true
                                                    e.preventDefault()
                                                } else {
                                                    tool.hide()
                                                    isDivisionKey.current =
                                                        false
                                                }
                                            } else {
                                                tool.hide()
                                                isDivisionKey.current = false
                                            }
                                            if (block.is('BR')) {
                                                e.preventDefault()
                                                return
                                            }
                                        },

                                        onBackspace() {
                                            if (
                                                e.currentTarget.value.length ==
                                                0
                                            ) {
                                                if (i > 2) {
                                                    removeAt(i)
                                                    setFocusedBlock(i - 1)
                                                } else if (i > 0) {
                                                    setFocusedBlock(i - 1)
                                                    setBlocks(blocks.slice(0))
                                                }
                                                e.preventDefault()
                                            }
                                        },

                                        onElse() {},

                                        onEnter() {
                                            if (i > 1) {
                                                addAfter(i)
                                                setFocusedBlock(i + 1)
                                            } else {
                                                setFocusedBlock(i + 1)
                                                setBlocks(blocks.slice(0))
                                            }
                                            e.preventDefault()
                                        },

                                        onArrowUp() {
                                            if (i > 0) {
                                                setFocusedBlock(i - 1)
                                                setBlocks(blocks.slice(0))
                                            }
                                            e.preventDefault()
                                        },

                                        onArrowDown() {
                                            if (i < blocks.length - 1) {
                                                setFocusedBlock(i + 1)
                                                setBlocks(blocks.slice(0))
                                                e.preventDefault()
                                            }
                                        },

                                        onArrowLeft() {
                                            if (
                                                i > 0 &&
                                                e.currentTarget
                                                    .selectionStart == 0
                                            ) {
                                                setFocusedBlock(i - 1)
                                                setBlocks(blocks.slice(0))
                                                e.preventDefault()
                                            }
                                        },

                                        onArrowRight() {
                                            if (
                                                i < blocks.length - 1 &&
                                                e.currentTarget
                                                    .selectionStart ==
                                                    e.currentTarget.value.length
                                            ) {
                                                setFocusedBlock(i + 1)
                                                setBlocks(blocks.slice(0))
                                                e.preventDefault()
                                            }
                                        },

                                        onShift() {
                                            if (
                                                !(
                                                    block.is('P') ||
                                                    block.is('Q') ||
                                                    block.is('L')
                                                )
                                            )
                                                return
                                            const start =
                                                e.currentTarget.selectionStart
                                            const end =
                                                e.currentTarget.selectionEnd
                                            if (start == end) return
                                            if (
                                                block.linkPlaceInvalid(
                                                    start,
                                                    end
                                                )
                                            ) {
                                                alert(
                                                    'There is already a URL between the range!'
                                                )
                                                return
                                            }
                                            if (
                                                block.linkWordInvalid(
                                                    start,
                                                    end
                                                )
                                            ) {
                                                alert(
                                                    'You have to select a full word!'
                                                )
                                                return
                                            }
                                            e.currentTarget.setSelectionRange(
                                                e.currentTarget.value.length,
                                                e.currentTarget.value.length
                                            )
                                            const url = prompt(
                                                `Embed a URL to: ${block.content.slice(
                                                    start,
                                                    end
                                                )}`
                                            )

                                            if (url) {
                                                const ok = confirm(
                                                    `Are you sure to add\nWord: ${block.content.slice(
                                                        start,
                                                        end
                                                    )}\nURL: ${url.slice(
                                                        0,
                                                        40
                                                    )}...`
                                                )
                                                if (ok) {
                                                    block.links.push({
                                                        start,
                                                        end,
                                                        url,
                                                    })
                                                    alert(
                                                        'Succefully embedded!'
                                                    )
                                                } else
                                                    alert(
                                                        'Cancelled: URL embedding!'
                                                    )
                                            } else {
                                                alert(
                                                    'Cancelled: URL embedding!'
                                                )
                                            }
                                        },

                                        onMeta() {
                                            if (
                                                !(
                                                    block.is('P') ||
                                                    block.is('Q') ||
                                                    block.is('L')
                                                )
                                            )
                                                return
                                            if (block.links.length == 0) {
                                                alert(
                                                    'There is no URL embedded!'
                                                )
                                            } else {
                                                alert(
                                                    `Words and URLs\n${block.links
                                                        .map(
                                                            (link) =>
                                                                `"${block.content.slice(
                                                                    link.start,
                                                                    link.end
                                                                )}": ${link.url.slice(
                                                                    0,
                                                                    40
                                                                )}...`
                                                        )
                                                        .join('\n')}`
                                                )
                                            }
                                        },
                                    })
                                }
                            />
                        ))}
                        <ButtonSend
                            onClick={() => {
                                onSubmit(filterBlocks())
                            }}
                        >
                            Send
                        </ButtonSend>
                    </BlockHolder>
                </>
            )}
        </>
    )
}

const BlockHolder = wrapn('div')`
    flex flex-col
    self-center w-full max-w-4xl
    p-4 py-8
    rounded-2xl
    border border-gris-3
    dark:border-gris-7
    bg-white dark:bg-gris-9
`

const Tool = ({
    isDivision,
    changeType,
}: {
    isDivision: MutableRefObject<boolean>
    changeType(newType: EditorBlockType): void
}) => (
    <>
        <WTool
            id='tool'
            onClick={() => {
                tool.hide()
                isDivision.current = false
            }}
        >
            <Button onClick={() => changeType('H1')} className='rounded-t-xl'>
                Heading 1
            </Button>
            <Button onClick={() => changeType('H2')}>Heading 2</Button>
            <Button onClick={() => changeType('Q')}>Quote</Button>
            <Button onClick={() => changeType('L')}>List</Button>
            <Button onClick={() => changeType('C')}>Code</Button>
            <Button onClick={() => changeType('BR')}>Seperator</Button>
            <Button onClick={() => changeType('P')} className='rounded-b-xl'>
                Paragraph
            </Button>
        </WTool>
        <OutsideCover
            id='toolcover'
            onClick={() => {
                tool.hide()
                isDivision.current = false
            }}
        />
    </>
)

const Directions = ({
    onUp,
    onDown,
}: {
    onUp: MouseEventHandler<HTMLButtonElement>
    onDown: MouseEventHandler<HTMLButtonElement>
}) => (
    <>
        <WTool id='directions' onClick={directions.hide}>
            <Button onClick={onUp} className='rounded-t-xl'>
                Move Up
            </Button>
            <Button onClick={onDown} className='rounded-b-xl'>
                Move Down
            </Button>
        </WTool>
        <OutsideCover id='directionscover' onClick={directions.hide} />
    </>
)

const Button = wrapn('button')`
    h-11 px-6
    hover:bg-gris-2
    dark:hover:bg-gris-7
    duration-200
    font-medium
`

const WTool = wrapn('div')`
    hidden
    absolute z-50
    flex-col
    rounded-xl
    bg-white dark:bg-gris-8
    border
    border-gris-3
    dark:border-gris-6
`

const OutsideCover = wrapn('div')`
    hidden
    fixed top-0 left-0 z-40
    w-full h-screen
`

const PreviewButton = wrapn('button')`
    fixed z-50 top-28 md:bottom-12 lg:bottom-14 right-8 md:right-14 lg:right-20 
    h-14 px-6
    rounded-full
    hover:scale-[1.025] active:scale-[.975]
    border
    border-sky-400
    dark:border-blue-500
    bg-sky-300/70 hover:bg-sky-400/70 active:bg-sky-300/70
    dark:bg-blue-600/70 dark:hover:bg-blue-500/70 dark:active:bg-blue-600/70
    duration-200
    backdrop-blur-xl
    text-lg font-semibold
`

const ButtonSend = wrapn(ButtonForm)`
    mx-10 mt-6
`
