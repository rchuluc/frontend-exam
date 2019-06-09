import React from 'react'
import './styles.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Loading from './molecules/LoadingScreen'
import { validateLogin } from './scripts'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loaderAnimationEnd: false,
      logged: false
    }
  }

  handleLogin = () => {
    if (validateLogin()) {
      this.setState({
        logged: true
      })
    }
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
      <Router basename="/">
        {this.redirect()}
        <div className="bg">
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.state.loaderAnimationEnd === true ? (
                  <Redirect to="/login" />
                ) : (
                  <Loading />
                )
              }
            />
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
