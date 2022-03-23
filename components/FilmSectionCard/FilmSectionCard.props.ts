import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { FilmListInterface } from '../../interfaces/interfaces';

export interface FilmSectionCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    film: FilmListInterface
}
