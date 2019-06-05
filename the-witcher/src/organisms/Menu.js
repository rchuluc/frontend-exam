import React from 'react'
import MenuItems from '../molecules/MenuItems'
import Logo from '../assets/logo_dark.png'

const Menu = ({}) =>{
    return(
        <div className="aside">
            <img draggable="false" alt="logo" className="img-logo-menu" src={Logo}/>
            <MenuItems />
        </div>

    )
}

export default Menu