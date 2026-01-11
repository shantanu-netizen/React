import React from 'react'
import Home from './page/Home'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import Blog from './page/Blog'
import Contact from './page/Contact'
import Profile from './page/Profile'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}