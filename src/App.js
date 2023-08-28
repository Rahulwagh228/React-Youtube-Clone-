import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Watch from './pages/Watch'

export default function App() {
  return (
    
    // <h1 className="text-6xl font-bold underline "> Hey this is the youtube clone</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/watch/:id" element={<Watch />}/>
      </Routes>
    </BrowserRouter>
  )
}
