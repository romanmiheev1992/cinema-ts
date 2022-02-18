import { InputProps } from "./Input.props";
import styles from './Input.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(({error, label ,className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    
    return(
        <div className={styles.inputWrapper}>
            <label>{label}</label>
            <input
                className={cn(className, styles.input, {
                    [styles.errorMessage]: error
                })}
                {...props}
                ref={ref}
            />
            {error && <span className={styles.error}>{error.message}</span> }
        </div>
        
    )
})