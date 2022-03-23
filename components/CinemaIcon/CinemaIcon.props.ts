import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CinemaListsInterfase } from "../../interfaces/interfaces";

export interface CinemaIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    params: CinemaListsInterfase
}