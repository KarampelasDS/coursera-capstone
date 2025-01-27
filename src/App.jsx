import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
