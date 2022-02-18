import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    children?: ReactNode,
    options: {
        DBox: boolean,
        cinenaBar: boolean,
        dolbyAtmosSound: boolean,
        gameZone: boolean,
        parking: boolean,
        projector3d: boolean,
        vipHall: boolean
    }
}