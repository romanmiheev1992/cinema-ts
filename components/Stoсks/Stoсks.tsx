import { StoсksProps} from "./Stoсks.props"
import styles from './Stoсks.module.css'
import { useContext } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { TechnologiesInterface } from "../../interfaces/interfaces"

export const Stoсks = ({...props}: StoсksProps):JSX.Element => {

    const {stocks} = useContext<IAppContext>(AppContext)
    return (
        <div className={styles.Stocks} {...props}>
            <h3>АКЦИИ</h3>
            <div className={styles.StocksWrapper}>            
                {
                    stocks.map((item: TechnologiesInterface, i: number) => {
                        if(i <= 3 ) {
                            return (
                                <div className={styles.StocksItem} key={item.header}>
                                    <img src={item.src}/>
                                    <div>
                                        <span>{item.header}</span>
                                        {item.text}
                                    </div>
                                </div>
                            ) 
                        }
                    })
                }  
            </div>
        </div>
    )
}  

