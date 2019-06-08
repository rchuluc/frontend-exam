import React from 'react'
import VideoList from '../organisms/VideosList'
import Menu from '../organisms/Menu'
import VideoPlayer from '../molecules/VideoPlayer'

const HomeTemplate = ({ data, action }) => {
  return (
    <div className="container">
      <Menu action={action} />
      <div className="content" id="content">
        <VideoList videos={data} />
      </div>
      <VideoPlayer />
    </div>
  )
}

export default HomeTemplate
