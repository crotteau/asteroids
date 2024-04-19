import './AsteroidDetails.css'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AsteroidTable from '../AsteroidTable/AsteroidTable'

function AsteroidDetails({ asteroids }) {
    const { id } = useParams()
    const navigate = useNavigate()
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
            <AsteroidTable a={a} />
            <div className='asteroid-misc'>
                <p><a href={a.nasa_jpl_url}>More info</a> at NASA's Small-Body Database</p>
                <button onClick={() => { navigate(-1) }}> Return to Asteroids List </button>
            </div>
        </article>
    )
}

export default AsteroidDetails;
