import React, { FC } from 'react'
import styles from "./style.module.css"

interface Props {
  style: "standard" | "purple",
  text: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
  type?:"button" | "submit" | "reset"
}

const Button: FC<Props> = ({ style, text, ...props }) => {
  return (
    <button {...props} type={props.type} className={style == "standard" ? styles.standard : styles.purple}>
      {text}
    </button>
  )
}

export default Button