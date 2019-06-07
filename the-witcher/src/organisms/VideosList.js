import React from 'react'
import VideoCard from '../molecules/VideoCard'
import { getMoreVideos } from '../scripts'

const VideosList = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.items.map(video => (
        <VideoCard
          thumbnail={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
          videoId={video.snippet.resourceId.videoId}
        />
      ))}
      <button
        id="loadMore"
        className="btn"
        onClick={() => getMoreVideos(videos.nextPageToken)}
      >
        load more
      </button>
    </div>
  )
}

export default VideosList
