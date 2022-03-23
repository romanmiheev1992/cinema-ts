import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SeatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    seat: {
        row: number,
        seat: number,
        ocupate: boolean
    }
 
}