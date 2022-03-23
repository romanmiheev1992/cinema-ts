import { FilmIconProps } from "./FilmIcon.props"
import styles from './FilmIcon.module.css'
import cn from 'classnames'
import { Age } from "../Age/Age"

export const FilmIcon = ({ age, name, title, imageSrc, ...props}: FilmIconProps):JSX.Element => {
   
    return (
        <div className={cn(styles.filmsIcon) } {...props}> 
                <img src={imageSrc}/> 
                <div className={styles.filmsIconTitle}>
                    <h4>{name}</h4>
                    <div className={styles.genre}>
                        <span>{title}</span>  
                        <Age age={age}/>
                    </div>
                    <div className={styles.button}>КУПИТЬ БИЛЕТЫ</div>
                </div>
        </div>
    )
} 
