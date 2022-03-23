import { PlayerProps } from "./Player.props";
import styles from './Player.module.css'
import Close from './icon/close.svg'

export const Player = ({set, link, className, ...props}: PlayerProps): JSX.Element => {

  return (
    <>
        {
            <div className={styles.player} {...props}>
                <div className={styles.playerWrapper}>
                    <div 
                        className={styles.closeIcon}
                        onClick={() => set(null)}
                    >
                        <Close/>
                    </div>
                    <video controls loop autoPlay src={link}>  
                    </video>   
                </div>
            </div>
        }
    </>
  );
}