import { ButtonProps } from "./Button.props";
import styles from './Button.module.css'
import cn from 'classnames'

export const Button = ({type, children, className, ...props}: ButtonProps): JSX.Element => {
    
    return(
        <button
        className={cn(className, styles.button, {
            [styles.more]: type == 'more',
            [styles.submit]: type == 'submit',
            [styles.order]: type == 'order',
            [styles.pay]: type == 'pay'
        })}
        {...props}>{children}</button>
    )
}