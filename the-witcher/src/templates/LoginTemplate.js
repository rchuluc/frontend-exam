import React from 'react'
import LoginForm from '../molecules/LoginForm'
import Logo from '../assets/logo_dark.png'

const LoginTemplate = () => {
    return(
        <div className="login-content">
            <img draggable="false" alt="logo" className="img-logo-login" src={Logo}/>
            <LoginForm/>
        </div>
    )
}

export default LoginTemplate