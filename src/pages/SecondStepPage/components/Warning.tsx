import React from 'react'
import warning from "../../../static/warning.jpg"


export default function Warning() {
    return (
        <div className="event__warning warning">
            <img src={warning} alt="изображение" className='warning__img' />
            <div className="warning__content">Проверьте ваше мероприятие на наличие ошибок, если все в порядке - отправляйте на модерацию.</div>
        </div>
    )
}
