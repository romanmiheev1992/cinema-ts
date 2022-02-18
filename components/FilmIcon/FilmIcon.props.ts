import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FilmIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageSrc: string,
    age: number,
    name: string,
    title:string,
   
}