import React from 'react'
import './styles.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Loading from './molecules/LoadingScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loaderAnimationEnd: false,
      logged: false
    }
  }

  handleLogin = () => {
    this.setState({
      logged: true
    })
    this.redirect()
  }

  handleLogout = () => {
    this.setState({
      logged: false
    })
  }

  loaderEnd = () => {
    window.setTimeout(() => {
      this.setState({
        loaderAnimationEnd: true
      })
    }, 4000)
  }

  redirect = () => {
    console.log(window.location.pathname)
    if (this.state.loaderAnimationEnd === true) {
      if (window.location.pathname === '/') {
        return <Redirect to="/login" />
      }
    }
    if (this.state.logged === true) {
      return <Redirect to="/home" />
    }
  }

  componentDidMount() {
    this.loaderEnd()
    this.setState({
      logged: false
    })
  }

  render() {
    return (
      <Router>
        {this.redirect()}
        <div className="bg">
          <Switch>
            <Route exact path="/" component={Loading} />
            <Route
              path="/login"
              render={() => <Login action={this.handleLogin} />}
            />
            <Route
              path="/home"
              render={() =>
                this.state.logged === true ? (
                  <Home action={this.handleLogout} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
