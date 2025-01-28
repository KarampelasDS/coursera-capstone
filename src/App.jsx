import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
     <Navbar/>
     <BrowserRouter basename='/coursera-capstone'>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
     </>
  )
}

export default App
