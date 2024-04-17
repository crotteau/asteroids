import './Asteroids.css'
import React, { useState, useEffect } from 'react'
import AsteroidCard from '../AsteroidCard/AsteroidCard'
import { useNavigate } from 'react-router-dom'
import ChangeData from '../ChangeData/ChangeData'

function Asteroids({ asteroids, changeDate }) {
    const [allAsteroids, setAllAsteroids] = useState([])
    const [sortedAsteroids, sortDirection] = useState([])
    const [sort, setSort] = useState('')
    const navigate = useNavigate()
    console.log('sort', typeof (sort))
    console.log('sortedAsteroids', sortedAsteroids)

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
            <ChangeData changeDate={changeDate} setSort={setSort} />
            <section className='all-asteroids-grid'>
                {allAsteroids}
            </section>
        </React.Fragment>
    )
}

export default Asteroids;