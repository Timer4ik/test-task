import React, { FC, ReactNode } from 'react'
import styles from "./style.module.css"

interface Props {
    label?: string,
    defaultValue?: string,
    className?:string,
    children?:ReactNode
}

const Select: FC<Props> = ({ label, defaultValue,className,children,...props }) => {
    return (
        <div className={className}>
            {label && <label className={styles.title}>{label}</label>}
            <select className={styles.select} value={defaultValue} {...props} >
                {children}
            </select>
        </div>
    )
}

export default Select