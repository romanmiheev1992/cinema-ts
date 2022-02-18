import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    age: number
}