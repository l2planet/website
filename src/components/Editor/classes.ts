import { EditorBlockBolds, EditorBlockLinks, EditorBlockType } from './types'

export class BlockClass {
    constructor(type?: EditorBlockType) {
        this.content = ''
        this.type = type || 'P'
        this.links = []
        this.bolds = []
    }

    content: string
    type: EditorBlockType
    links: EditorBlockLinks[]
    bolds: EditorBlockBolds[]

    linkPlaceInvalid(start: number, end: number): boolean {
        for (const link of this.links) {
            if ((start >= link.start && start <= link.end) || (end >= link.start && end <= link.end))
                return true
        }
        return false
    }

    linkWordInvalid(start: number, end: number): boolean {
        const previousChar = this.content.at(start - 1)
        const subsequentChar = this.content.at(end)
        console.log(previousChar, '--', subsequentChar)

        if (
            start != 0 &&
            previousChar != ' ' &&
            previousChar != '.' &&
            previousChar != ',' &&
            previousChar != '!' &&
            previousChar != ':' &&
            previousChar != ';' &&
            previousChar != '?' &&
            previousChar
        )
            return true

        if (
            subsequentChar != ' ' &&
            subsequentChar != '.' &&
            subsequentChar != ',' &&
            subsequentChar != '!' &&
            subsequentChar != ':' &&
            subsequentChar != ';' &&
            subsequentChar != '?' &&
            subsequentChar
        )
            return true

        return false
    }

    is(aType: EditorBlockType): boolean {
        return this.type == aType
    }

    as(newType: EditorBlockType): BlockClass {
        this.type = newType
        return this
    }

    with(newText: string): BlockClass {
        this.content = newText
        return this
    }

    className(): string {
        switch (this.type) {
            case 'C':
                return `
                font-light
                font-mono
                text-[1.25rem]
                leading-normal
                text-slate-600
                dark:text-slate-300
            `
            case 'H1':
                return `
                font-extrabold
                text-[2.5rem]
                leading-tight
            `
            case 'H2':
                return `
                font-extrabold
                text-[1.75rem]
                leading-tight
            `
            case 'L':
                return `
                font-[550]
                text-[1.25rem]
                leading-normal
                pl-[52px]
            `
            case 'P':
                return `
                font-[550]
                text-[1.25rem]
                leading-normal
            `
            case 'Q':
                return `
                font-[550]
                text-[1.25rem]
                italic
                leading-normal
                text-slate-700
                dark:text-slate-200
            `
            case 'BR':
                return `
                caret-transparent
            `
            case 'S':
                return `
                font-extrabold
                text-[1.5rem]
                leading-tight
                text-slate-800
                dark:text-slate-100
            `
            case 'T':
                return `
                font-extrabold
                text-[3rem]
                leading-tight
            `
            default:
                return `
                text-sky-300 hover:text-sky-600  group-focus-within:text-sky-600
            `
        }
    }

    placeholder(): string {
        switch (this.type) {
            case 'H1':
                return 'heading 1...'
            case 'H2':
                return 'heading 2...'
            case 'BR':
                return ''
            case 'C':
                return 'code...'
            case 'L':
                return 'list...'
            case 'P':
                return 'paragraph...'
            case 'Q':
                return 'quote'
            case 'S':
                return 'subtitle...'
            case 'T':
                return 'title...'
            default:
                return ''
        }
    }
}
