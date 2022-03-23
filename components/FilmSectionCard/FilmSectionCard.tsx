import { useState } from "react"
import { FilmSectionCardProps } from "./FilmSectionCard.props"
import styles from './FilmSectionCard.module.css'
import Clock from './img/clock.svg'
import Play from './img/play.svg'
import { Button } from "../Button/Button"
import { Player } from "../Player/Player"
import { FilmSectionList } from "../FilmSectionList/FilmSectionList"

export const FilmSectionCard = ({film, ...props}: FilmSectionCardProps): JSX.Element => {

    const [trailerToggle, setTrailerToggle] = useState<boolean>(false)

    return (
        <>
            <div 
                className={styles.FilmSectionCard}
                style={{backgroundImage: `url('${film.imagePoster}')`}}
                {...props}
            >

                <div className={styles.FilmSectionImage}>
                    <img src={film.image}  width={'390px'}  height={'550px'}/>
                </div>
                <div className={styles.FilmSectionCardInfo}>
                    <p>{film.title}</p>
                    <h1>{film.name}</h1>
                    <div className={styles.FilmSectionInfo}>
                        
                        <span>{film.description}</span> 
                    
                        <div className={styles.FilmSectionSecond}>
                            <div className={styles.FilmOptions}>
                                <Clock/> 
                                <p>{film.duration}</p>
                                <span>{film.country}</span>
                            </div>
                            <div className={styles.FilmActors}>
                                <div>
                                    <p>актеры</p>
                                <span>{film.actors}</span> 
                                </div>
                                <div>
                                    <p>режисcер</p>
                                    <span>{film.director}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.FilmButtons}>
                    <Button 
                        className={styles.FilmTrailer}
                        onClick={() => setTrailerToggle(!trailerToggle)}
                    > <Play/> <span>трейлер</span></Button>
                </div>
                {
                    trailerToggle
                    ? <Player link={film.trailer} set={setTrailerToggle}/>
                    : null
                }
            </div>
            <FilmSectionList name={film.name}/>
        </>
    )
}