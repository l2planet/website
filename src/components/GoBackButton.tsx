import { useRouter } from "next/router"
import { wrapn } from "wrapn"
import { IconArrowBack } from "./icons/IconArrowBack"

/** Returns the user to the previous page once the component is clicked. */
export const GoBackButton = () => {
    const { back } = useRouter();

    return (
        <Button onClick={back}>
            <IconArrowBack/>
        </Button>
    )
}


const Button = wrapn('button')`
    flex items-center justify-center
    self-start
    h-12 sm:h-14 lg:h-16
    p-2
    rounded-full
    bg-sec-2 dark:bg-sec-7/50
    border
    border-sec-3 dark:border-sec-7
`