import React from 'react'
import '../styles.css'
import Input from '../atoms/Input'
import { Link } from 'react-router-dom'

const LoginForm = ({ action }) => {
  return (
    <div className="form-group">
      <Input label={'Email'} type={'email'} autocomplete={'on'} />
      <Input label={'Password'} type={'password'} />
      <Link to="/home" className="btn btn-route">
        login
      </Link>
    </div>
  )
}

export default LoginForm
