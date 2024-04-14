import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Asteroids from '../Asteroids/Asteroids'
import AsteroidCard from '../AsteroidCard/AsteroidCard'
import NotFound from '../NotFound/NotFound'
import './App.css';
import { getPhoto } from '../apiCalls';
import React, {useState, useEffect} from 'react'
import dailyPhoto from '../MockData/dailyPhoto'
import asteroidsData from '../MockData/asteroids'
import DateObject from "react-date-object";


function App() {
  const [loading, isLoading] = useState('true')
  const [photo, setPhoto] = useState({})
  const [asteroids, setAsteroids] = useState([])
  const [asteroidDate, setDate] = useState('')
  

useEffect(() => {
  updatePhoto()
  findAsteroids()
  findDate()
}, [])

const findDate = () => {
  var date = new DateObject()
  date.setFormat('YYYY-MM-DD')
  setDate(date.format())
}

const updatePhoto = () => {
  setPhoto(dailyPhoto)
  isLoading('false')
    // getPhoto()
    // .then(data => setPhoto(data))
    // .catch(error => console.log(error))
  }

const findAsteroids = () => {
  setAsteroids(asteroidsData.near_earth_objects)
  isLoading('false')
  // getAsteroids(asteroidDate)
  // insert fetch
}

  return (
    <div className="App">
      <h1>Asteroid Patrol</h1>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home photo={photo} asteroids={asteroids}/>} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/asteroids/:id" element={<AsteroidCard />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
