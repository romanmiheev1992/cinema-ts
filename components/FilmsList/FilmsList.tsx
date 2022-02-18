import { FilmsListProps } from "./FilmsList.props"
import styles from './FilmsList.module.css'
import { FilmIcon } from "../FilmIcon/FilmIcon"
import { useContext, useState } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { FilmListInterface } from "../../interfaces/interfaces"
import Link from "next/link"
import { Button } from "../Button/Button"
export const FilmsList = ({path, ...props}: FilmsListProps):JSX.Element => {

    const {filmList} = useContext<IAppContext>(AppContext)
    const [counter, setCounter] = useState<number>(7)
    
    return (
        <div className={styles.filmsList} {...props}>
            {
                filmList.map((filmItem: FilmListInterface, i: number) => {
                        if(i <= counter) {
                             return (
                                <Link href={`${path}${filmItem.alias}`} key={i}>
                                    <a>
                                        <FilmIcon imageSrc={filmItem.image} name={filmItem.name} age={filmItem.age} title={filmItem.title} key={i} />
                                    </a>
                                </Link>
                             )
                        }
                })
            }
            {
                counter < filmList.length 
                ? <div className={styles.buttonLoader}>
                    <h1>+{filmList.length - counter - 1}</h1>
                    <span>фильмов в прокате</span>
                    <Button type='more' onClick={() => setCounter(counter + 5)}>показать больше</Button>
                </div>
                : null
            }
           
        </div>
    )
}