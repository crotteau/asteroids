import './Home.css'
// import React from 'react'

function Home({ photo, asteroids }) {
    console.log(photo.url)
    return (
        <section className='homepage'>
            <h2>NASA's image of the day</h2>
            <article className='daily-photo' style={{ backgroundImage: `url(${photo.url})` }}>
                <h3 className='daily-photo-title'>{photo.title}</h3>
                <p className='daily-photo-cite'>{photo.copyright}</p>
                <p className='daily-photo-explanation'>{photo.explanation}</p>
                <h3>Today's Asteroids</h3>
                <button>View all</button>
            </article>
        </section>
    )

}

export default Home;
