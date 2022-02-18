import { useState } from 'react'
import styles from './TicketsSection.module.css'
import { TicketsSectionProps } from './TicketsSection.props'
import cn from 'classnames'
import { Seat } from './Seat/Seat'
import { Button } from '..'
import Ticket from './icon/ticket2.svg'
import Close from './icon/close.svg'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { Arr, orderDataProps } from '../../interfaces/interfaces'


export const TicketsSection = ({hall, img, name, price, time,  link, toggle, ...props}: TicketsSectionProps): JSX.Element => {

    const router = useRouter()
    const [chosenSeats, setChousenSeats] = useState<Arr[]>([])
    const [orderData, setOrderData] = useState<orderDataProps>({
        email: localStorage.getItem('user'),
        seats: [],
        name,
        hall,
        time
    })

    const [seatsOptions, setSeatsOptions] = useState([
        {row: 1, seat: 1, ocupate: false},
        {row: 1, seat: 2, ocupate: false},
        {row: 1, seat: 3, ocupate: false},
        {row: 1, seat: 4, ocupate: false},
        {row: 1, seat: 5, ocupate: false},
        {row: 1, seat: 6, ocupate: false},
        {row: 1, seat: 7, ocupate: false},
        {row: 1, seat: 8, ocupate: false},
        {row: 2, seat: 1, ocupate: false},
        {row: 2, seat: 2, ocupate: false},
        {row: 2, seat: 3, ocupate: false},
        {row: 2, seat: 4, ocupate: false},
        {row: 2, seat: 5, ocupate: false},
        {row: 2, seat: 6, ocupate: false},
        {row: 2, seat: 7, ocupate: false},
        {row: 2, seat: 8, ocupate: false},
        {row: 3, seat: 1, ocupate: false},
        {row: 3, seat: 2, ocupate: false},
        {row: 3, seat: 3, ocupate: false},
        {row: 3, seat: 4, ocupate: false},
        {row: 3, seat: 5, ocupate: false},
        {row: 3, seat: 6, ocupate: false},
        {row: 3, seat: 7, ocupate: false},
        {row: 3, seat: 8, ocupate: false},
        {row: 4, seat: 1, ocupate: false},
        {row: 4, seat: 2, ocupate: false},
        {row: 4, seat: 3, ocupate: false},
        {row: 4, seat: 4, ocupate: false},
        {row: 4, seat: 5, ocupate: false},
        {row: 4, seat: 6, ocupate: false},
        {row: 4, seat: 7, ocupate: false},
        {row: 4, seat: 8, ocupate: false},
    ])
    const numLine = [1, 2, 3, 4]

    const getSeats = (props: Arr) => {
        if(!props.ocupate) {
            props.ocupate = true
            setChousenSeats([
                ...chosenSeats,
                props
            ])
        } else {
            props.ocupate = false
            setChousenSeats(
                chosenSeats && chosenSeats.filter(item => item.ocupate)
            )
        }
    }

    const buyTicket = async () => {
        if(localStorage.getItem('auth')) {
            try {
                orderData.seats = chosenSeats
                await axios({
                    method: 'post',
                    url: 'https://react-cinema-next-default-rtdb.firebaseio.com/Order.json',
                    data: orderData,
                })
                .then(() => {
                    router.push({
                        pathname: '/sign'
                    })
                })    
            } catch(e) {
                console.log(e)
            }  
        }
    }
    
    return (
        <div className={styles.TicketsSection} {...props}>
            <div className={styles.closeWindow}
                onClick={() => toggle(false)}
            >
                  <Close/>
            </div>
            <div className={styles.HallInfo}>
                <div 
                    className={styles.filmImg}
                    style={{backgroundImage: `url('${img}')`}}
                >
                </div>
                <div  className={styles.filmInfo}>
                    <div>
                        <span>{name}</span>
                        <p>  Зал: <span>{hall}</span></p>
                        <p>Начало в  <span>{time}</span></p>   
                    </div>
                    
                   <div className={styles.TicketsLabel}>
                        <Ticket/>
                        <p>{chosenSeats.length}</p>
                    </div> 
                    
                </div>
            </div>
            <div className={styles.Screen}>
                <video width={400} muted autoPlay loop src={link}></video>
            </div>
            <div  className={styles.HallBlock}>
                <div className={styles.RowNumaration}>
                    {
                        numLine.map(num => {
                            return (
                                <span key={num}>{num}</span>
                            )
                        })
                    }
                </div>
                <div className={styles.SeatsBlock}>
                    {
                        seatsOptions.map((hall, i) => {
                            return (
                                <div onClick={() => getSeats(hall)} key={i} className={styles.SeatWrapper}>                       
                                    <Seat seat={hall}/>   
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.RowNumaration}>
                    {
                        numLine.map((num, i) => {
                            return (
                                <span key={i}>{num}</span>
                            )
                        })
                    }
                </div>
           </div>
           {
               <div className={cn(styles.OrderInfo, {
                    [styles.OrderInfoOpen]: chosenSeats.length > 0
                })}>
                    {
                        localStorage.getItem('auth')
                        ? <>
                        <p>И того к оплате: {price && price * (chosenSeats.length)}</p>
                            <Button 
                                type='pay'
                                onClick={() => buyTicket()}
                            >
                                оплатить
                            </Button>
                        </>
                        : 
                        <>
                            <p>Для заказа билетов необходимо зарегистрироваться</p>
                            <Button 
                                type='pay'
                                onClick={() =>  router.push({ pathname: '/sign'})}
                            >
                                Регистрация
                            </Button>
                        </>
                    }
                </div>
           }
        </div>
    )
}

