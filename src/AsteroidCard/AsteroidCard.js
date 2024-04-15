import './AsteroidCard.css'
import React from 'react'

function AsteroidCard({asteroid}) {

    return (
        <div className='asteroid'>
            <p>Asteroid: {asteroid.name}</p>
            <p>Close Approach Date: {asteroid.close_approach_data[0].close_approach_date_full}</p>
            <p>Hazardous: {asteroid.is_potentially_hazardous_asteroid ? 'Yes, watch out!' : 'No, we\'re safe!'}</p>
        </div>
    )
}

export default AsteroidCard;