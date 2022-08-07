import React, { FC } from 'react'
import styles from "./style.module.css"


interface Props {
    onClick?: (e: any) => any,
}

const Remove: FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.remove__button} onClick={onClick} >
            <span className={styles.remove} />
        </div>
    )
}

export default Remove