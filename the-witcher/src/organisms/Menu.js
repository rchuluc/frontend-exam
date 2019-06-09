import React from 'react'
import MenuItems from '../molecules/MenuItems'
import Logo from '../assets/logo_dark.png'

const Menu = ({ action }) => {
  return (
    <div>
      <div className="aside fade-in">
        <img
          draggable="false"
          alt="logo"
          className="img-logo-menu"
          src={Logo}
        />
        <MenuItems action={action} />
      </div>
    </div>
  )
}

export default Menu
