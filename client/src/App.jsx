import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import MobileDev from './pages/MobileDevelopment/MobileDev';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mobile' element={<MobileDev/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
