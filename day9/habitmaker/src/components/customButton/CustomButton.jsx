import React from 'react'
import styles from './CustomButton.module.css'
export default function CustomButton({BtnText="",style="" ,handler=()=>{}}) {
  return (
    <div>
      <button className={`${styles.Btn} ${style}`} onClick={handler}>{BtnText||"Submit"}</button>
    </div>
  )
}
