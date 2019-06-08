import React from 'react'
import { getVideos } from '../scripts'
import HomeTemplate from '../templates/HomeTemplate'
import Loading from '../molecules/LoadingScreen'

class Home extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      videosList: {}
    }
  }

  videos = () => {
    getVideos().then(data => {
      this.setState({
        videosList: data
      })
    })
  }

  componentDidMount() {
    this.videos()
  }

  render() {
    if (Object.entries(this.state.videosList).length === 0) {
      return <Loading />
    } else {
      return (
        <HomeTemplate action={this.props.action} data={this.state.videosList} />
      )
    }
  }
}

export default Home
