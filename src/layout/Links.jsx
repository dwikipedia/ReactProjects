import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
    return (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink className='nav-link' to='/AddComic'>Add Comics</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className='nav-link' to='/login'>Login</NavLink>
            </li>
        </ul>
    )
}

export default Links