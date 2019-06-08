import React from 'react'

const Thumbnail = ({ image, children }) => {
  const background = {
    backgroundImage: `url(${image})`
  }

  return (
    <div className="video-thumbnail" style={background}>
      {children}
    </div>
  )
}

export default Thumbnail
