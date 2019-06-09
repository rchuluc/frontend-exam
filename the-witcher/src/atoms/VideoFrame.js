import React from 'react'
import '../styles.css'

const VideoFrame = () => {
  return (
    <div className="video-frame">
      <iframe
        id="videoEmbedded"
        allowFullScreen={true}
        frameBorder="0"
        title="default"
      />
    </div>
  )
}

export default VideoFrame
