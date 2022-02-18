import { ButtonProps } from "./Age.props";
import Age0 from './icon/0.svg'
import Age6 from './icon/6.svg'
import Age12 from './icon/12.svg'
import Age16 from './icon/16.svg'
import Age18 from './icon/18.svg'

export const Age = ({age, ...props}: ButtonProps): JSX.Element => {
    return(
       <>
            {
                age === 0 
                ? <Age0/> 
                :age === 6
                ? <Age6/>
                :age === 12
                ? <Age12/>
                : age === 16
                ? <Age16/>
                : age === 18
                ?<Age18/>
                : null
            } 
       </>
    )
}