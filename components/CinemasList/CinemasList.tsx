import { useContext } from 'react'
import styles from './CinemasList.module.css'
import { AppContext } from '../../appContext/MenuContext'
import { CinemaListsInterfase } from '../../interfaces/interfaces'
import { CinemasListProps } from './CinemasList.props'
import { CinemaIcon } from '../CinemaIcon/CinemaIcon'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export const CinemasList = ({...props}: CinemasListProps): JSX.Element => {

    const {cinemas} = useContext<any>(AppContext)
    const route = useRouter()

    return (
        <div className={styles.CinemasList} {...props}>
            <h3>Кинотеатры в Москве</h3>
            {
                cinemas.map((cinema: CinemaListsInterfase)  => {
                    return (
                        <Link href={`${route.route}/${cinema.alias}`} key={cinema.title}>
                            <a>
                                <CinemaIcon params={cinema}/>
                            </a>
                        </Link>  
                    ) 
                })
            }
        </div>
    )
}

