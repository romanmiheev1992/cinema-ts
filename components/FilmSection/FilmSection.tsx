import { useRouter } from "next/dist/client/router"
import { useContext } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { FilmSectionProps } from "./FilmSection.props"
import styles from './FilmSection.module.css'
import { FilmSectionCard } from "../FilmSectionCard/FilmSectionCard"

export const FilmSection = ({...props}: FilmSectionProps): JSX.Element => {
    const route = useRouter()
    const {filmList} = useContext<IAppContext>(AppContext)
    return (
        <div {...props}>
            {
               filmList && filmList.map(film => {
                    if(`/movie/${film.alias}` === route.asPath) {
                       return (
                            <div key={film.name} className={styles.FilmSection}>
                               <FilmSectionCard film={film}/>
                            </div>
                       ) 
                    }
                })
               
            }
        </div>
    )
}