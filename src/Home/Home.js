import AsteroidCard from '../AsteroidCard/AsteroidCard';
import './Home.css';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import asteroidImage from '../assets/asteroid.png';
import PropTypes from 'prop-types';

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
        return <p className="loading">Loading...</p>
    }

    return (
        <section className="homepage" style={{ backgroundImage: `url(${asteroidImage})` }}>
            <article className="daily-photo-container">
                <div className="daily-photo-info">
                    <h2>Astronomy Picture of the Day ==={">"} </h2>
                    <h2>(APOD)</h2>
                    <NavLink to="/apod" className="view-apod">More Info</NavLink>
                </div>
                {photo.media_type === "video" ?
                    <div className="apod-daily-image">
                        <iframe
                            width="700"
                            height="500"
                            src={photo.url}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div> :
                    <img className="apod-daily-image" src={photo.url} alt="NASA-photo-of-day"></img>
                }
            </article>
            <article className="homepage-asteroids">
                <div className="homepage-asteroids-header">
                    <h3>Today's Asteroids ({homeAsteroids.length} of {asteroids.length})</h3>
                    <NavLink to="/asteroids" className="view-asteroids">View All</NavLink>
                </div>
                <div className="homepage-asteroids-container">
                    {homeAsteroids}
                </div>
            </article>
        </section>
    )
}

export default Home;

Home.propTypes = {
    asteroids: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        nasa_jpl_url: PropTypes.string,
        is_potentially_hazardous_asteroid: PropTypes.string,
        estimated_diameter: PropTypes.object,
        is_potentially_hazardous_asteroid: PropTypes.bool,
        close_approach_data: PropTypes.array
    }).isRequired
    ),
    photo: PropTypes.shape({
        title: PropTypes.string,
        copyright: PropTypes.string,
        explanation: PropTypes.string,
        url: PropTypes.string
    }).isRequired,
    loading: PropTypes.bool.isRequired
}