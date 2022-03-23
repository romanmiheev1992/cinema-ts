import { CinemaSectionInfoProps } from "./CinemaSectionInfo.props"
import styles from './CinemaSectionInfo.module.css'
import { useRouter } from "next/dist/client/router"
import { useContext } from "react"
import { AppContext, IAppContext } from "../../../appContext/MenuContext"

export const CinemaSectionInfo = ({...props}: CinemaSectionInfoProps): JSX.Element => {

    const {cinemas} = useContext<IAppContext>(AppContext)
    const route = useRouter()
    
    return (
        <>
            {
                cinemas.map(cinema => {
                    if(cinema.alias === route.query.alias) {
                        return (
                            <div className={styles.CinemaSectionInfo} {...props} key={cinema.alias}>
                                <div className={styles.CinemaInformation}>
                                    <div className={styles.InfoTitle}>
                                        <div className={styles.InfoTitleString}><p>ФОРМАТ ПОКАЗА</p><span>{cinema.info.formatShow}</span></div>
                                        <div className={styles.InfoTitleString}><p>ФОРМАТ ЗВУКА</p> <span>{cinema.info.formatSound}</span> </div>
                                        <div className={styles.InfoTitleString}><p>КРЕСЛА</p><span>{cinema.info.armchears}</span></div>
                                        <div className={styles.InfoTitleString}><p>ЭКРАНЫ</p><span>{cinema.info.screen}</span></div>
                                        <div className={styles.InfoTitleString}><p>ОБЩЕЕ КОЛИЧЕСТВО ПОСАДОЧНЫХ МЕСТ</p><span>{cinema.info.seats}</span></div>
                                    </div>
                                </div>
                                <div className={styles.CinemaHalls}>
                                    <p>{cinema.holls}</p>
                                    <p>залов</p>
                                </div>
                            </div> 
                        )
                    }
                })
            }
        </>
    )
}
    
