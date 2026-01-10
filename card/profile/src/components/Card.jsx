import React from 'react'
import logo from '../assets/image.png'
import "./style.css"
export default function Card() {
    return (
       
            <div className='profile'>
                <div className='img'>
                    <img src={logo} />
                    <p>REACT</p>
                </div>
                <div className='details'>
                    <p>Application:APP</p>
                    <p>Develoyed:FACEBOOK</p>
                    <p>Year:2011</p>
                </div>
            </div>
        
        
    )
}
