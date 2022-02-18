import { ButtonProps } from "./Button.props";
import styles from './Button.module.css'
import Arrow from './arrow.svg'
import cn from 'classnames'

export const Button = ({children, appearence, arrow, ...props}: ButtonProps): JSX.Element => {
    return <button
        className={cn(styles.button, {
            [styles.primary]: appearence === 'primary',
            [styles.ghost]: appearence === 'ghost',
        })}
        {...props}
    >
        {children}
        {
            arrow 
            ? <Arrow className={styles.arrow}/>
            : null
        }
       
    </button>
}