import './Apod.css';
import { NavLink } from 'react-router-dom';
import asteroidImage from '../assets/asteroid.png';
import React from 'react';
import PropTypes from 'prop-types';

function Apod({ photo }) {
    if (photo.media_type === "video") {

    }
    return (
        <section className="apod" style={{ backgroundImage: `url(${asteroidImage})` }}>
            <article className="apod-photo-info">
                <h2>Astronomy Picture of the Day</h2>
                <h3 className="apod-photo-title">{photo.title}</h3>
                <p className="apod-photo-cite">{photo.copyright}</p>
                <p className="apod-photo-explanation">{photo.explanation}</p>
                <a className="view-fullsize-apod" href={photo.url}>View Fullsize Image</a>
                <NavLink to="/" className="go-back">Back to Main</NavLink>
            </article>
            {photo.media_type === "video" ?
                <div className="apod-daily-image">
                    <iframe
                        width="600"
                        height="500"
                        src={photo.url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div> :
                <img className="apod-daily-image" src={photo.url} alt="NASA-photo-of-day"></img>
            }
        </section>
    )
}

export default Apod;

Apod.propTypes = {
    photo: PropTypes.shape({
        title: PropTypes.string,
        copyright: PropTypes.string,
        explanation: PropTypes.string,
        url: PropTypes.string
    }).isRequired
}