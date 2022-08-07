import React, { FC, ReactNode } from 'react'
import ReactInputMask from 'react-input-mask'
import styles from "./style.module.css"

interface Props {
    label?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
    type?: string
    className?: string
    children?: ReactNode
    disabled?: boolean
    inputAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
    display?: "none"
    name?: string
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => any
    error?: string
    readOnly?: boolean
    mask?:string
}

const Input: FC<Props> = ({ label, children, inputAlign, display, onClick, className, name, type, error, mask,...props }) => {

    return (
        <div className={className}>
            {label && <label className={styles.title}>{label}</label>}

            {children ?
                children :
                <ReactInputMask mask={mask || ""} onClick={onClick} {...props}
                    type={type || "text"} style={{ textAlign: inputAlign, display, border: error ? "1px solid red" : "" }}
                    className={styles.input} />
            }

            <div style={{ color: "red", wordBreak: "break-all" }}>{error}</div>
        </div>
    )
}

export default Input