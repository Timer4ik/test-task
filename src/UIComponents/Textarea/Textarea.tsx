import React, { FC } from 'react'
import styles from "./style.module.css"

interface Props {
    label?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any,
    type?: string,
    name?:string,
    error?:string
}

const Textarea: FC<Props> = ({ label,error,...props}) => {
    return (
        <div>
            {label && <label className={styles.title}>{label}</label>}
            <textarea className={styles.textarea} {...props} style={{ border: error ? "1px solid red" : "" }} />

            <div style={{color:"red",wordWrap:"break-word"}}>{error}</div>
        </div>
    )
}

export default Textarea