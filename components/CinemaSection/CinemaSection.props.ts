import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CinemaPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode
}