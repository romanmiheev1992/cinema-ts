import { useContext, useState } from 'react'
import styles from './FilmsCinemaList.module.css'
import { AppContext, IAppContext } from '../../appContext/MenuContext'
import { FilmListInterface, GetTicketProps } from '../../interfaces/interfaces'
import { FilmsCinemaListProps } from './FilmsCinemaList.props'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Play from './icon/play.svg'
import { Player } from '../Player/Player'
import { Age } from '../Age/Age'
import { TicketButton } from '../TicketButton/TicketButton'
import { TicketsSection } from '../TicketsSection/TicketsSection'

export const FilmsCinemaList = ({...props}: FilmsCinemaListProps): JSX.Element => {

    const {filmList} = useContext<IAppContext>(AppContext)
    const route = useRouter()
    const[filmNum, setFilmNun] = useState<any>(null)

    const [getTicketToggle, setGetTicketToggle] = useState(false)
    const [ticketProps, setTicketProps] = useState<GetTicketProps>({
        hall: 0,
        name: '',
        price: 0,
        time: '',
        img: '',
        link: ''
    })

    const getTicket = (time: string,  price: number, hall: number, name: string, img: string,  link: string) => {
        setTicketProps({
            hall,
            name,
            price,
            time,
            img,
            link
        })
        setGetTicketToggle(true)
    }
    
    return (
        <div className={styles.FilmsCinemaList} {...props}>                            
            <h3>Сеансы сегодня</h3>
            {filmList.map((film: FilmListInterface, i: number) => {
               return <div className={styles.filmWrapper} key={i}>
                    <div className={styles.filmCard}>
                        <div 
                        className={styles.filmCardBig}
                        style={{backgroundImage: `url('${film.imageCard}')`}}
                        onClick={() => setFilmNun(i)}
                        >
                            <div>
                                <Play/>
                            </div>
                        </div>
                        {
                            filmNum === i 
                            ? <Player link={film.trailer} set={setFilmNun}/>
                            : null
                        }

                       
                    </div>
                    <div className={styles.filmInfo}>
                        <Link href={`/movie/${film.alias}`}>
                            <a>
                                <p className={styles.filmInfoHeader}>{film.name}</p>
                            </a>
                            
                        </Link>
                        <span>{film.title}</span>
                        <Age age={film.age} />
                       
                    </div>
                        <div className={styles.filmInfoSession}>
                            {
                                filmList.map(film2 => {
                                    return film2.onRental.map(item => {
                                        if(route.asPath === `/cinemas/${item.alias}` && item.name === film.name) {
                                             return (
                                                <div key={i} className={styles.sessionsWrapper}>
                                                    {
                                                        item.session2D
                                                        ? <div className={styles.sessions2D}>        
                                                            <span className={styles.sessions2DHeader}>сеансы 2d</span>
                                                            <div className={styles.sessionsButtonWrapper}>
                                                                {
                                                            
                                                                    item.session2D && item.session2D.timePrise.map((session, i) => {
                                                                        return <TicketButton  
                                                                            key={i}
                                                                            link={film.trailer} 
                                                                            time={session.time} 
                                                                            price={session.price} 
                                                                            hall={session.hall}
                                                                            name={film.name}
                                                                            onClick={() => getTicket(session.time, session.price, session.hall, film.name, film.imageSmall, film.trailer)}
                                                                            />
                                                                    })
                                                                }  
                                                            </div>
                                                            
                                                        </div>
                                                        : null
                                                    }                                                   
                                                    {
                                                        item.session3D
                                                        ? <div className={styles.sessions3D}>
                                                            <span className={styles.sessions3DHeader}>сеансы 3d</span>
                                                            <div className={styles.sessionsButtonWrapper}>
                                                            {
                                                                item.session3D && item.session3D.timePrise.map((session, i) => {
                                                                    return <TicketButton  
                                                                    key={i}
                                                                    link={film.trailer} 
                                                                    time={session.time} 
                                                                    price={session.price} 
                                                                    hall={session.hall}
                                                                    name={film.name}
                                                                    onClick={() => getTicket(session.time, session.price, session.hall, film.name, film.imageSmall, film.trailer)}
                                                                    />
                                                                })
                                                            } 
                                                            </div>
                                                       
                                                        </div>
                                                        : null
                                                    }                                                   
                                                    {
                                                        item.sessionDolbyAtmos
                                                        ? <div className={styles.sessionsDA}>
                                                            <span className={styles.sessionsDAHeader}>сеансы doldy atmos</span>      
                                                            <div className={styles.sessionsButtonWrapper}>
                                                            {
                                                                item.sessionDolbyAtmos.timePrise.map((session, i) => {
                                                                    return <TicketButton  
                                                                    key={i}
                                                                    link={film.trailer} 
                                                                    time={session.time} 
                                                                    price={session.price} 
                                                                    hall={session.hall}
                                                                    name={film.name}
                                                                    onClick={() => getTicket(session.time, session.price, session.hall, film.name, film.imageSmall, film.trailer)}
                                                                    />
                                                                })
                                                        
                                                            }
                                                            </div> 
                                                        </div>
                                                        : null
                                                    }
                                                     {
                                                        getTicketToggle
                                                        ?  <TicketsSection time={ticketProps.time} price={ticketProps.price} hall={ticketProps.hall} name={ticketProps.name} img={ticketProps.img} link={ticketProps.link} toggle={setGetTicketToggle}/>
                                                        : null
                                                    }
                                                </div>
                                            )
                                        }
                                    })
                                })
                            }
                        </div>
                </div>
               })
            }
        </div>
    )
}

