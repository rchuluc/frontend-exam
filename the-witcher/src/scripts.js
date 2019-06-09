import { YoutubeApiKey } from './API_KEYS'

export const handleClosePlayer = () => {
  const embeddedPlayer = document.getElementById('videoEmbedded')
  embeddedPlayer.contentWindow.postMessage(
    JSON.stringify({
      event: 'command',
      func: 'stopVideo'
    }),
    '*'
  )
  const player = document.getElementById('player')
  player.classList.toggle('hide')
}

export const handleCloseTrailers = () => {
  const content = document.getElementById('content')
  content.style.transform = 'translateX(0)'
}

export const handleOpenPlayer = videoId => {
  const player = document.getElementById('player')
  player.classList.toggle('hide')
  const embeddedPlayer = document.getElementById('videoEmbedded')
  embeddedPlayer.title = `${videoId}`
  embeddedPlayer.src = `http://www.youtube.com/embed/${videoId}?enablejsapi=1`
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
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=6&pageToken=${nextPageToken}&playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&key=${YoutubeApiKey}`

  let response = await fetch(url, method)
  let data = await response.json()
  return data
}

export const showVideos = () => {
  const content = document.getElementById('content')
  /* if (content.classList.contains('exit-rl')) {
    content.classList.remove('exit-rl')
  }
  content.classList.add('enter-rl')*/
  content.style.transform = 'translateX(-100vw)'
}
