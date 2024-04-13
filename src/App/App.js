import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Asteroids from '../Asteroids/Asteroids'
import AsteroidCard from '../AsteroidCard/AsteroidCard'
import NotFound from '../NotFound/NotFound'
import './App.css';
import { getPhoto } from '../apiCalls';
import React, {useState, useEffect} from 'react'
import dailyPhoto from '../MockData/dailyPhoto'
import asteroidsData from '../MockData/asteroids'

function App() {
  const [loading, isLoading] = useState('true')
  const [photo, setPhoto] = useState({})
  const [asteroids, setAsteroids] = useState([])
  const [asteroidDate, setDate] = useState('')

useEffect(() => {
  updatePhoto()
  findAsteroids()
})


const updatePhoto = () => {
  setPhoto(dailyPhoto)
  isLoading(false)
    // getPhoto()
    // .then(data => setPhoto(data))
    // .catch(error => console.log(error))
  }

const findAsteroids = () => {
  setAsteroids(asteroidsData.near_earth_objects[asteroidDate])
  // insert fetch
}

  return (
    <div className="App">
      <h1>Asteroids</h1>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/asteroids/:id" element={<AsteroidCard />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
