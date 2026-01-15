import React from 'react'
//components are independent and resudable bits of code.
//componenets come in two types class componenets and functional components
//props are arguments passed into react components
//To make componenets reusable
//To pass the date between the componenets
export default function StudentCard({ name, branch, year, isPlaced }) {
    if (isPlaced === true) {
        return (
      
      <div>
      My name is {name} and i am {branch} studnet. this is my {year} year and i am Placed
      </div>
        )
    }
     if (isPlaced === false) {
        return (
      
      <div>
      My name is {name} and i am {branch} studnet. this is my {year} year and i am not placed
      </div>
        )
    }
    
    
}
