import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import WorldStats from './Components/WorldStats';
import CountryStats from './Components/CountryStats'

function App() {
  return (
    <div className="App">
      <Navbar />
      <WorldStats />
      <CountryStats />
    </div>
  );
}

export default App;
