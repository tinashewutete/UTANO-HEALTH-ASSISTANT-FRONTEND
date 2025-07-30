import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} /> 
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
