import React from 'react'
import TextForm from './components/TextForm'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <>
      <NavBar/>
      <div className='container'>
        <TextForm />
      </div>
    </>
    
  )
}
