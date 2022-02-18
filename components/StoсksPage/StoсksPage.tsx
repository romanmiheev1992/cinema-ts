import { StoсksPageProps} from "./StoсksPage.props"
import styles from './StoсksPage.module.css'
import { useContext } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { TechnologiesInterface } from "../../interfaces/interfaces"

export const StoсksPage = ({...props}: StoсksPageProps):JSX.Element => {

    const {stocks} = useContext<IAppContext>(AppContext)
    return (
        <div className={styles.StocksPage} {...props}>
            <h3>АКЦИИ</h3>
            <div className={styles.StocksPageWrapper}>            
                {
                    stocks.map((item: TechnologiesInterface, i: number) => (
                        <div className={styles.StocksPageItem} key={item.header}>
                            <div className={styles.StocksPageImg}>
                                <img src={item.src}/>
                            </div>
                            <div className={styles.StocksPageInfo}>
                                <span>{item.header}</span>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}  
