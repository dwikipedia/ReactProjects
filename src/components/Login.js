import React, { Component } from 'react';

import { connect } from 'react-redux'
import { logIn } from '../store/actions/authAction'
import { signUp} from '../store/actions/authAction'
import { Redirect } from 'react-router-dom'

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
        this.props.logIn(this.state)
    }

    signup = e => {
        e.preventDefault() //prevent reload
        this.props.signUp(this.state)
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
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to="/" />

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
                        {authError ? <div className="Error">{authError}</div> : null}
                        <form onSubmit={this.handleSubmit}>
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

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch(logIn(creds)),
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
