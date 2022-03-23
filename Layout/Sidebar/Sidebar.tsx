import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css'
import { MenuItem, MenuToggle } from "../../components";
import News from './icons/news2.svg'
import Star from './icons/star2.svg'
import Cinema from './icons/cinema2.svg'
import Sign from './icons/user.svg'
import Label from './icons/3d-glasses.svg'
import { useContext, useState} from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
import cn from 'classnames'
import { MenuInterface } from "../../interfaces/interfaces"
import Link from "next/link";



export const Sidebar = ({className, ...props}: SidebarProps):JSX.Element => {

    const [toggle, setToggle] = useState<boolean>(false)
    const {menu} = useContext<IAppContext>(AppContext)
    const items = [<Cinema/>, <Star/>, <News/>, <Sign/>]

    return (
        <div className={cn(styles.Sidebar)} {...props}>
            <MenuToggle toggle={toggle} onClick={() => setToggle(!toggle)}/>
            <div className={styles.Label}>
                <Link href={'/'}>
                    <a>
                        <Label/>
                    </a>
                </Link>
                <span>СТАР СИНЕМА</span> 
            </div>
            <div className={cn(className, styles.menuWrapper, {
                [styles.menuOpen]: toggle,
                [styles.menuClose]: !toggle
            }) }>
                {   
                   menu && menu.map((m: MenuInterface, i: number) => {
                        return (
                                    <MenuItem 
                                        onClick={() => setToggle(!toggle)}
                                        key={i}
                                        img={items[i]}
                                        title={m.title}
                                        alias={m.alias}
                                    />   
                        )
                    })
                }
            </div>    
        </div> 
    )
}