import { useRouter } from "next/dist/client/router"
import { useContext, useState } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { FilmSectionListProps } from "./FilmSectionList.props"
import styles from './FilmSectionList.module.css'
import { TicketButton } from "../TicketButton/TicketButton"
import { FilmsList } from "../FilmsList/FilmsList"
import { TicketsSection } from "../TicketsSection/TicketsSection"
import { GetTicketProps, onRentalProps, tpProps } from "../../interfaces/interfaces"



export const FilmSectionList = ({name, ...props}: FilmSectionListProps): JSX.Element => {
    
    const route = useRouter()
    const {filmList, cinemas} = useContext<IAppContext>(AppContext)

    const [getTicketToggle, setGetTicketToggle] = useState(false)
    const [ticketProps, setTicketProps] = useState<GetTicketProps>({
        hall: 0,
        name: '',
        price: 0,
        time: '',
        img: '',
        link: ''
    })

    const getTicket = ( time: string,  price: number, hall: number, name: string, img: string,  link: string) => {
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
        <div className={styles.FilmSectionList} {...props}>
            <h3>Сеансы на сегодня</h3>
            {
                cinemas.map(cinema => {
                    return (
                        <div key={cinema.alias} className={styles.CinemaBlock}>
                            <div className={styles.CinemaBlockInfo}>
                                <h4>{cinema.title}</h4>
                                <p>{cinema.underground}</p> 
                                <p>{cinema.address}</p>
                            </div>
                        
                            <div className={styles.CinemaBlockSessions}>
                            {
                                filmList.map(film => {
                                    return film.onRental.map((f: onRentalProps, i:number) => {
                                        if(f.alias === cinema.alias && f.name === name) {
                                            return(
                                                <div className={styles.ticketsSection} key={i}>
                                                {
                                                    f.session2D
                                                    ? <div className={styles.session2D}>
                                                        <span className={styles.span}>сеансы 2D</span>
                                                        <div className={styles.sessionsButtonWrapper}>
                                                            {
                                                                f.session2D && f.session2D.timePrise.map((session: tpProps, i: number) => {
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
                                                    f.session3D
                                                    ? <div className={styles.session3D}>
                                                        <span className={styles.span}>сеансы 3D</span>
                                                        <div className={styles.sessionsButtonWrapper}>
                                                            {
                                                                f.session3D && f.session3D.timePrise.map((session: tpProps, i: number) => {
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
                                                    f.sessionDolbyAtmos
                                                    ? <div className={styles.sessionDolbyAtmos}>
                                                        <span className={styles.span}>сеансы Dolby Atmos</span>
                                                        <div className={styles.sessionsButtonWrapper}>
                                                        {
                                                                f.sessionDolbyAtmos && f.sessionDolbyAtmos.timePrise.map((session: tpProps, i: number) => {
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
                    )
               })
            }
            <div className={styles.filmLlst}>
                <h3>Также в прокате</h3>
                 <FilmsList path=""/>
            </div>
        </div>
    )
}