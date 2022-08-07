import React, { FC, useContext } from 'react'
import { MailSvg, PhoneSvg } from '../../../static/svg'
import { Context } from '../../Context/Context'


const Contacts: FC = () => {
    const { organizer, phone, email } = useContext(Context)

    return (
        <div className="second__contact contacts">
            <h6>Контакты</h6>
            <ul className="contacts__list list__items">
                <li className="list__item item">
                    <div className="item__image">
                        <PhoneSvg />
                    </div>
                    <div className="item__content">{phone.value}</div>
                </li>
                <li className="list__item item">
                    <div className="item__image">
                        <MailSvg />
                    </div>
                    <div className="item__content">{email.value}</div>
                </li>
            </ul>
            <div className="contact__subcontent subcontent">
                <div className="subcontent">
                    <h6>{organizer.value}</h6>
                    <p>Организатор мероприятия</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts