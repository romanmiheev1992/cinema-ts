import styles from './CinemaIcon.module.css'
import { CinemaIconProps } from './CinemaIcon.props'
import DBox from './icon/D-box2.svg'
import Sound from './icon/sound2.svg'
import Popcorn from './icon/popcorn2.svg'
import Game from './icon/game2.svg'
import Proj3d from './icon/3d2.svg'
import Star from './icon/star2.svg'
import Parking from './icon/parking2.svg'

export const CinemaIcon = ({params, ...props}: CinemaIconProps): JSX.Element => {

    return (
        <div className={styles.CinemaIcon} {...props}>
            <div className={styles.CinemaInfo}>
                <div className={styles.CinemaHightSection}>
                    <p>{params.title}</p>
                    <span>{params.underground}</span> <br/>
                    <span>{params.address}</span>
                </div>
                <div  className={styles.CinemaHallsSection}>
                    <p>{params.holls}</p>
                    <span>залов</span>
                </div>
                <div className={styles.CinemaMeddleSection}>
                    <p>{params.phone}</p>
                    <span>{params.openingHours}</span>   
                </div>
                <div className={styles.CinemaLowSection}>
                    {params.options.DBox
                    ? <div className={styles.cinemaOption}><DBox/><span>Кресла D-Box</span></div> 
                    : null}
                    {params.options.cinenaBar
                    ?<div className={styles.cinemaOption}><Popcorn/><span>Кинобар</span></div> 
                    : null}
                    {params.options.dolbyAtmosSound
                    ? <div className={styles.cinemaOption}><Sound/><span> Dolby Atmos</span></div> 
                    : null}
                    {params.options.gameZone
                    ? <div className={styles.cinemaOption}><Game/><span>Игровая зона</span></div> 
                    : null}
                    {params.options.parking
                    ? <div className={styles.cinemaOption}><Parking/><span>Парковка</span></div> 
                    : null}
                    {params.options.projector3d
                    ? <div className={styles.cinemaOption}><Proj3d/><span>3D-проектор</span></div> 
                    : null}
                    {params.options.vipHall
                    ? <div className={styles.cinemaOption}><Star/><span>VIP-зал</span></div> 
                    : null}
                </div>
                <div className={styles.cardBackgorund}
                  style={{backgroundImage: `url('${params.image}')`}}
                >
                </div>
            </div>
            <div 
                className={styles.CinemaImage}
                style={{backgroundImage: `url('${params.image}')`}}
            >
            </div>
        </div>
    )
}

