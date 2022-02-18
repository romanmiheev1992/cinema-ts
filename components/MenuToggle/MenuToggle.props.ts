import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuToggleProps extends DetailedHTMLProps<HTMLAttributes<SVGAElement>, SVGAElement> {
    toggle: boolean
}