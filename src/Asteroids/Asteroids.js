import './Asteroids.css'
import React, { useState, useEffect } from 'react'
import AsteroidCard from '../AsteroidCard/AsteroidCard'
import { useNavigate } from 'react-router-dom'
import ChangeData from '../ChangeData/ChangeData'
import asteroidImage2 from '../assets/asteroid2.png'

function Asteroids({ asteroids, changeDate }) {
    const [allAsteroids, setAllAsteroids] = useState([])
    const [sortedAsteroids, sortDirection] = useState([])
    const [sort, setSort] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        showAsteroids()
    }, [sortedAsteroids])

    useEffect(() => {
        sortAsteroids()
    }, [sort, asteroids])

    const selectAsteroid = (asteroidId) => {
        navigate(`/asteroids/${asteroidId}`)
    }

    const sortAsteroids = () => {
        if (sort === 'closest') {
            const sorted = [...asteroids].sort((a, b) => {
                const distanceA = parseInt(a.close_approach_data[0].miss_distance.miles);
                const distanceB = parseInt(b.close_approach_data[0].miss_distance.miles);
                console.log(distanceA)
                return distanceA - distanceB;
            });
            sortDirection(sorted);
        } else if (sort === 'furthest') {
            const sorted = [...asteroids].sort((a, b) => {
                const distanceA = parseInt(a.close_approach_data[0].miss_distance.miles);
                const distanceB = parseInt(b.close_approach_data[0].miss_distance.miles);
                return distanceB - distanceA;
            });
            sortDirection(sorted);
        } else {
            sortDirection(asteroids)
        }
    }

    const showAsteroids = () => {
        const allAsteroids = sortedAsteroids.map((asteroid) => {
            return (
                <AsteroidCard key={asteroid.id} asteroid={asteroid} onClick={() => selectAsteroid(asteroid.id)} />
            )
        })
        setAllAsteroids(allAsteroids)
    }

    return (
        <React.Fragment>
            <img className='flying-asteroid' src={asteroidImage2} alt='asteroid'></img>
            <img className='flying-asteroid2' src={asteroidImage2} alt='asteroid'></img>
            <ChangeData changeDate={changeDate} setSort={setSort} />
            <h3 className='all-asteroids-number'>Viewing {allAsteroids.length} of {allAsteroids.length}</h3>
            <section className='all-asteroids-grid'>
                {allAsteroids}
            </section>
        </React.Fragment>
    )
}

export default Asteroids;