import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface ScrollableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode
}