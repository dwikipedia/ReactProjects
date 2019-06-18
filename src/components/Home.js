import React, { Component } from 'react'
import Header from '../layout/Header'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>This is your home page!</h1>
                </div>
            </div>
        )
    }
}

export default Home