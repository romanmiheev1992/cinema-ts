import { MenuItemProps } from "./MenuItem.props";
import styles from './MenuItem.module.css'
import Link from 'next/link'
import { useEffect, useState } from "react";

export const MenuItem = ({img, alias, title, ...props}: MenuItemProps) => {

    const [auth, setAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setAuth(true)
        }
    })
    return (
            <div className={styles.menuItem} {...props}>
                {
                    <Link href={`/${alias}`}>
                        <a>
                            <div className={styles.menuItemSVG}>{img}</div> 
                            {
                                auth && title === 'вход'
                                ? <span className={styles.privarLogo}>Личный <br/>кабинет</span> 
                                : <span>{title}</span>
                            }
                        </a>
                    </Link>   
                }
            </div>  
    )
}