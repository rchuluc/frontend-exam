import React from 'react'
import '../styles.css'
import VideoFrame from '../atoms/VideoFrame'
import Overlay from '../atoms/Overlay'

const VideoPlayer = ({
    videoUrl
}) => {
    return(
        <Overlay>
            <VideoFrame videoUrl={videoUrl}/>
        </Overlay>
    )
}

export default VideoPlayer