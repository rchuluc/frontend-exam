import React from 'react'
import '../styles.css'
import {handleClosePlayer} from '../scripts'

const Overlay = ({
    children,
}) => {
    return(
    <div className="overlay hide" id="player">
        <span className="overlay-close-button" onClick={handleClosePlayer} >CLOSE</span>
        {children}
    </div>
    )
}

export default Overlay