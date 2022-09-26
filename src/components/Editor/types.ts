export type EditorBlockType = 'T' | 'S' | 'H1' | 'H2' | 'P' | 'L' | 'Q' | 'C' | 'BR' | 'I' | 'V' | 'W'

export interface Block {
    type: EditorBlockType
    content: string
    links?: BlockLink[]
}

export interface BlockLink {
    start: number
    end: number
    url: string
}



export interface EditorBlockInterface {
    text: string
    type: EditorBlockType
}

export interface EditorBlockLinks {
    start: number
    end: number
    url: string
}

export interface OnKeyDownHandler {
    onEnter: Function
    onAll: Function
    onBackspace: Function
    onElse: Function
    onArrowUp: Function
    onArrowDown: Function
    onArrowLeft: Function
    onArrowRight: Function
    onShift: Function
    onMeta: Function
}



