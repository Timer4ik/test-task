import React, { FC, useContext } from 'react'
import Input from '../../../UIComponents/Input/Input'
import Remove from '../../../UIComponents/Remove/Input'
import { Context } from '../../Context/Context'
import styles from "../../style.module.css"

const DateList: FC = () => {

    const { startDate, startTime, endDate, endTime, dates, setDates } = useContext(Context)

    return (
        <div className="dates__list dates">
            {dates.map((date) => {
                return (
                    <div key={date.id} className={"block__wrapper " + styles.flex__block}>
                        <Remove onClick={() => setDates(dates.filter((d) => d.id != date.id))} />
                        <Input type='date' value={date.startDate}
                            onChange={() => { }} onClick={(e) => e.preventDefault()} label='Дата начала' />
                        <Input type='time' value={date.startTime}
                            onChange={() => { }} onClick={(e) => e.preventDefault()} inputAlign='right' label='Время начала' />
                        <div className="line"></div>
                        <Input type='date' value={date.endDate}
                            onChange={() => { }} onClick={(e) => e.preventDefault()} label='Дата окончания' />
                        <Input type='time' value={date.endTime}
                            onChange={() => { }} onClick={(e) => e.preventDefault()} inputAlign='right' label='Время окончания' />
                    </div>
                )
            })}



            <div className={styles.flex__block} >
                <Input {...startDate.bind} error={dates.length || startDate.value ? "" : "Добавьте дату начала"} type='date' label='Дата начала' />
                <Input {...startTime.bind} error={dates.length || startTime.value ? "" : "Добавьте время начала"} type='time' inputAlign='right' label='Время начала' />
                <div className="line"></div>
                <Input {...endDate.bind} error={dates.length || endDate.value ? "" : "Добавьте дату конца"} type='date' label='Дата окончания' />
                <Input {...endTime.bind} error={dates.length || endTime.value ? "" : "Добавьте время конца"} type='time' inputAlign='right' label='Время окончания' />
            </div>

            {!dates.length ? <div style={{ color: "red", wordBreak: "break-all" }}>{"Добавьте хотя бы одну дату"}</div> : ""}


        </div>
    )
}

export default DateList