import React, { FC, useContext } from 'react'
import { CalendarSvg, ClockSvg, LocationSvg } from '../../../static/svg'
import { Context } from '../../Context/Context'

const EventInfo: FC = () => {

    const { dates, address } = useContext(Context)

    return (
        <ul className='event__info '>
            <li className="event__item">
                <div className="item__image">
                    <LocationSvg />
                </div>
                <div className="item__content">{address.value}</div>
            </li>
            <li className="event__item">
                <div className="item__image">
                    <CalendarSvg />
                </div>
                <div className="item__content">{dates?.map((date) => {
                    return (
                        <div key={date.id} style={{ lineHeight: "1.3" }}>
                            {new Date(date.startDate).toLocaleString("ru-RU", {
                                year: 'numeric',
                                month: 'short',
                                weekday: "short",
                                day: 'numeric', timeZone: "UTC"
                            })}, {" "}
                            {new Date(date.endDate).toLocaleString("ru-RU", {
                                year: 'numeric',
                                month: 'short',
                                weekday: "short",
                                day: 'numeric', timeZone: "UTC"
                            })}
                        </div>
                    )
                })}</div>
            </li>
            <li className="event__item">
                <div className="item__image">
                    <ClockSvg />
                </div>
                <div className="item__content">
                    {dates?.map((date) => {
                        return (
                            <div key={date.id}>
                                {date.startTime.split("-").join(":")},{" "}
                                {date.endTime.split("-").join(":")}
                            </div>
                        )
                    })}
                </div>
            </li>
        </ul>
    )
}

export default EventInfo