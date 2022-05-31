import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/Button.css'

const Button = ({ text, type, clickHandler}) => {
  return (
    <button className={type} onClick={() => clickHandler(text)}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Button
