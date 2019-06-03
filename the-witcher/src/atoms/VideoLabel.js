import React from 'react'
import styles from '../styles.css'

const Label = ({title}) =>{
    return(
        <div className="video-label">
            <p>
                {title}
            </p>
        </div>
    )
}

export default Label