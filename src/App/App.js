import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getPhoto, getAsteroids } from '../apiCalls';
import DateObject from "react-date-object";
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Asteroids from '../Asteroids/Asteroids';
import NotFound from '../NotFound/NotFound';
import AsteroidDetails from '../AsteroidDetails/AsteroidDetails';
import Apod from '../APOD/Apod';
import './App.css';

function App() {
  const [loading, isLoading] = useState(true)
  const [photo, setPhoto] = useState({})
  const [asteroids, setAsteroids] = useState([])
  const [asteroidDate, setDate] = useState()
  const [error, setError] = useState('')
console.log(photo)
  useEffect(() => {
    if (!asteroidDate) {
      findTodaysDate()
    }
  }, [])

  useEffect(() => {
    if (asteroidDate) {
      updatePhoto()
      findAsteroids()
    }
  }, [asteroidDate])

  const findTodaysDate = () => {
    const date = new DateObject()
    date.setFormat('YYYY-MM-DD')
    setDate(date.format())
  }

  const changeDate = (date) => {
    setDate(date)
  }

  const updatePhoto = async () => {
    try {
      const response = await getPhoto()
      if (response) {
        setPhoto(response)
      }
    } catch (error) {
      setError(error)
    }
    isLoading(false)
  }

  const findAsteroids = async () => {
    try {
      const response = await getAsteroids([asteroidDate])
      if (response) {
        setAsteroids(response.near_earth_objects[asteroidDate])
      }
    } catch (error) {
      setError(error)
    }
    isLoading(false)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" className="main-header" onClick={() => findTodaysDate()}>ASTEROID PATROL</NavLink>
          <NavBar />
        </header>
        {error && <h2 className="error">{error.message}</h2>}
        <Routes>
          <Route path="/" element={<Home photo={photo} asteroids={asteroids} loading={loading} />} />
          <Route path="/apod" element={<Apod photo={photo} />} />
          <Route path="/asteroids" element={<Asteroids asteroids={asteroids} changeDate={changeDate} loading={loading} />} />
          <Route path="/asteroids/:id" element={<AsteroidDetails asteroids={asteroids} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {
//   "date": "2024-04-21",
//   "explanation": "Watch Juno zoom past Jupiter.  NASA's robotic spacecraft Juno is continuing on its now month-long, highly-elongated orbits around our Solar System's largest planet.  The featured video is from perijove 16, the sixteenth time that Juno passed near Jupiter since it arrived in mid-2016. Each perijove passes near a slightly different part of Jupiter's cloud tops.  This color-enhanced video has been digitally composed from 21 JunoCam still images, resulting in a 125-fold time-lapse. The video begins with Jupiter rising as Juno approaches from the north. As Juno reaches its closest view -- from about 3,500 kilometers over Jupiter's cloud tops -- the spacecraft captures the great planet in tremendous detail. Juno passes light zones and dark belts of clouds that circle the planet, as well as numerous swirling circular storms, many of which are larger than hurricanes on Earth.  As Juno moves away, the remarkable dolphin-shaped cloud is visible.  After the perijove, Jupiter recedes into the distance, now displaying the unusual clouds that appear over Jupiter's south.  To get desired science data, Juno swoops so close to Jupiter that its instruments are exposed to very high levels of radiation.",
//   "media_type": "video",
//   "service_version": "v1",
//   "title": "Perijove 16: Passing Jupiter",
//   "url": "https://www.youtube.com/embed/c4TU3arrZR8?rel=0"
// }