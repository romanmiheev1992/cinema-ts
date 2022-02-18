import { TicketButtonProps } from "./TicketButton.props";
import styles from './TicketButton.module.css'
import cn from 'classnames'


export const TicketButton = ({ time, price, hall, className, ...props}: TicketButtonProps): JSX.Element => {
    return(
        <div
            className={cn(className, styles.TicketButton)}
            {...props}
        >
            <p>{time}</p>
            <span>{price} руб.</span>
        </div>
    )
}