import React from 'react'
import Input from '../atoms/Input'

const LoginForm = ({ action }) => {
  return (
    <div className="form-group">
      <Input label="Email" type="email" autocomplete="on" id="email" />
      <Input label="Password" type="password" id="password" />
      <button onClick={action} className="btn">
        login
      </button>
    </div>
  )
}

export default LoginForm
