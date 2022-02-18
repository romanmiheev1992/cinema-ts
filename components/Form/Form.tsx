import { FormProps } from "./Form.props"
import styles from './Form.module.css'
import { SignIn } from "./SignIn/SignIn"
import { SignUp } from "./SignUp/SignUp"
import { useEffect, useState } from "react"
import { Button } from ".."
import { useRouter } from "next/dist/client/router"
import axios from "axios"
import { link } from "../../helpers/links"

export const Form = ({...props}: FormProps):JSX.Element => {

    const [formToggle, setFormToggle] = useState<boolean>(false)
    const router = useRouter()
    const [mount, setMount] = useState<any>(null)
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
                        })}
                        <Button 
                            type='submit'
                            onClick={() => exit()}
                        >Выход</Button>
                    </div>
                :
                <>
                    <div className={styles.formToggle}>
                        <h2
                            onClick={() => setFormToggle(true)}
                        >Регистрация</h2>
                        <h2
                            onClick={() => setFormToggle(false)}
                        >Вход</h2>
                    </div>
                    {
                        formToggle
                        ? <SignIn/>
                        : <SignUp setMount={setMount} />
                    }
                </>
            }
        </div>  
    )
}

