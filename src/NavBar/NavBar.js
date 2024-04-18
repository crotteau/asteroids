import './NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink to='/apod' className='nav-apod'>APOD</NavLink>
                </li>
                <li>
                    <NavLink to='/asteroids' className='nav-asteroids'>ASTEROIDS</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;