import React from 'react'
import '../styles.css'

const Overlay = ({
    children,
}) => {
    return(
    <div className="overlay">
        <span className="overlay-close-button" >CLOSE</span>
        {children}
    </div>
    )
}

export default Overlay