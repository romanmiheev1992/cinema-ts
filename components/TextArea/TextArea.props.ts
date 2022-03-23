import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>  {
    error?: FieldError
}