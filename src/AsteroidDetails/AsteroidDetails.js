import './AsteroidDetails.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AsteroidDetails({ asteroids }) {
    const { id } = useParams()
    const [a, setTargetAsteroid] = useState()

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
            <p>Closest Approach: {a.close_approach_data[0].close_approach_date_full}</p>
            <p>Miss Distance: {parseInt(a.close_approach_data[0].miss_distance.miles).toLocaleString()} miles</p>
            <p>Estimated Diameter Minimum: {parseInt(a.estimated_diameter.feet.estimated_diameter_min).toFixed(2)} feet</p>
            <p>Estimated Diameter Maximum: {parseInt(a.estimated_diameter.feet.estimated_diameter_max).toFixed(2)} feet</p>
            <p>Relative Velocity: {parseInt(a.close_approach_data[0].relative_velocity.miles_per_hour).toLocaleString()} mph</p>
            <p><a href={a.nasa_jpl_url}>More info</a> at NASA's Small-Body Database</p>
        </article>
    )
}

export default AsteroidDetails;
