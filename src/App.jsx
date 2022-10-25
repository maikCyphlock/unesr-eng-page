import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Child from './pages/course/Child';
function App() {
  return (
    <Router>
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/course/:id" element={<Child />} />
        
      </Routes>

    </div>
    </Router>
  )
}

export default App
