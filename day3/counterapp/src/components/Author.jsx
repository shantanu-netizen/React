import React from 'react'
import panda from '../assets/image.png'
import './style.css'
export default function Author() {
  return (
      <div className='author'>
          <div className="profile">
              <img src={panda} alt="panada profile" />
              <p className='title'>Panda Ji</p>
          </div>
          <div id="bio">
              <p>Email:abc@gmail.com</p>
              <p>Role: Manager</p>
              <p>Department: IT and Tech</p>
          </div>
      </div>
  )
}
