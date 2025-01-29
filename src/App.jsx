import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Reservations from './pages/Reservations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
     <Navbar/>
     <BrowserRouter basename='/coursera-capstone'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reservations" element={<Reservations />}/>
      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
