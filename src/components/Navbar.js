import React from 'react'
import './Navbar.css';

 function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-text'>
        <div className='navCenter'>
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>

            </div>
        </div>
    </nav>
  )
}
export default Navbar;