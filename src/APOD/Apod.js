import './Apod.css'
import { NavLink } from 'react-router-dom';
import asteroidImage from '../assets/asteroid.png'
import React from 'react';

function Apod({ photo }) {

    return (
        <section className='apod' style={{ backgroundImage: `url(${asteroidImage})` }}>
            <article className='apod-photo-info'>
                <h2>Astronomy Picture of the Day</h2>
                <h3 className='apod-photo-title'>{photo.title}</h3>
                <p className='apod-photo-cite'>{photo.copyright}</p>
                <p className='apod-photo-explanation'>{photo.explanation}</p>
                <a className='view-fullsize-apod' href={photo.url}>View Fullsize Image</a>
                <NavLink to='/' className='go-back'>Back to Main</NavLink>
            </article>
            <img className='apod-daily-image' src={photo.url} alt='NASA-photo-of-day'></img>
        </section>
    )
}

export default Apod;