import './AsteroidDetails.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function AsteroidDetails({ asteroids, findDate, loading }) {
    const { id } = useParams()
    const [a, setTargetAsteroid] = useState()
    console.log(asteroids)
    useEffect(() => {
        displayAsteroid()
    }, [asteroids])

    const displayAsteroid = () => {
        const targetAsteroid = asteroids.find((asteroid) => {
            return asteroid.id === id
        })
        setTargetAsteroid(targetAsteroid)
        console.log('target', targetAsteroid)
    }

    if (!a) {
        return (
            <p className='loading'>Loading...</p>
        )
    }

    return (
        <article className='asteroid-details'>
            <h2>{a.name}</h2>
            <p>{a.is_potentially_hazardous_asteroid ? 'Watch out! This asteroid could be potentially hazardous' : 'This asteroid does not pose a threat!'}</p>
            <h3>Approach Data</h3>
            <p>Closest Approach: {a.close_approach_data.close_approach_date_full}</p>
            <p>Miss Distance: {a.close_approach_data.miss_distance_miles}</p>
            <p>Estimated Diameter Minimum: {a.estimated_diameter.feet.estimated_diameter_min}</p>
            <p>Estimated Diameter Maximum: {a.estimated_diameter.feet.estimated_diameter_max}</p>
        </article>
    )
}

export default AsteroidDetails;