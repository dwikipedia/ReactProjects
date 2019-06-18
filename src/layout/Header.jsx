import React, { Component } from 'react'
import fire from '../config/Fire'
import { Link } from 'react-router-dom'

import Links from './Links'

class Header extends Component {
    logout = () => {
        fire.auth().signOut()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand">ComicWeb</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <Links />
                        <button className="btn btn-md btn-danger" onClick={this.logout}>Logout</button>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Header