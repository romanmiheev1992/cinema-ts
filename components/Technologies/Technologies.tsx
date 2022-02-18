import { TechnologiesProps} from "./Technologies.props"
import styles from './Technologies.module.css'
import { useContext } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { TechnologiesInterface } from "../../interfaces/interfaces"

export const Technologies = ({...props}: TechnologiesProps):JSX.Element => {

    const {technologies} = useContext<IAppContext>(AppContext)
    return (
        <div className={styles.Technologies} {...props}>
            <h3>ТЕХНОЛОГИИ</h3>
            <div className={styles.TechnologiesImgWrapper}>
                {
                    technologies.map((item : TechnologiesInterface) => (
                        <div className={styles.TechnologiesImg} key={item.header}>
                            <img src={item.src}/>
                            <div className={styles.TechnologiesImgText}>
                                <span>{item.header}</span>   
                            {item.text}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}  


