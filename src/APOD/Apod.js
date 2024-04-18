import './Apod.css'
import { NavLink } from 'react-router-dom';

function Apod({ photo }) {

    return (
        <section className='apod'>
            <article className='daily-photo-info'>
                <h2>Astronomy Picture of the Day</h2>
                <h3 className='daily-photo-title'>{photo.title}</h3>
                <p className='daily-photo-cite'>{photo.copyright}</p>
                <p className='daily-photo-explanation'>{photo.explanation}</p>
                <a href={photo.url}>View Fullsize Image</a>
                <NavLink to='/' className='view-asteroids'>Back to Main</NavLink>
            </article>
            <img className='daily-image' src={photo.url} alt='NASA-photo-of-day'></img>
        </section>
    )
}

export default Apod;