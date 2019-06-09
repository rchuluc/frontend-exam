import React from 'react'
import '../styles.css'
import { floatLabel } from '../scripts'

const Input = ({ type, autocomplete, label, id }) => {
  return (
    <div>
      <label className="form-label-initial">{label}</label>
      <input
        id={id}
        className="form-input"
        onBlur={floatLabel}
        onFocus={floatLabel}
        type={type}
        autoComplete={autocomplete}
      />
    </div>
  )
}

export default Input
