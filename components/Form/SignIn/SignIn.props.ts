import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SignInProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    toggle: any,
    popup: any
}