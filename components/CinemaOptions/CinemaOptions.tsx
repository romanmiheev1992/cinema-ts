import { ButtonProps } from "./CinemaOptions.props";
import styles from './CinemaOptions.module.css'
import DBox from './icon2/D-box2.svg'
import Sound from './icon2/sound2.svg'
import Popcorn from './icon2/popcorn2.svg'
import Game from './icon2/game2.svg'
import Proj3d from './icon2/3d2.svg'
import Star from './icon2/star2.svg'
import Parking from './icon2/parking2.svg'

export const CinemaOptions = ({options, children, className, ...props}: ButtonProps): JSX.Element => {
    
    return(
       <>
            
             <div className={styles.Options}>
             {options.DBox
             ? <div className={styles.cinemaOption}><DBox/><span>Кресла D-Box</span></div> 
             : null}
             {options.cinenaBar
             ?<div className={styles.cinemaOption}><Popcorn/><span>Кинобар</span></div> 
             : null}
             {options.dolbyAtmosSound
             ? <div className={styles.cinemaOption}><Sound/><span> Dolby Atmos</span></div> 
             : null}
             {options.gameZone
             ? <div className={styles.cinemaOption}><Game/><span>Игровая зона</span></div> 
             : null}
             {options.parking
             ? <div className={styles.cinemaOption}><Parking/><span>Парковка</span></div> 
             : null}
             {options.projector3d
             ? <div className={styles.cinemaOption}><Proj3d/><span>3D-проектор</span></div> 
             : null}
             {options.vipHall
             ? <div className={styles.cinemaOption}><Star/><span>VIP-зал</span></div> 
             : null}
             </div>
            
       </>
    )
}