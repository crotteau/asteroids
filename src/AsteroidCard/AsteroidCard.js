import './AsteroidCard.css'
import React from 'react'

function AsteroidCard({ asteroid, onClick }) {

    return (
        <div className={asteroid.is_potentially_hazardous_asteroid ? 'asteroid hazardous' : 'asteroid not-hazardous'} onClick={onClick}>
            <p>Asteroid: {asteroid.name}</p>
            <p>Close Approach Date: {asteroid.close_approach_data[0].close_approach_date_full}</p>
            <p>Potentially Hazardous: {asteroid.is_potentially_hazardous_asteroid ? 'Yes, watch out!' : 'No, we\'re safe!'}</p>
        </div>
    )
}

export default AsteroidCard;