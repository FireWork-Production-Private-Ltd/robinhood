import React from 'react'
import Logo from './robinhood.svg'

function Header() {
  return (
    <div className='header__wrapper'>
        {/* Logo */}
        <div className='header__logo'>
            <img src={Logo} width={25} alt="Logo" />
        </div>
        {/* Search Bar */}
        <div className='header__search'>
            <div className='header__searchContainer'>
                <input placeholder='Search' type="text" ></input>
            </div>
        </div>
        {/* Menu items */}
        <div className='header__menuItems'>
            <a href="#">Free Stocks</a>
            <a href="#">Portfolio</a>
            <a href="#">Cahs</a>
            <a href="#">Messages</a>
            <a href="#">Account</a>

        </div>


    </div>
  )
}

export default Header