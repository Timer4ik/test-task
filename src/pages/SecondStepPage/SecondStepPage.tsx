import React, { FC, useContext } from 'react'
import Button from '../../UIComponents/Button/Button'

import Warning from './components/Warning'
import Contacts from './components/Contacts'
import EventInfo from './components/EventInfo'

import styles from "../style.module.css"
import "./style.css"
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context/Context'

const SecondStepPage: FC = () => {

    const { name, description, selectedRating, photoReader } = useContext(Context)

    const navigate = useNavigate()

    return (
        <div className="second">

            <h2 className={styles.big_title}>Шаг 2</h2>

            <div className={styles.block}>

                <Warning />

                <div className="event">
                    <div className="event__rating">
                        {selectedRating.value}
                    </div>

                    <div className="event__content">
                        <h2 className="event__title">{name.value}</h2>

                        <EventInfo />

                        <Contacts />
                    </div>

                    <div className="event__image">
                        <img src={`${photoReader.previews[0]?.baseCode}`} alt="Изображение" />
                    </div>
                </div>
                <p className='event__text'>
                    {description.value}
                </p>

                <div className="buttons">
                    <Button text='Назад' type='button' onClick={() => navigate(-1)} style='standard' />
                    <Button text='Отправить на модерацию' type='button' style='purple' />
                </div>
            </div>
        </div>
    )
}

export default SecondStepPage