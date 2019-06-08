import React from 'react'
import VideoThumb from '../atoms/VideoThumb'
import VideoLabel from '../atoms/VideoLabel'
import { handleOpenPlayer } from '../scripts'

const VideoCard = ({ thumbnail, title, videoId }) => {
  return (
    <div className="video-card" onClick={() => handleOpenPlayer(videoId)}>
      <VideoThumb image={thumbnail}>
        <VideoLabel title={title} />
      </VideoThumb>
    </div>
  )
}

export default VideoCard
