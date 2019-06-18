import React, { Component } from 'react';
import fire from '../config/Fire'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true,
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = e => {
        e.preventDefault() //prevent reload
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({ fireErrors: error.message })
            })
    }

    signup = e => {
        e.preventDefault() //prevent reload
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({ fireErrors: error.message })
            })
    }

    getAction = a => {
        if (a === 'signup') {
            this.setState({
                formTitle: 'Sign Up',
                loginBtn: false,
                fireErrors: ''
            })
        }
        else {
            this.setState({
                formTitle: 'Login',
                loginBtn: true,
                fireErrors: ''
            })
        }
    }

    render() {
        let errorNotification = this.state.fireErrors ?
            (<div className="Error">{this.state.fireErrors}</div>) : null

        let submitBtn = this.state.loginBtn ?
            (<input className="loginBtn" type="submit" onClick={this.login} value="Login" />) :
            (<input className="loginBtn" type="submit" onClick={this.signup} value="Sign Up" />)

        let signUpBtn = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('signup')}>Sign Up</button>) :
            (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>)

        return (
            <div>
                <div className='form_block'>
                    <div id="title">
                        {this.state.formTitle}
                    </div>
                    <div className="body">
                        {errorNotification}
                        <form>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email" />

                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password" />

                            {submitBtn}
                        </form>

                        {signUpBtn}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
