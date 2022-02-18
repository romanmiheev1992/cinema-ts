import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css'
import Facebook from './icons/facebook.svg'
import Instagram from './icons/instagram.svg'
import Vk from './icons/vk.svg'
import cn from 'classnames'


export const Footer = ({className, ...props}: FooterProps) => {

    const footerList = ['О КОМПАНИИ', 'ВАКАНСИИ', 'АРЕНДА ЗАЛОВ', 'РЕКЛАМА', 'ПАРТНЕРЫ', 'КОНТАКТЫ']
    const iconList = [<Vk/>, <Facebook/>, <Instagram/>]

    return (
        <div className={cn(styles.Footer)} {...props}>
            <div className={styles.FooterBlock}>
                <div className={styles.FooterBlockInfo}>
                    <p>
                          ФЕДЕРАЛЬНАЯ СЕТЬ КИНОТЕАТРОВ «СТАР СИНЕМА» СОЗДАНА В 2005 ГОДУ, НА СЕГОДНЯШНИЙ ДЕНЬ В НЕЕ ВХОДИТ 26 КИНОТЕАТРОВ В 14 ГОРОДАХ РОССИИ И СНГ.
                    </p>
                </div>
                <div className={styles.FooterBlockMenu}>
                    {
                        footerList.map(listItem => (
                            <span key={listItem}
                            >{listItem}</span>
                        ))
                    }
                </div>
                <div className={styles.FooterBlockIcons}>
                    {
                        iconList.map((icon, i) => <div key={i} className={styles.iconItem}>{icon}</div> )
                    }
                </div>   
            </div>
        </div>
    )
}






