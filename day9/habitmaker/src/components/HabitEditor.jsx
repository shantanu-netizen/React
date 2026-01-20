import React, { useState } from 'react'
import styles from './HabitEditor.module.css'
import CustomButton from './customButton/CustomButton'
export default function HabitEditor() {
  const [Habit, setHabit] = useState("")
  const [Habits, setHabits] = useState([])
  const handleChange = (e) => {
    setHabit(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setHabits([...Habits, Habit])
    console.log(Habit)
    console.log(Habits)
    setHabit("")
  }
  const HandleRemove = (idx) => {
    let UpdatedHabit = Habits.filter((val, index) => idx != index)
    setHabits(UpdatedHabit)
  }
  return (
    <>
      <div className={styles.editor}>
        <h1 className={styles.title}>Make new Habit everyday</h1>
        <input type="text" id={styles.inp} placeholder='Enter your text'  onChange={handleChange} value={Habit} />
        <CustomButton BtnText='Add' style={styles.submitBtn} handler={handleSubmit} />
      </div>
      <div className={styles.habits}>
        <ul className={styles.habitsItems}>
          {Habits.length>0 && Habits.map((val,idx) => (
            <div className={styles.items}>
              <li key={idx} className={styles.habitItem}>{val}</li>
              <CustomButton BtnText="Remove" style={styles.submitBtn} handler={()=>HandleRemove(idx)} />
            </div>
          ))}


          
        </ul>
      </div>
    </>


  )
}
