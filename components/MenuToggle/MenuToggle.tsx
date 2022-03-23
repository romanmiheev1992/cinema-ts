import { MenuToggleProps } from "./MenuToggle.props";
import styles from './MenuToggle.module.css'
import Menu from './icons/menu.svg'
import Close from './icons/close.svg'

export const MenuToggle = ({toggle, ...props}: MenuToggleProps): JSX.Element => {
    return (
        <>
            {
                toggle
                ? <Close className={styles.menuToggle}  {...props}/>
                : <Menu className={styles.menuToggle}  {...props}/>
            }
        </> 
  
    )
}