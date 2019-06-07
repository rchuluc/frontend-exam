import React from 'react'
import { Link } from 'react-router-dom'
import { showVideos } from '../scripts'

const MenuItems = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-block" onClick={showVideos}>
        trailers
      </button>
      <Link to="/login" className="btn btn-block btn-transparent btn-route">
        logout
      </Link>
    </div>
  )
}

export default MenuItems
