import React from 'react'
import { showVideos } from '../scripts'

const MenuItems = ({ action }) => {
  return (
    <div className="btn-group">
      <button className="btn btn-block" onClick={showVideos}>
        trailers
      </button>
      <button onClick={action} className="btn btn-transparent btn-block">
        logout
      </button>
    </div>
  )
}

export default MenuItems
