import React from 'react'
import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <h1 className='title'>NBA Legends</h1>
    </div>
  )
}

export default Header