import React from 'react'
import Course from './Course'
export default function Dashboard({ username }) {
    return (
        <div>
            <h1>Hey {username}</h1>
            this month you completed 10 classes and 3 project. total attendance was 90%.
            <Course />
        </div>
    )
}   
