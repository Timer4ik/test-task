import React, { FC, useContext } from 'react'
import Select from '../../../UIComponents/Select/Select'
import { Context } from '../../Context/Context'


const RatingOption: FC = () => {

    const { ratings, selectedRating } = useContext(Context)

    if (!ratings) {
        return (<></>)
    }
    return (
        <Select label='Рейтинг мероприятия' {...selectedRating.bind}>
            {ratings.map(rating => {
                return (
                    <option key={rating.id} value={rating.title}>{rating.title}</option>
                )
            })}
        </Select>
    )

}

export default RatingOption