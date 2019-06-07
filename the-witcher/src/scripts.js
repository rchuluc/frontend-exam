import { YoutubeApiKey } from './API_KEYS'

export const handleClosePlayer = () => {
  const player = document.getElementById('player')
  player.classList.add('hide')
}

export const handleOpenPlayer = videoId => {
  const player = document.getElementById('player')
  player.classList.remove('hide')
  const embeddedPlayer = document.getElementById('videoEmbedded')
  embeddedPlayer.src = `http://www.youtube.com/embed/${videoId}`
}

export const floatLabel = () => {
  const label = window.event.target.previousElementSibling

  if (window.event.type === 'focus') {
    label.classList = 'form-label-float'
  } else if (window.event.type === 'blur') {
    if (window.event.target.value !== '') {
      label.classList = 'form-label-float'
    } else label.classList = 'form-label-initial'
  }
}

export const handleLogin = () => {
  console.log('Ok')
}

export const getVideos = async () => {
  const method = {
    method: 'GET',
    mode: 'cors'
  }
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=7&playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&key=${YoutubeApiKey}`

  let response = await fetch(url, method)
  let data = await response.json()
  return data
}

export const loadMoreVideos = async nextPageToken => {
  const method = {
    method: 'GET',
    mode: 'cors'
  }
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=7&pageToken=${nextPageToken}&playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&key=${YoutubeApiKey}`

  let response = await fetch(url, method)
  let data = await response.json()
  return data
}

export const getMoreVideos = PageToken => {
  loadMoreVideos(PageToken)
}

export const showVideos = () => {
  document.getElementById('content').classList.add('enter-rl')
  console.log('call')
}
