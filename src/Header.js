import React from 'react'
import Logo from './robinhood.svg'

function Header() {
  return (
    <div className='header__wrapper'>
        {/* Logo */}
        <div className='header__logo'>
            <img src={Logo} width={25} />
        </div>
        {/* Search Bar */}
        <div className='header__search'>
            <div className='header__searchContainer'>
                
            </div>
        </div>
        {/* Menu items */}

    </div>
  )
}

export default Header