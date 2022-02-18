import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TicketButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    hall: number,
    price: number,
    time: string,
    link: string,
    name: string,
}