import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/course';
function App() {
  return (
    <Router>
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/course/:id" element={<Course />} />
        
      </Routes>

    </div>
    </Router>
  )
}

export default App
