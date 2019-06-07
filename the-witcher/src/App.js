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
      loaderAnimationEnd: false
    }
  }

  loaderEnd = () => {
    window.setTimeout(() => {
      this.setState({
        loaderAnimationEnd: true
      })
    }, 4000)
  }

  redirect = () => {
    if (this.state.loaderAnimationEnd === true) {
      if (window.location.pathname === '/') {
        return <Redirect to="/login" />
      }
    }
  }

  componentDidMount() {
    this.loaderEnd()
  }

  render() {
    return (
      <Router>
        {this.redirect()}
        <div className="bg">
          <Switch>
            <Route exact path="/" component={Loading} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
