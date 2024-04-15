import './Asteroids.css'
import React, {useState, useEffect} from 'react'
import AsteroidCard from '../AsteroidCard/AsteroidCard'

function Asteroids({asteroids}) {
    const [allAsteroids, setAllAsteroids] = useState([])

    useEffect(() => {
        showAsteroids()
    }, [asteroids])

    const showAsteroids = () => {
        if (asteroids) {
            const allAsteroids = asteroids.map((asteroid) => {
                return (
                    <AsteroidCard key={asteroid.id} asteroid={asteroid} />
                )
            })
            setAllAsteroids(allAsteroids)
        }
    }
    return (
        <section className='all-asteroids-grid'>
            {allAsteroids}
        </section>
    )
}

export default Asteroids;