import { Tweet } from "./Tweet"
import { Block } from "../Editor/types";
import { Code } from "./Code"
import { Heading1 } from "./Heading1"
import { Heading2 } from "./Heading2"
import { Image } from "./Image"
import { List } from "./List"
import { Paragraph } from "./Paragraph"
import { Quote } from "./Quote"
import { Subtitle } from "./Subtitle"
import { Title } from "./Title"
import { Youtube } from "./Youtube"
import { Seperator } from "./Seperator"

/* eslint-disable jsx-a11y/alt-text */

export const PolymorphicBlock = ({ block }: { block: Block }) => <>
    {((): JSX.Element => {
        switch(block.type) {
            case 'P': return <Paragraph block={block}/>
            case 'H1': return <Heading1 block={block}/>
            case 'H2': return <Heading2 block={block}/>
            case 'L': return <List block={block}/>
            case 'I': return <Image block={block}/>
            case 'W': return <Tweet block={block}/>
            case 'V': return <Youtube block={block}/>
            case 'BR': return <Seperator/>
            case 'Q': return <Quote block={block}/>
            case 'C': return <Code block={block}/>
            case 'S': return <Subtitle block={block}/>
            case 'T': return <Title block={block}/>
        }
    })()
    }
</>