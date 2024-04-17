import './Asteroids.css'
import React, { useState, useEffect } from 'react'
import AsteroidCard from '../AsteroidCard/AsteroidCard'
import { useNavigate } from 'react-router-dom'
import ChangeData from '../ChangeData/ChangeData'

function Asteroids({ asteroids, changeDate }) {
    const [allAsteroids, setAllAsteroids] = useState([])
    const navigate = useNavigate()
    console.log(asteroids)
    useEffect(() => {
        showAsteroids()
    }, [asteroids])

    const selectAsteroid = (asteroidId) => {
        navigate(`/asteroids/${asteroidId}`)
    }

    const showAsteroids = () => {
        if (asteroids) {
            const allAsteroids = asteroids.map((asteroid) => {
                return (
                    <AsteroidCard key={asteroid.id} asteroid={asteroid} onClick={() => selectAsteroid(asteroid.id)} />
                )
            })
            setAllAsteroids(allAsteroids)
        }
    }
    return (
        <React.Fragment>
            <ChangeData changeDate={changeDate}/>
            <section className='all-asteroids-grid'>
                {allAsteroids}
            </section>
        </React.Fragment>
    )
}

export default Asteroids;