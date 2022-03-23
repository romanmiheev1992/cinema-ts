import { SeatProps } from "./Seat.props"
import styles from './Seat.module.css'
import cn from 'classnames'
import { useState } from "react"

export const Seat = ({seat, ...props}: SeatProps) => {

    const [toggler, setToggle] = useState<boolean>(false)

    return (
        <div className={cn(styles.Seat, {
            [styles.booked]: toggler 
        }) }
            onClick={() => setToggle(!toggler)}
            {...props}
        >
            <div>{seat.seat}</div>
        </div> 
        
    )
}