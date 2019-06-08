import React from 'react'
import '../styles.css'
import VideoFrame from '../atoms/VideoFrame'
import Overlay from '../atoms/Overlay'

const VideoPlayer = () => {
  return (
    <Overlay>
      <VideoFrame />
    </Overlay>
  )
}

export default VideoPlayer
