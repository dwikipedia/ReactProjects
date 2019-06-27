import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'

const Header = (props) => {
    const { auth } = props
    //console.log(auth)

    const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">ComicWeb</Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    { links }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Header)