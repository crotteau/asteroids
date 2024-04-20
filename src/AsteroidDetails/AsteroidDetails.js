import './AsteroidDetails.css'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AsteroidTable from '../AsteroidTable/AsteroidTable'
import asteroidImage from '../assets/asteroid.png'
import whale from '../assets/bluewhale.png'

function AsteroidDetails({ asteroids }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const [a, setTargetAsteroid] = useState()
    const [size, setSize] = useState()

    useEffect(() => {
        displayAsteroid()
    }, [asteroids])

    useEffect(() => {
        if (a) {
            calculateSize()
        }
    }, [a])

    const displayAsteroid = () => {
        const targetAsteroid = asteroids.find((asteroid) => {
            return asteroid.id === id
        })
        setTargetAsteroid(targetAsteroid)
    }
    const calculateSize = () => {
        const whaleCount = (Math.round(a.estimated_diameter.feet.estimated_diameter_max / 80))
        setSize(whaleCount)
    }

    if (!a) {
        return (
            <p className='loading'>Loading...</p>
        )
    }
    return (
        <article className='asteroid-details' style={{ backgroundImage: `url(${asteroidImage})` }}>
            <h2>Asteroid - {a.name}</h2>
            <AsteroidTable a={a} />
            <div className="asteroid-size">
                <h3>Just how large is this asteroid?</h3>
                <p>At its largest width, it has a diameter of {size} blue whales (~80ft each)</p>
                {[...Array(size)].map((size) => (
                    <img src={whale} alt="blue-whale" className="blue-whale" key={size}></img>
                )
                )}
                <p><a href={a.nasa_jpl_url}>More info</a> at NASA's Small-Body Database</p>
            </div>
            <button onClick={() => { navigate(-1) }}> Go Back </button>
        </article>
    )
}

export default AsteroidDetails;
