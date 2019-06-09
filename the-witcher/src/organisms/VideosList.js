import React from 'react'
import VideoCard from '../molecules/VideoCard'
import { loadMoreVideos } from '../scripts'
import { ReactComponent as CircularLoader } from '../assets/circular-loader.svg'

class VideosList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: this.props.videos,
      loading: false
    }
  }

  loadMore = nextPage => {
    this.setState({
      loading: true
    })
    loadMoreVideos(nextPage).then(data => {
      data.items = [...this.state.videos.items, ...data.items]
      this.setState({
        videos: data,
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="video-grid">
        {this.state.videos.items.map(video => (
          <VideoCard
            key={video.id}
            thumbnail={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            videoId={video.snippet.resourceId.videoId}
          />
        ))}
        {typeof this.state.videos.nextPageToken !== 'undefined' ? (
          <div className="button-container">
            {this.state.loading ? (
              <CircularLoader
                id="circular-loader"
                className="loader-circular loader-center"
              />
            ) : (
              <button
                id="loadMore"
                className="btn"
                onClick={() => this.loadMore(this.state.videos.nextPageToken)}
              >
                load more
              </button>
            )}
          </div>
        ) : null}
      </div>
    )
  }
}

export default VideosList
