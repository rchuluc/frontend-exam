import React from "react"
import "../styles.css"
import { floatLabel } from '../scripts'

const Input = ({ type, autocomplete, label }) => {
  return (
    <span className="input-alpha">
      <label className="form-label-initial">{label}</label>
      <input
        className="form-input"
        onBlur={floatLabel}
        onFocus={floatLabel}
        type={type}
        autoComplete={autocomplete}
      />
    </span>
  );
};

export default Input;
