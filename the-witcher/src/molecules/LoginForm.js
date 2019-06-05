import React from 'react'
import '../styles.css'
import Input from '../atoms/Input'

const LoginForm = () => {
    return(
        <div>

            <Input label={'Email'}/>
            <Input label={'Password'}/>
        </div>
    )
}

export default LoginForm