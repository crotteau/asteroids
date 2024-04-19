import AsteroidCard from '../AsteroidCard/AsteroidCard'
import './Home.css'
import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import asteroidImage from '../assets/asteroid.png'

function Home({ asteroids, photo, loading }) {
    const [homeAsteroids, sliceAsteroids] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        showAsteroids()
    }, [asteroids])

    const selectAsteroid = (asteroidId) => {
        navigate(`/asteroids/${asteroidId}`)
    }

    const showAsteroids = () => {
        if (asteroids) {
            const fourAsteroids = asteroids.slice(0, 4).map((asteroid) => {
                return (
                    <AsteroidCard key={asteroid.id}
                        asteroid={asteroid}
                        onClick={() => selectAsteroid(asteroid.id)}
                    />
                )
            })
            sliceAsteroids(fourAsteroids)
        }
    }


    if (loading) {
        return <p className='loading'>Loading...</p>
    }
    return (
        <section className='homepage' style={{ backgroundImage: `url(${asteroidImage})` }}>
            <article className='daily-photo-container'>
                <div className='daily-photo-info'>
                    <h2>Astronomy Picture of the Day ==={'>'} </h2>
                    <h2>(APOD)</h2>
                    <NavLink to='/apod' className='view-apod'>More Info</NavLink>
                </div>
                <img className='daily-photo' src={photo.url} alt='NASA-photo-of-day'></img>
            </article>
            <article className='homepage-asteroids'>
                <div className='homepage-asteroids-header'>
                    <h3>Today's Asteroids (4 of {asteroids.length})</h3>
                    <NavLink to='/asteroids' className='view-asteroids'>View All</NavLink>
                </div>
                <div className='homepage-asteroids-container'>
                    {homeAsteroids}
                </div>
            </article>
        </section>
    )

}

export default Home;
