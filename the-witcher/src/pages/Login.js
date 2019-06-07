import React from 'react'
import LoginForm from '../molecules/LoginForm'
import Logo from '../assets/logo_dark.png'
import { handleLogin } from '../scripts'

const Login = () => {
  return (
    <div className="login-content fade-in">
      <img draggable="false" alt="logo" className="img-logo-login" src={Logo} />
      <LoginForm action={handleLogin} />
    </div>
  )
}

export default Login
