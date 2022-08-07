import React, { FC, useContext } from 'react'

import Button from '../../UIComponents/Button/Button'
import Input from '../../UIComponents/Input/Input'
import Textarea from '../../UIComponents/Textarea/Textarea'

import DateList from './components/DateList'
import PhotoSelector from './components/PhotoSelector'
import RatingOption from './components/RatingOption'

import styles from "../style.module.css"
import "./style.css"
import { Context } from '../Context/Context'
import ReactInputMask from 'react-input-mask'

const FirstStepPage: FC = () => {

    const {
        organizer, phone, email, city, name,
        description, address, handleSubmit,
        handleClear, handleAddDate } = useContext(Context)


    return (
        <div className="first">

            <h2 className={styles.big_title}>Шаг 1</h2>

            <form className={styles.block} onSubmit={(e) => handleSubmit(e)}>

                <h5 className={styles.medium_title}>Информация об организаторе</h5>

                <div className={styles.flex__block}>
                    <Input {...organizer.bind} error={organizer.error} name="organizer" label='Организатор' />
                </div>

                <h5 className={styles.medium_title}>Контактные данные</h5>

                <div className={styles.flex3}>
                    <Input {...phone.bind} error={phone.error} mask={"8 (999)-(999)-99-99"} name="phone" label='Телефон' />
                    <Input {...email.bind} error={email.error} name="email" type='email' label='E-mail' />
                    <Input {...city.bind} error={city.error} name="city" label='Город организатора' />
                </div>

                <h5 className={styles.medium_title}>Общая информация</h5>

                <div className={styles.flex__block}>
                    <Input {...name.bind} error={name.error} name="name" label='Название' />
                </div>

                <PhotoSelector />

                <div className={styles.flex__block}>
                    <Textarea {...description.bind} error={description.error} label='Подробное описание' />
                </div>

                <DateList />

                <Button style='standard' text='+ Добавить дату' type="button" onClick={(e) => handleAddDate(e)} />

                <div className={styles.flex__block}>
                    <RatingOption />
                    <Input {...address.bind} error={address.error} name="address" label='Адрес мероприятия' />
                </div>

                <div className="buttons">
                    <Button style='standard' onClick={(e) => handleClear(e)} type='button' text='Отменить' />
                    <Button style='purple' type={'submit'} text='Далее' />
                </div>
            </form>
        </div >
    )
}

export default FirstStepPage
