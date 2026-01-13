import React from 'react'
//Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
//Components come in two types, Class components and Function components

//Props are arguments passed into React components.

//To Pass Data Between Components
//To Make Components Reusable
//To Make Components Reusable
export default function StudentCard({ name, branch, year, isPlaced }) {
  if (isPlaced === true) {
    return (
      <p>
        My name is {name} and I am a {branch} student. This is my {year} year and I
        am placed.
      </p>
    )
  }
  if (isPlaced === false) {
    return (
      <p>
        My name is {name} and I am a {branch} student. This is my {year} year and I
        am not placed.
      </p>
    )
  }
}
