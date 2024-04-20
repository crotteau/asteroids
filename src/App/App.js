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
// import dailyPhoto from '../MockData/dailyPhoto'
// import asteroidsData from '../MockData/asteroidsData'
function App() {
  console.log('rendering!!!!!')
  const [loading, isLoading] = useState(true)
  const [photo, setPhoto] = useState({})
  const [asteroids, setAsteroids] = useState([])
  const [asteroidDate, setDate] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    if (!asteroidDate) {
      console.log('fetching photo')
      findTodaysDate()
      updatePhoto()
    }
  }, [])

  useEffect(() => {
    if (asteroidDate) {
      console.log('fetching asteroids')
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

  const updatePhoto = () => {
    // setPhoto(dailyPhoto)
    getPhoto()
      .then(data => setPhoto(data))
      .catch(error => setError(error))
  }

  const findAsteroids = async () => {
    // setAsteroids(asteroidsData.near_earth_objects[asteroidDate])
    await getAsteroids([asteroidDate])
      .then(data => setAsteroids(data.near_earth_objects[asteroidDate]))
      .catch(error => setError(error))
    isLoading(false)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" className="main-header" onClick={() => findTodaysDate()}>ASTEROID PATROL</NavLink>
          <NavBar />
        </header>
        {error && <h2 className="error">*** {error} ***</h2>}
        <Routes>
          <Route path="/" element={<Home photo={photo} asteroids={asteroids} loading={loading} />} />
          <Route path="/apod" element={<Apod photo={photo} />} />
          <Route path="/asteroids" element={<Asteroids asteroids={asteroids} changeDate={changeDate} />} />
          <Route path="/asteroids/:id" element={<AsteroidDetails asteroids={asteroids}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
