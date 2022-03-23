import { NewsPageProps} from "./NewsPage.props"
import styles from './NewsPage.module.css'
import { useContext } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { TechnologiesInterface } from "../../interfaces/interfaces"

export const NewsPage = ({...props}: NewsPageProps):JSX.Element => {

    const {news} = useContext<IAppContext>(AppContext)
    return (
        <div className={styles.Stocks} {...props}>
            <h3>Новости</h3>
            <div className={styles.StocksWrapper}>            
                {
                    news.map((item: TechnologiesInterface) => {
                   
                        return (
                            <div className={styles.StocksItem} key={item.header}>
                                <img src={item.src}/>
                                <div>
                                    <span>{item.header}</span>
                                    {item.text}
                                </div>
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    )
}  

