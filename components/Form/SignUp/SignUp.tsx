import { SignUpProps } from "./SignUp.props"
import styles from './SignUp.module.css'
import { Button, Input } from "../.."
import { useForm } from "react-hook-form"
import Password from './icons/password.svg'
import Email from './icons/email.svg'
import Eye from './icons/eye.svg'
import { useState } from "react"
import cn from "classnames"
import axios from "axios"
import { useRouter } from "next/dist/client/router"
import { link } from "../../../helpers/links"
import { signinProps } from "../../../interfaces/interfaces"


export const SignUp = ({setMount, ...props}: SignUpProps):JSX.Element => {

    const {register, formState: {errors}, handleSubmit, reset} = useForm()
    const router = useRouter()

    const [passwordToggle, setPasswordToggle] = useState<boolean>(false)

    const onSubmit = async (data: signinProps) => {

        try {
            data.returnSecureToken = true
            const response = await axios.post(link.auth, data)
            .then(res => {
            if(res.request.status === 400) {
                console.log('не правильный логин или пароль')
            }
            if(res.data.registered) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('user', res.data.email)
                    setMount(true)
            }
            })
            .then(() => {
                router.push({
                    pathname: '/'
                })
            })
            reset()
        }catch(e) {
    
        }
        
    }

    return (
        
        <form
            className={styles.SignIn}
            onSubmit={handleSubmit(onSubmit)}
            {...props}
        >
            <h3 >Вход</h3>
            <div className={styles.inputIconWrapper}>
                <Input 
                    {...register("email", {required: {value: true, message: "Введите email"},
                    pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                    message: "Введите корректный email"}})} 
                    placeholder="Email"
                    error= {errors.email}
                />
                <Email/>
            </div>
           
            <div className={styles.inputIconWrapper}>
                <Input 
                    type={passwordToggle ? 'input' :  'password'}
                    {...register("password", {required: {value: true, message: "Придумайте пароль"},
                    minLength : {value: 7, message: 'Длина пароля должна быть более 6 символов'}})}
                    placeholder="Пароль"
                    error={errors.password}
                />
                <Password/>
                  <Eye className={ cn(styles.PasswordToggle, {
                      [styles.wisible] : passwordToggle
                  }) } onClick={() => setPasswordToggle(!passwordToggle)}/>
            </div>
            <Button type='submit'>Войти</Button>
        </form>
        
    )
}