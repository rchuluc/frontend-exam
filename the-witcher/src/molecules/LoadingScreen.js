import React from 'react'
import { ReactComponent as LoaderIcon } from '../assets/loader.svg'

const LoadingScreen = () => {
  return (
    <div className="overlay fade-out">
      <LoaderIcon className="loader loader-center" />
    </div>
  )
}

export default LoadingScreen
