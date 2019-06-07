import React from 'react'
import VideoList from '../organisms/VideosList'
import Menu from '../organisms/Menu'
import VideoPlayer from '../molecules/VideoPlayer'

const HomeTemplate = ({ data }) => {
  return (
    <div className="container">
      <Menu />
      <div className="content" id="content">
        <VideoList videos={data} />
      </div>
      <VideoPlayer />
    </div>
  )
}

export default HomeTemplate
