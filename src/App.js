import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire'

import Login from './components/Login'
import Home from './components/Home'
import AddComic from './components/comics/AddComic'
import ComicDetail from './components/comics/ComicDetail'
import Header from './layout/Header'
import Footer from './layout/Footer'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


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
          <Header/>
          <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/login' component = {Login}/>
            <Route path = '/AddComic' component = {AddComic}/>
            <Route path = '/comic/:id' component = {ComicDetail}/>
          </Switch>
          <Footer/>
          {/* {this.state.user ? (<Home />) : (<Login />)} */}

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
