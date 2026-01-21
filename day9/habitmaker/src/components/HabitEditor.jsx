import { useEffect, useState } from 'react'
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
    const updatedHabits = [...Habits, Habit]
    setHabits(updatedHabits)
    localStorage.setItem("newHabit",JSON.stringify(updatedHabits))
    console.log(Habit)
    console.log(updatedHabits)
    setHabit("")
  }
  const HandleRemove = (idx) => {
    let UpdatedHabit = Habits.filter((_, index) => idx != index)
    setHabits(UpdatedHabit)
  }
  useEffect(() => {
    let storedHabits = localStorage.getItem("newHabit")
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits))
    }
  }, [])
  return (
    <>
      <div className={styles.editor}>
        <h1 className={styles.title}>Make new Habit everyday</h1>
        <input type="text" id={styles.inp} placeholder='Enter your text'  onChange={handleChange} value={Habit} />
        <CustomButton BtnText='Add' style={styles.submitBtn} handler={handleSubmit} />
      </div>
        <div className={styles.habits}>
        <ul className={styles.habitItems}>
          {Habits.length > 0 &&
            Habits.map((val, idx) => (
              <div className={styles.items}>
                <li key={idx} className={styles.habitItem}>
                  {val}
                </li>
                <CustomButton key={idx + "k"}
                  BtnText="Remove"
                  style={styles.submitBtn}
                  handler={() => HandleRemove(idx)}
                />
              </div>
          ))}


          
        </ul>
      </div>
    </>


  )
}
