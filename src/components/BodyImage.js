import React from 'react'
import image from '../images/img-2.jpg'

const BodyImage = () => {
    return(
        <div className="job-list">
            <img src={image} alt=""/>
            <hr></hr>
            <h1>Find the best Remote Job <i className="fas fa-hand-point-down"></i></h1>
        </div>
    )
}

export default BodyImage