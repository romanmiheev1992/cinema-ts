import { FormProps } from "./Form.props"
import styles from './Form.module.css'
import { SignIn } from "./SignIn/SignIn"
import { SignUp } from "./SignUp/SignUp"
import { useEffect, useState } from "react"
import { Button } from ".."
import { useRouter } from "next/dist/client/router"
import axios from "axios"
import cn from 'classnames'
import Close from './icon/close.svg'
import { link } from "../../helpers/links"

export const Form = ({className, ...props}: FormProps):JSX.Element => {
    const router = useRouter()

    const [formToggle, setFormToggle] = useState<boolean>(true)
    const [mount, setMount] = useState(false)
    const [popup, setPopup] = useState(false)
    const [orderUser, setOrderUser] = useState({})

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setMount(true)
        }
        order()
    }, [])

    const order = async () => {
        const response =  await axios.get<string>(link.order)
        .then(res => setOrderUser(res.data))
    }

    const exit = () => {
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        router.push({
            pathname: '/'
        })
    }

    const popUpIcon = () => (
        popup
        ? <div 
            className={cn(className, {
                [styles.popUpIcon]: popup
            })}
        >
           Вы успешно зарегистрировались!
           <button 
                className={styles.closePopUp}
                onClick={() => setPopup(false)}
            >
               <Close/>
           </button>
        </div>
        : null
    )

    return (
      
        <div 
            className={styles.FormWrapper} 
            {...props}
        >
            {
                mount
                ?
                    <div className={styles.personalArea}>
                        <h2>Личный кабинет</h2>
                        <p>Пользователь:<span> {localStorage.getItem('user')}</span></p>
                        <p>Заказ:</p> 
                        { orderUser && Object.keys(orderUser).map((item, i) => {
                            if(orderUser[item].email === localStorage.getItem('user')) {
                                return (
                                    <div key={i} className={styles.orderBlock}>
                                        <p className={styles.film}>Кино: {orderUser[item].name}</p>
                                        <p className={styles.hall}>Зал: {orderUser[item].hall}</p>
                                        <p className={styles.time}>Время: {orderUser[item].time}</p>
                                        <p className={styles.tickets}> Билеты:</p>
                                        <div className={styles.orderSeatsList}>
                                            {orderUser[item].seats.map((seat, i) => (
                                                <div className={styles.orderBlockSeats} key={i}>
                                                    <p>ряд: {seat.row}</p>
                                                    <p>место: {seat.seat}</p>  
                                                </div>
                                            ))}
                                        </div>
                                  
                                    </div> 
                                )
                            }
                        })
                        }
                        <Button 
                            type='submit'
                            onClick={() => exit()}
                        >Выход</Button>
                    </div>
                :
                <>
                    <div className={styles.formToggle}>
                        { popUpIcon()}
                        <h2
                            onClick={() => setFormToggle(true)}
                        >Регистрация</h2>
                        <h2
                            onClick={() => setFormToggle(false)}
                        >Вход</h2>
                    </div>
                    {
                        formToggle
                        ? <SignIn popup={setPopup} toggle={setFormToggle}/>
                        : <SignUp setMount={setMount} />
                    }
                </>
            }
        </div>  
    )
}

