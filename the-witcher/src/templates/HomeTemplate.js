import React from 'react'
import VideoList from '../organisms/VideosList'
import Menu from '../organisms/Menu'
import VideoPlayer from '../molecules/VideoPlayer'
import { handleCloseTrailers } from '../scripts'

const HomeTemplate = ({ data, action }) => {
  return (
    <div className="container">
      <Menu action={action} />
      <div className="content" id="content">
        <span className="overlay-back-button" onClick={handleCloseTrailers}>
          &lsaquo; BACK
        </span>
        <VideoList videos={data} />
      </div>
      <VideoPlayer />
    </div>
  )
}

export default HomeTemplate
