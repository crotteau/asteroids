import AsteroidCard from '../AsteroidCard/AsteroidCard'
import './Home.css'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


function Home({ asteroids, photo, loading }) {
    const [homeAsteroids, sliceAsteroids] = useState([])

    useEffect(() => {
        showAsteroids()
    }, [asteroids])

    const showAsteroids = () => {
        if (asteroids) {
            const fourAsteroids = asteroids.slice(0, 4).map((asteroid) => {
                return (
                    <AsteroidCard key={asteroid.id} asteroid={asteroid} />
                )
            })
            sliceAsteroids(fourAsteroids)
        }
    }

    if (loading === 'true') {
        return <p className='loading'>Loading...</p>
    }
    return (
        <section className='homepage'>
            <article className='daily-photo' style={{ backgroundImage: `url(${photo.url})` }}>
                <div className='daily-photo-info'>
                    <h2>Astronomy Picture of the Day</h2>
                    <h3 className='daily-photo-title'>{photo.title}</h3>
                    <p className='daily-photo-cite'>{photo.copyright}</p>
                    <p className='daily-photo-explanation'>{photo.explanation}</p>
                    <a href={photo.url}>View Fullsize Image</a>
                </div>
                <h3>Today's Asteroids</h3>
                <article className='homepage-asteroids'>
                    {homeAsteroids}
                </article>
               <NavLink to='/asteroids' className='view-asteroids'>View All</NavLink>
            </article>
        </section>
    )

}

export default Home;
