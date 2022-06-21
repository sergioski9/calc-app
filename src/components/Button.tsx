import React, { FC } from 'react'
import '../stylesheets/Button.css'

export type ButtonClickHandler = (text: string) => void

type Props = {
  text: string,
  type?: string,
  clickHandler: ButtonClickHandler
}

const Button: FC<Props> = ({ text, type, clickHandler }) => {
  return (
    <button className={type} onClick={() => clickHandler(text)}>
      <span>{text}</span>
    </button>
  )
}

export default Button
