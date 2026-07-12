import React, { useState } from 'react'

export default function App() {
  const [counter, setcounter] = useState(0)
  const addValue = () => {
    setcounter(counter+1)
  }
  const removeValue = () => {
    setcounter(counter - 1)
  }
  const reset = () => {
    setcounter(0)
  }
  return (
    <div>
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}>increment</button>
      <button onClick={removeValue}> decerement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
