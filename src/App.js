import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire'

import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
        document.body.className = "home-wallpaper";

      }
      else {
        this.setState({ user: null })
        document.body.className = "login-wallpaper";
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.user ? (<Home />) : (<Login />)}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
