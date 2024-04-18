import './AsteroidCard.css'
import React from 'react'

function AsteroidCard({ asteroid, onClick }) {

    return (
        <div className={asteroid.is_potentially_hazardous_asteroid ? 'asteroid hazardous' : 'asteroid not-hazardous'} onClick={onClick}>
            <h3>{asteroid.name}</h3>
            <p><span>Closest Approach Date: </span> {asteroid.close_approach_data[0].close_approach_date_full}</p>
            <p><span>Missed Earth By: </span>{parseInt(asteroid.close_approach_data[0].miss_distance.miles).toLocaleString()} miles</p>
            <p><span>Potentially Hazardous: </span>{asteroid.is_potentially_hazardous_asteroid ? 'Yes, keep an eye out!' : 'No, we\'re safe!'}</p>
        </div>
    )
}

export default AsteroidCard;