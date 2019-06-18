import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
    return (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink className='nav-link' to='/'>New Release</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/'>Top 10</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/'>Forum</NavLink>
            </li>
        </ul>
    )
}

export default Links