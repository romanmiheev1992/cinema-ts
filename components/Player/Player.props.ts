
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface PlayerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    link: string,
    set?: any
}