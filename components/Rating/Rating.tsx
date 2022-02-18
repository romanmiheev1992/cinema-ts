import { useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css'
import cn from 'classnames'
import RatingStar from './Vectorstar.svg'

export const Rating = ({isEditable = false, rating, className, setRating, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, useRatingArray] = useState(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateRating = ratingArray.map((r: JSX.Element, i:number) => {
            return(
                <RatingStar
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}

                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                />
            )
        })
        useRatingArray(updateRating)
    }

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return
        }
        constructRating(i)
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
}