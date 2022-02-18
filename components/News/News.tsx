import { NewsProps} from "./News.props"
import styles from './News.module.css'
import { useContext } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import { TechnologiesInterface } from "../../interfaces/interfaces"

export const News = ({...props}: NewsProps):JSX.Element => {
    const {news} = useContext<IAppContext>(AppContext)

    return (
        <>
        <div className={styles.News} {...props}>
            <h3>НОВОСТИ И СОБЫТИЯ</h3>
            <div className={styles.NewsWrapper}>            
                {
                    news.map((item: TechnologiesInterface, i: number) => {
                        if(i <= 3) {
                            return(
                                <div className={styles.NewsItem} key={i}>
                                    <img src={item.src}/>
                                    <div className={styles.NewsItemText}>
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
        </>
    )
}  
