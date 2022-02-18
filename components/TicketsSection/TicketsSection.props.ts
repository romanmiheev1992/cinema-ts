import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TicketsSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    hall: number,
    price: number,
    time: string,
    name: string,
    img: string,
    link: string,
    toggle: any
}