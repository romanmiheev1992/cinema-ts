import { ScrollableProps } from "./Scrollable.props"
import styles from './Scrollable.module.css'
import cn from 'classnames'

export const Scrollable = ({children, className, ...props}: ScrollableProps) => {
    return (
        <div 
            className={cn(className, styles.Scrollable)}
            {...props}
        >
            {children}
        </div>
    )
}




