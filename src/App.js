import './App.css';
import React from 'react';
import NavBar from './Nav';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <NavBar/> */}
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
        </Routes>
    </div>
  );
}

export default App;

