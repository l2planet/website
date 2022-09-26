import { url } from "inspector"
import { ChangeEvent, KeyboardEvent } from "react"
import { OnKeyDownHandler } from "./types"

export const resizeTextareaHeight = (el: HTMLTextAreaElement) => {
    el.style.height = '0px'
    el.style.height = el.scrollHeight +'px'
}


export const getCaretPos = (e: HTMLTextAreaElement) => {
    const canvas = (document.getElementById('font-calc') || document.createElement('canvas')) as HTMLCanvasElement
    canvas.id = 'font-calc'
    const ctx = canvas.getContext('2d')
    if(!ctx) return
    const style = getComputedStyle(e)
    ctx.font = style.font
    const lineWidth = parseInt(style.width.slice(0, style.width.length - 2)) - 24
    ctx.lineWidth = lineWidth
    const msr = ctx.measureText(e.value.slice(0, e.selectionStart)).width
    const localIndex = localStorage.getItem('localIndex')
    if(localIndex) {
        const [s, str] = JSON.parse(localIndex) as [number, string]
        if(str.startsWith(e.value.slice(0, e.selectionStart))) {
            
        }
    }
    console.log(msr)
}


export const tool = {
    setPos(i: number) {
        const e = document.getElementById(`plus${i}`) as HTMLButtonElement
        (document.getElementById('toolcover') as HTMLDivElement).style.display = 'block'
        const tool = document.getElementById('tool') as HTMLDivElement
        tool.style.display = 'flex'
        tool.style.left = e.offsetLeft + 54 + 'px'
        tool.style.top = e.offsetTop + 6 + 'px'
    },
    hide() {
        (document.getElementById('tool') as HTMLDivElement).style.display = 'none';
        (document.getElementById('toolcover') as HTMLDivElement).style.display = 'none';
    }
}


export const directions = {
    setPos(i: number) {
        const e = document.getElementById(`directions${i}`) as HTMLButtonElement
        (document.getElementById('directionscover') as HTMLDivElement).style.display = 'block'
        const tool = document.getElementById('directions') as HTMLDivElement
        tool.style.display = 'flex'
        tool.style.right = document.body.offsetWidth - e.offsetLeft + 22 + 'px'
        tool.style.top = e.offsetTop + 6 + 'px'
    },
    hide() {
        (document.getElementById('directions') as HTMLDivElement).style.display = 'none';
        (document.getElementById('directionscover') as HTMLDivElement).style.display = 'none';
    }
}


export const getValidImage = (content: string) => {
    if(content.startsWith('https://')) {
        if(content.includes('.jpg', 1) || content.includes('.png', 1) || content.includes('.jpeg', 1) || content.includes('.webp', 1)) {
            return content
        }
    }
    return ''
}


export const isReadyToBeDeletedAt = (i: number, e: KeyboardEvent<HTMLTextAreaElement>) => {
    return i > 2 && e.currentTarget.value.length == 0
}

export const isReadyToBeUnfocused = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    return e.currentTarget.value.length == 0
}



export const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>, handlers: OnKeyDownHandler) => {
    handlers.onAll()
    
    switch(e.key) {

        case 'Enter':
            handlers.onEnter()
            break

        case 'Backspace':
            handlers.onBackspace()
            break

        case 'ArrowUp':
            handlers.onArrowUp()
            break

        case 'ArrowDown':
            handlers.onArrowDown()
            break

        case 'ArrowLeft':
            handlers.onArrowLeft()
            break

        case 'ArrowRight':
            handlers.onArrowRight()
            break
        case 'Shift':
            handlers.onShift()
            break
        case 'Meta':
            handlers.onMeta()
            break

        default:
            handlers.onElse()
    }
}