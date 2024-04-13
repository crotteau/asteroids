import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import Asteroids from '../Asteroids/Asteroids'
import AsteroidCard from '../AsteroidCard/AsteroidCard'
import NotFound from '../NotFound/NotFound'
import './App.css';

function App() {
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
