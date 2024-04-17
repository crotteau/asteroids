import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Asteroids from '../Asteroids/Asteroids'
import NotFound from '../NotFound/NotFound'
import AsteroidDetails from '../AsteroidDetails/AsteroidDetails';
import './App.css';
import { getPhoto } from '../apiCalls';
import React, { useState, useEffect } from 'react'
import dailyPhoto from '../MockData/dailyPhoto'
import asteroidsData from '../MockData/asteroidsData'
import DateObject from "react-date-object";
import { getAsteroids } from '../apiCalls';


function App() {
  console.log('rendering!!!!!')
  const [loading, isLoading] = useState(true)
  const [photo, setPhoto] = useState({})
  const [asteroids, setAsteroids] = useState([])
  const [asteroidDate, setDate] = useState()

  useEffect(() => {
    if (!asteroidDate) {
    findTodaysDate()
    updatePhoto()
    }
  }, [])

  useEffect(() => {
    if (asteroidDate) {
    findAsteroids()
    }
  }, [asteroidDate])
  
  const findTodaysDate = () => {
    var date = new DateObject()
    date.setFormat('YYYY-MM-DD')
    // setDate(date.format())
    setDate('2024-04-13')
    console.log('asteroid date', asteroidDate)
  }

  const changeDate = (date) => {
    setDate(date)
    console.log(asteroidDate)
  }

  const updatePhoto = () => {
    setPhoto(dailyPhoto)
    // getPhoto()
    // .then(data => setPhoto(data))
    // .catch(error => console.log(error))
  }
  
  const findAsteroids = async () => {
    setAsteroids(asteroidsData.near_earth_objects[asteroidDate])
    isLoading(false)
    // await getAsteroids([asteroidDate])
    // .then(data => 
    //   setAsteroids(data.near_earth_objects[asteroidDate]))
    //   .catch(error => console.log(error))
  }
  console.log(asteroids)
  return (
    <div className="App">
      <h1>Asteroid Patrol</h1>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home photo={photo} asteroids={asteroids} loading={loading} />} />
          <Route path="/asteroids" element={<Asteroids asteroids={asteroids} loading={loading} changeDate={changeDate} />} />
          <Route path="/asteroids/:id" element={<AsteroidDetails asteroids={asteroids} loading={loading}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
