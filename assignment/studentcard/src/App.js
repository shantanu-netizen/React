import React from 'react'
import Hearder from './components/Hearder'
import StudentCard from './components/StudentCard'
export default function App() {
  return (
    <div>
      <Hearder />
      <StudentCard name="Abhijeet" branch="CSE" year="3rd" isPlaced={true} />
      <StudentCard name="Deewas" branch="CSE" year="4rd"  isPlaced={true}/>
      <StudentCard name="Shashi" branch="CSE" year="2rd" isPlaced={false}/>
    </div>
  )
}
