import { ReactElement } from "react"

type LayoutCardType = {
    hasHover?: boolean,
    bgColor?: string,
    arialLabel: string
    children: ReactElement | ReactElement[]
}


const LayoutCard = ({children, arialLabel, bgColor= "#151724", hasHover = false, ...props} : LayoutCardType)  => {
    return (
        <section aria-label={arialLabel} className={hasHover ? 'hover:scale-105 transition-transform' : ""} style={{backgroundColor: `${bgColor}`}}>
            {children}
        </section>
    )
}

export default LayoutCard