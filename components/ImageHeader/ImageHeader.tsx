import { ImageHeaderProps } from "./ImageHeader.props"
import styles from './ImageHeader.module.css'
import { useContext } from "react"
import { AppContext, IAppContext } from "../../appContext/MenuContext"
export const ImageHeader = ({...props}: ImageHeaderProps): JSX.Element => {

    const {header} = useContext<IAppContext>(AppContext)

    return (
       <div className={styles.ImageHeader} {...props}>
            <img src={header} width={1830} height={450} />
       </div>


    )
}