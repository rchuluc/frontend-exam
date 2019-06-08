import React from 'react'
import LoginForm from '../molecules/LoginForm'
import Logo from '../assets/logo_dark.png'

const Login = ({ action }) => {
  return (
    <div className="login-content fade-in">
      <img draggable="false" alt="logo" className="img-logo-login" src={Logo} />
      <LoginForm action={action} />
    </div>
  )
}

export default Login
