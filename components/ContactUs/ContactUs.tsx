import { ContactUsProps } from "./ContactUs.props";
import styles from './ContactUs.module.css'
import { Button } from "../Button/Button";
import { Input } from "..";
import { TextArea } from "../TextArea/TextArea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { link } from "../../helpers/links";
import { useState } from "react";
import { ContactUsPropsForm } from "../../interfaces/interfaces";


export const ContactUs = ({className, ...props}: ContactUsProps): JSX.Element => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ContactUsPropsForm>()
    const [text, setText] = useState<string>('У вас есть жалобы,  пожелания или предложения? Свяжитесь с нами!')
    const onSubmit = async (data: ContactUsPropsForm) => {
        await axios({
                data,
                method: 'post',
                url: link.contactUs
            })
            .then(res => {
                if(res.status === 200) {
                    setText('Ваше сообщение отправлено! В ближайшее время мы его изучим.')
                }
            })
            reset()
    }
    
    return(
        <div className={styles.ContactUs}>
            <div className={styles.ContactUsLabel}>
                <h4>{text}</h4>
            </div>  
            <form 
                {...props} 
                className={styles.ContactUsForm}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input label="Имя" 
                        {...register("name", {required: {value: true, message: 'Заполните имя' }, minLength:{ value: 2, message: 'Введите полное имя'} })}
                        error={errors.name}
                        placeholder="Имя"
                    />
                    <Input label="Email" 
                        {...register("email", {required :{value: true, message: 'Введите Email'}, pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Введите Email корректно'}  })}
                        error={errors.email}
                        placeholder="Email"
                    />
                    <TextArea 
                        {...register('textarea', {required: {value: true, message: 'Поле обязательно для заполнения'}, minLength: {value: 10, message: 'Минимальное количество символов "10"'}})}
                        error={errors.textarea}
                        placeholder="Ваше сообщение"
                    />
                    <Button type="submit">отправить</Button>
            </form>
        </div>
    )
}