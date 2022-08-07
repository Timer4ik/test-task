import React, { FC } from 'react'
import styles from "./style.module.css"

interface Props {
    src: string
}

const Image: FC<Props> = ({  ...props }) => {
    return (
        <div className={styles.wrapper} >
            <img {...props} className={styles.img} alt="Изображение"/>
        </div>
    )
}

export default Image