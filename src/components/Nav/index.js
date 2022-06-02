import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <nav className='nav'>
        <img id="logo" src="logo.png" alt="" />
        <div className='title'>Develop LLC</div>
        <div className='logocontent'>
            <div>Services</div>
            <div>Portfolio</div>
            <div>Contact</div>
        </div>
    </nav>
  )
}

export default Nav
