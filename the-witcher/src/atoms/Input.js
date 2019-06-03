import React from 'react'
import '../styles.css'

const inputStyle = {
    display: 'block' 
}

const Input = ({
    type,
    autocomplete,
    label,

}) => {

    return(
        <span>
            <label style={inputStyle}>{label}</label>
            <input style={inputStyle} type={type} autoComplete={autocomplete}/>
        </span>
    )
}

export default Input