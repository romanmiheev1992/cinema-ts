import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
    type?: 'order' | 'more' | 'submit' | 'pay'
    children: ReactNode
}