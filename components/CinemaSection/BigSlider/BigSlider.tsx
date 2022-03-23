import styles from './BigSlider.module.css'
import Close from '../icon/close.svg'
import { useState } from 'react'
import { CinemaListsInterfase } from '../../../interfaces/interfaces'


export const BigSlider = (link: CinemaListsInterfase, num: number): JSX.Element => {

    const [slideToggle, setSlideToggle] = useState<number>(num)

    return (
        slideToggle !== 10
        ?<div className={styles.BigSlider}>
            <div onClick={() => setSlideToggle(10)} className={styles.closeButton}>
                <Close/>
            </div>
        </div>
        : <div></div>
    )
}