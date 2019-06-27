import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../store/actions/authAction'

const LoggedOutLinks = (props) => {
    return (
        <React.Fragment>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink className='nav-link' to='/login'>Login</NavLink>
            </li>
        </ul>
        {/* <button className="btn btn-sm btn-danger mt-1" onClick={props.logOut}>Logout</button> */}
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}
export default connect(null, mapDispatchToProps)(LoggedOutLinks)